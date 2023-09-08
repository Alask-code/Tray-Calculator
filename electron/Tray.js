const { Tray } = require('electron')
const { resolve } = require('path')
const icon = resolve(__dirname, '../', 'build', 'icon.png')
function createTray() {
    const tray = new Tray(icon)
    tray.setToolTip('Tray Calc+')
    return tray
}
module.exports = createTray()