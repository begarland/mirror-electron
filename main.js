const {
  app,
  BrowserWindow,
  BaseWindow,
  WebContentsView,
} = require("electron/main");
const electron = require("electron");

const path = require("node:path");

function createWindow() {
  let window = new BrowserWindow({
    // Other options for your window, e.g., width, height
    fullscreen: true, // This is the key for full-screen
    autoHideMenuBar: true, // Optional: Hides the menu bar in full-screen
  });

  const view1 = new WebContentsView();
  window.contentView.addChildView(view1);

  view1.setBounds({ x: 0, y: 0, width: 1920, height: 1080 });

  // Load a file from the attached React Vite FE
  // view1.webContents.loadFile("frontend-vite/dist/index.html");

  // Load an already existing webpage
  view1.webContents.loadURL(
    "https://screenresolutiontest.com/screenresolution/"
  );
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
