const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });
    
    win.loadFile('./index.html');
    
    win.on('closed', ()=>{
        win.destroy();
    });
    win.setFullScreen(true);
    // win.webContents.on('devtools-opened', ()=>{
    //     win.webContents.closeDevTools();
    // });
}

app.on('ready', createWindow);
app.on('window-all-closed', ()=>{
    app.quit();
});
