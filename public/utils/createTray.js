const { app, Tray, Menu, shell } = require("electron");
const { showNotification } = require("./showNotification");
const config = require("./config");

exports.createTray = () => {
	const t = new Tray(config.icon);

	t.setToolTip(config.appName);
	t.setContextMenu(
		Menu.buildFromTemplate([
			{
				label: "Show App",
				click: () => {
					if (!config.mainWindow.isVisible())
						config.mainWindow.show();
				},
			},
			{
				label: "سازنده",
				submenu: [
					{
						label: "گیت @bushidoti",
						click: () => {
							shell.openExternal("https://github.com/bushidoti");
						},
					},
					{
						label: "ایمیل titanxl79@gmail.com",
						click: () => {
							shell.openExternal("mailto:titanxl79@gmail.com");
						},
					},
					{
						label: "وب سایت",
						click: () => {
							shell.openExternal("https://digitkey.ir");
						},
					},
				],
			},
			{
				label: "خروج",
				click: () => {
					config.isQuiting = true;
					app.quit();
				},
			},
		]),
	);

	return t;
};
