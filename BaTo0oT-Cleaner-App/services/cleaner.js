const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')
const os = require('os')

class SystemCleaner {
  getTempPaths() {
    return {
      windows: [
        process.env.TEMP,
        process.env.WINDIR + '\\Temp',
        process.env.LOCALAPPDATA + '\\Temp',
        os.homedir() + '\\AppData\\Local\\Temp',
      ],
      macos: ['/tmp', '/private/var/tmp', '~/Library/Caches'],
      linux: ['/tmp', '/var/tmp', '~/.cache'],
    }
  }

  getJunkPatterns() {
    return [
      '*.tmp', '*.temp', '*.log', '*.bak', '*.old',
      'Thumbs.db', '.DS_Store', 'desktop.ini',
    ]
  }

  async calculateSize(dirPath) {
    let totalSize = 0
    try {
      const files = fs.readdirSync(dirPath)
      for (const file of files) {
        const filePath = path.join(dirPath, file)
        try {
          const stat = fs.statSync(filePath)
          if (stat.isFile()) {
            totalSize += stat.size
          } else if (stat.isDirectory()) {
            totalSize += await this.calculateSize(filePath)
          }
        } catch (e) {}
      }
    } catch (e) {}
    return totalSize
  }

  async scan() {
    const platform = process.platform
    const paths = this.getTempPaths()[platform] || []
    let totalSize = 0
    let totalFiles = 0

    for (const dirPath of paths) {
      const expandedPath = dirPath.replace(/^~/, os.homedir())
      if (fs.existsSync(expandedPath)) {
        const size = await this.calculateSize(expandedPath)
        totalSize += size
        totalFiles += fs.readdirSync(expandedPath).length || 0
      }
    }

    return {
      size: this.formatBytes(totalSize),
      bytes: totalSize,
      files: totalFiles,
    }
  }

  async clean() {
    const platform = process.platform
    const paths = this.getTempPaths()[platform] || []
    let cleanedSize = 0

    for (const dirPath of paths) {
      const expandedPath = dirPath.replace(/^~/, os.homedir())
      if (fs.existsSync(expandedPath)) {
        try {
          const files = fs.readdirSync(expandedPath)
          for (const file of files) {
            const filePath = path.join(expandedPath, file)
            try {
              const stat = fs.statSync(filePath)
              if (stat.isFile()) {
                cleanedSize += stat.size
                fs.unlinkSync(filePath)
              } else if (stat.isDirectory()) {
                fs.rmSync(filePath, { recursive: true, force: true })
              }
            } catch (e) {}
          }
        } catch (e) {}
      }
    }

    return {
      size: this.formatBytes(cleanedSize),
      bytes: cleanedSize,
    }
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
}

module.exports = SystemCleaner
