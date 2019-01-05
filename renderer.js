"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const custom_electron_titlebar_1 = require("custom-electron-titlebar");
const electron_1 = require("electron");
const { Menu, MenuItem } = electron_1.remote;
const titlebar = new custom_electron_titlebar_1.Titlebar('green', {
    maximizable: false,
    iconsStyle: custom_electron_titlebar_1.Themebar.mac()
});
const menu = new Menu();
menu.append(new MenuItem({
    label: 'Item 1',
    submenu: [
        {
            label: 'Subitem 1',
            click() { console.log('Click on subitem 1'); }
        },
        {
            type: 'separator'
        }
    ]
}));
menu.append(new MenuItem({
    label: 'Item 2',
    submenu: [
        {
            label: 'Subitem checkbox',
            type: 'checkbox',
            checked: true
        },
        {
            type: 'separator'
        },
        {
            label: 'Subitem with submenu',
            submenu: [
                {
                    label: 'Submenu i&tem 1',
                    accelerator: 'Ctrl+T'
                }
            ]
        }
    ]
}));
titlebar.setMenu(menu);
