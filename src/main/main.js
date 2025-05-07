const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const { XMLParser } = require('fast-xml-parser');
const { parseString } = require('xml2js');
const Jimp = require('jimp');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false
    },
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#2b2d30',
      symbolColor: '#ffffff',
      height: 32
    },
    icon: path.join(__dirname, '../renderer/assets/icons/icon.png'),
    show: false // Don't show until ready
  });

  // Dynamic URL loading for dev/production
  const loadApp = () => {
    const startUrl = process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000' // Vite dev server
      : `file://${path.join(__dirname, '../renderer/dist/index.html')}`; // Production

    mainWindow.loadURL(startUrl).catch(err => {
      console.error('Failed to load URL:', err);
      // Fallback to production if dev server isn't ready
      if (process.env.NODE_ENV === 'development') {
        setTimeout(() => {
          mainWindow.loadURL(`file://${path.join(__dirname, '../renderer/dist/index.html')}`);
        }, 1000);
      }
    });
  };

  // Show when ready
  mainWindow.on('ready-to-show', () => {
    mainWindow.show();
    if (process.env.NODE_ENV === 'development') {
      mainWindow.webContents.openDevTools({ mode: 'detach' });
    }
  });

  // Error handling
  mainWindow.webContents.on('did-fail-load', () => {
    console.log('Failed to load content, retrying...');
    loadApp();
  });

  loadApp();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

// IPC Handlers (keep your existing ones)
ipcMain.handle('encode-base64', (_, text) => Buffer.from(text).toString('base64'));
// ... (all your other IPC handlers remain unchanged)

// App lifecycle
app.whenReady().then(() => {
  createWindow();
  
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Dev server connection check (development only)
if (process.env.NODE_ENV === 'development') {
  const { spawn } = require('child_process');
  const vite = spawn('yarn', ['vite'], { 
    stdio: 'inherit',
    shell: true 
  });
  
  process.on('exit', () => vite.kill());
}