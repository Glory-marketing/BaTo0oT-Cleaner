const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')
const os = require('os')

class EmulatorOptimizer {
  constructor() {
    this.emulators = {
      bluestacks: {
        name: 'Bluestacks',
        configPaths: {
          win32: [
            `${os.homedir()}\\AppData\\Local\\Bluestacks\\bluestacks.conf`,
            `${os.homedir()}\\AppData\\Local\\Bluestacks\\UserData\\bluestacks.conf`,
          ],
        },
      },
      ldplayer: {
        name: 'LDPlayer',
        configPaths: {
          win32: [
            `${os.homedir()}\\AppData\\Local\\LDPlayer\\ld.conf`,
            `${os.homedir()}\\AppData\\Roaming\\LDPlayer\\ld.conf`,
          ],
        },
      },
      memu: {
        name: 'MEmu',
        configPaths: {
          win32: [
            `${os.homedir()}\\AppData\\Local\\Microvirt\\MEmu\\MEmu.ini`,
          ],
        },
      },
      nox: {
        name: 'Nox',
        configPaths: {
          win32: [
            `${os.homedir()}\\AppData\\Local\\Nox\\Nox.ini`,
          ],
        },
      },
    }
  }

  detectInstalledEmulators() {
    const installed = []

    for (const [key, emu] of Object.entries(this.emulators)) {
      const paths = emu.configPaths[process.platform]
      if (!paths) continue

      for (const configPath of paths) {
        if (fs.existsSync(configPath)) {
          installed.push({ id: key, ...emu })
          break
        }
      }

      // Check by common install paths
      const commonPaths = {
        bluestacks: [
          'C:\\Program Files\\Bluestacks',
          'C:\\Program Files (x86)\\Bluestacks',
        ],
        ldplayer: [
          'C:\\LDPlayer',
          'C:\\Program Files\\LDPlayer',
        ],
        memu: [
          'C:\\Program Files\\Microvirt',
          'C:\\Program Files (x86)\\Microvirt',
        ],
        nox: [
          'C:\\Program Files\\Nox',
          'C:\\Program Files (x86)\\Nox',
        ],
      }

      const checkPaths = commonPaths[key]
      if (checkPaths) {
        for (const p of checkPaths) {
          if (fs.existsSync(p)) {
            if (!installed.find(i => i.id === key)) {
              installed.push({ id: key, ...emu })
            }
            break
          }
        }
      }
    }

    return installed
  }

  async optimize(emulatorId) {
    const optimizations = {
      bluestacks: [
        'reg add "HKCU\\Software\\Bluestacks\\Engine" /v "CPU" /t REG_DWORD /d 4 /f',
        'reg add "HKCU\\Software\\Bluestacks\\Engine" /v "Memory" /t REG_DWORD /d 4096 /f',
        'reg add "HKCU\\Software\\Bluestacks\\Engine" /v "GraphicsRenderer" /t REG_DWORD /d 1 /f',
        'reg add "HKCU\\Software\\Bluestacks\\Engine" /v "FrameSkip" /t REG_DWORD /d 0 /f',
        'reg add "HKCU\\Software\\Bluestacks\\Engine" /v "VSync" /t REG_DWORD /d 1 /f',
      ],
      ldplayer: [
        'reg add "HKCU\\Software\\LDPlayer" /v "CPU" /t REG_DWORD /d 4 /f',
        'reg add "HKCU\\Software\\LDPlayer" /v "Memory" /t REG_DWORD /d 4096 /f',
        'reg add "HKCU\\Software\\LDPlayer" /v "FPS" /t REG_DWORD /d 60 /f',
        'reg add "HKCU\\Software\\LDPlayer" /v "Renderer" /t REG_DWORD /d 1 /f',
      ],
      memu: [
        'reg add "HKCU\\Software\\Microvirt\\MEmu" /v "CPU" /t REG_DWORD /d 4 /f',
        'reg add "HKCU\\Software\\Microvirt\\MEmu" /v "Memory" /t REG_DWORD /d 4096 /f',
        'reg add "HKCU\\Software\\Microvirt\\MEmu" /v "FPS" /t REG_DWORD /d 60 /f',
      ],
      nox: [
        'reg add "HKCU\\Software\\Nox" /v "CPU" /t REG_DWORD /d 4 /f',
        'reg add "HKCU\\Software\\Nox" /v "Memory" /t REG_DWORD /d 4096 /f',
        'reg add "HKCU\\Software\\Nox" /v "FPS" /t REG_DWORD /d 60 /f',
      ],
    }

    const cmds = optimizations[emulatorId]
    if (!cmds) return false

    for (const cmd of cmds) {
      try {
        exec(cmd)
      } catch (e) {}
    }

    // Enable virtualization if possible
    try {
      if (process.platform === 'win32') {
        exec('powershell "Enable-WindowsOptionalFeature -Online -FeatureName HypervisorPlatform -All"', () => {})
      }
    } catch (e) {}

    return true
  }

  async getEmulatorStatus(emulatorId) {
    const emulator = this.emulators[emulatorId]
    if (!emulator) return null

    const paths = emulator.configPaths[process.platform]
    let config = {}

    if (paths) {
      for (const configPath of paths) {
        if (fs.existsSync(configPath)) {
          try {
            const content = fs.readFileSync(configPath, 'utf-8')
            const lines = content.split('\n')
            for (const line of lines) {
              const [key, ...val] = line.split('=')
              if (key && val.length) {
                config[key.trim()] = val.join('=').trim()
              }
            }
          } catch (e) {}
        }
      }
    }

    return {
      detected: paths?.some(p => fs.existsSync(p)) || false,
      config,
    }
  }
}

module.exports = EmulatorOptimizer
