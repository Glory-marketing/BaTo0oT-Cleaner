const { app, BrowserWindow, ipcMain, Tray, Menu, nativeImage } = require('electron')
const path = require('path')
const Store = require('electron-store')

const store = new Store({
  defaults: {
    settings: {
      language: 'ar',
      autoStart: true,
      autoUpdate: true,
      autoClean: false,
      gameMode: false,
    },
    lastClean: null,
    totalCleaned: 0,
  },
})

let mainWindow
let tray

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    frame: false,
    transparent: false,
    backgroundColor: '#0a0a1a',
    icon: path.join(__dirname, 'assets', 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  mainWindow.loadFile(path.join(__dirname, 'src', 'renderer', 'index.html'))

  if (process.argv.includes('--dev')) {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('close', (e) => {
    if (!app.isQuitting) {
      e.preventDefault()
      mainWindow.hide()
    }
  })
}

function createTray() {
  const icon = nativeImage.createFromPath(path.join(__dirname, 'assets', 'icon.png'))
  tray = new Tray(icon.resize({ width: 16, height: 16 }))
  tray.setToolTip('BaTo0oT Cleaner')

  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show BaTo0oT', click: () => mainWindow.show() },
    { type: 'separator' },
    {
      label: 'Quick Clean',
      click: () => {
        mainWindow.webContents.send('quick-clean')
      },
    },
    { type: 'separator' },
    {
      label: 'Quit',
      click: () => {
        app.isQuitting = true
        app.quit()
      },
    },
  ])

  tray.setContextMenu(contextMenu)
  tray.on('double-click', () => mainWindow.show())
}

// IPC Handlers
ipcMain.handle('get-settings', () => store.get('settings'))
ipcMain.handle('set-settings', (e, settings) => {
  store.set('settings', settings)
  return true
})

ipcMain.handle('get-stats', () => ({
  lastClean: store.get('lastClean'),
  totalCleaned: store.get('totalCleaned'),
}))

ipcMain.handle('window-minimize', () => mainWindow.minimize())
ipcMain.handle('window-maximize', () => {
  if (mainWindow.isMaximized()) mainWindow.unmaximize()
  else mainWindow.maximize()
})
ipcMain.handle('window-close', () => mainWindow.close())
ipcMain.handle('window-is-maximized', () => mainWindow.isMaximized())

app.whenReady().then(() => {
  createWindow()
  createTray()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
