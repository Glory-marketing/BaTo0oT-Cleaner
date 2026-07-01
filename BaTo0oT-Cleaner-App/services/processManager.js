const { exec } = require('child_process')
const fs = require('fs')
const path = require('path')
const os = require('os')

class ProcessManager {
  async listProcesses() {
    return new Promise((resolve, reject) => {
      const cmd = process.platform === 'win32'
        ? 'powershell "Get-Process | Select-Object Id, ProcessName, CPU, @{N=\'MemoryMB\';E={[math]::Round($_.WorkingSet64/1MB,1)}} | ConvertTo-Json"'
        : 'ps aux --no-headers -o pid,pcpu,pmem,comm | awk \'{print $1","$2","$3","$4}\''

      exec(cmd, { maxBuffer: 1024 * 1024 * 10 }, (error, stdout) => {
        if (error) return reject(error)
        try {
          let processes
          if (process.platform === 'win32') {
            processes = JSON.parse(stdout)
            if (!Array.isArray(processes)) processes = [processes]
          } else {
            processes = stdout.trim().split('\n').map(line => {
              const parts = line.split(',')
              return {
                Id: parseInt(parts[0]),
                ProcessName: parts[3],
                CPU: parts[1],
                MemoryMB: parts[2],
              }
            })
          }
          resolve(processes)
        } catch (e) {
          reject(e)
        }
      })
    })
  }

  async killProcess(pid) {
    return new Promise((resolve, reject) => {
      try {
        process.kill(parseInt(pid))
        resolve(true)
      } catch (e) {
        const cmd = process.platform === 'win32'
          ? `taskkill /F /PID ${pid}`
          : `kill -9 ${pid}`
        exec(cmd, (err) => {
          if (err) reject(err)
          else resolve(true)
        })
      }
    })
  }

  async setProcessPriority(pid, priority) {
    return new Promise((resolve, reject) => {
      const priorities = {
        low: 64,
        belowNormal: 16384,
        normal: 32,
        aboveNormal: 32768,
        high: 128,
        realtime: 256,
      }

      const cmd = process.platform === 'win32'
        ? `wmic process where ProcessId=${pid} CALL setpriority ${priorities[priority] || 32}`
        : `renice -n ${priority === 'high' ? -10 : priority === 'low' ? 10 : 0} -p ${pid}`

      exec(cmd, (error) => {
        if (error) reject(error)
        else resolve(true)
      })
    })
  }

  async setCPUAffinity(pid, cores) {
    return new Promise((resolve, reject) => {
      if (process.platform !== 'win32') return resolve(false)

      let mask = 0
      for (const core of cores) {
        mask |= (1 << core)
      }
      const hexMask = mask.toString(16)

      exec(`powershell "$Process = Get-Process -Id ${pid}; $Process.ProcessorAffinity = ${mask}"`, (error) => {
        if (error) reject(error)
        else resolve(true)
      })
    })
  }
}

module.exports = ProcessManager
