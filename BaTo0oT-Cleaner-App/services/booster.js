const { exec } = require('child_process')
const os = require('os')

class SystemBooster {
  async getProcesses() {
    return new Promise((resolve, reject) => {
      const platform = process.platform
      let cmd

      if (platform === 'win32') {
        cmd = 'tasklist /FO CSV /NH'
      } else if (platform === 'darwin' || platform === 'linux') {
        cmd = 'ps aux --no-headers'
      }

      exec(cmd, (error, stdout) => {
        if (error) return reject(error)
        resolve(stdout)
      })
    })
  }

  async killProcess(pid) {
    return new Promise((resolve, reject) => {
      const platform = process.platform
      let cmd

      if (platform === 'win32') {
        cmd = `taskkill /F /PID ${pid}`
      } else {
        cmd = `kill -9 ${pid}`
      }

      exec(cmd, (error, stdout) => {
        if (error) return reject(error)
        resolve(true)
      })
    })
  }

  async killNonEssentialProcesses() {
    const nonEssential = [
      'chrome', 'firefox', 'edge', 'brave',
      'spotify', 'discord', 'slack', 'teams',
      'skype', 'zoom', 'steam', 'epic',
      'onedrive', 'dropbox', 'googledrive',
    ]

    for (const proc of nonEssential) {
      try {
        const cmd = process.platform === 'win32'
          ? `taskkill /F /IM ${proc}.exe`
          : `pkill -f ${proc}`
        exec(cmd)
      } catch (e) {}
    }

    return true
  }

  async setGameMode() {
    const platform = process.platform

    if (platform === 'win32') {
      // Set power plan to High Performance
      exec('powercfg /setactive 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c')

      // Set process priority scheme
      exec('reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile" /v "SystemResponsiveness" /t REG_DWORD /d 0 /f')
      exec('reg add "HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Multimedia\\SystemProfile" /v "NetworkThrottlingIndex" /t REG_DWORD /d 4294967295 /f')

      // Disable Nagle's algorithm
      exec('reg add "HKLM\\SYSTEM\\CurrentControlSet\\Services\\Tcpip\\Parameters\\Interfaces" /v "TcpAckFrequency" /t REG_DWORD /d 1 /f')
    }

    return true
  }

  async boostRAM() {
    return new Promise((resolve, reject) => {
      if (process.platform === 'win32') {
        exec('ipconfig /flushdns', () => {})
        exec('echo 1 > "%temp%\\empty.txt" & start /b /low empty.txt', () => {})

        // Empty working sets
        exec('powershell -Command "[System.Runtime.InteropServices.Marshal]::ReleaseComObject([System.Runtime.InteropServices.Marshal]::GetActiveObject(\"Shell.Application\"))"', () => {})
      }

      const totalMem = os.totalmem()
      const freeMem = os.freemem()
      const usage = ((totalMem - freeMem) / totalMem) * 100

      resolve({
        total: this.formatBytes(totalMem),
        free: this.formatBytes(freeMem),
        usage: Math.round(usage),
      })
    })
  }

  formatBytes(bytes) {
    if (bytes === 0) return '0 B'
    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }
}

module.exports = SystemBooster
