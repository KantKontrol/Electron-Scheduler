const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');   
const path = require('path');
 
let mainWindow;

const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 1024;
 
function createWindow() {
    mainWindow = new BrowserWindow({
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        show: false
    });
    const startURL = isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`;
 
    mainWindow.loadURL(startURL);
 
    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}
app.on('ready', createWindow);