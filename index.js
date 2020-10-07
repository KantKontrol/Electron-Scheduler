const { app, BrowserWindow } = require('electron');

const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 1024;


createWindow = () => {

    const window = new BrowserWindow({
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        webPreferences: {
            nodeIntegration: true
        }
    });

    window.loadFile("./schapp/index.html");
}

app.whenReady().then(createWindow);
