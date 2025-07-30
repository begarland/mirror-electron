const {
  app,
  BrowserWindow,
  BaseWindow,
  WebContentsView,
} = require("electron/main");
const electron = require("electron");

const path = require("node:path");

function createWindow() {
  // create a fullscreen window
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
  const window = new BaseWindow({ width, height });

  const view1 = new WebContentsView();
  window.contentView.addChildView(view1);
  view1.setBounds({ x: 0, y: 0, width, height });

  // Load a file from the attached React Vite FE
  view1.webContents.loadFile("frontend-vite/dist/index.html");

  // Load an already existing webpage
  // view1.webContents.loadURL("https://www.google.com/");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
