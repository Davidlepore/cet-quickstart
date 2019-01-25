"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const custom_electron_titlebar_1 = require("custom-electron-titlebar");
let titlebar = new custom_electron_titlebar_1.Titlebar({
    backgroundColor: custom_electron_titlebar_1.Color.WHITE,
    icon: './favicon.svg',
    shadow: true
});
// Menu position
const position = titlebar.options.menuPosition;
const currentPosition = document.getElementById('current-menu-position');
const left = document.getElementById('left-position');
const bottom = document.getElementById('bottom-position');
if (position) {
    currentPosition.innerHTML = `<b>Current position:</b> ${position}`;
}
else {
    currentPosition.innerHTML = '<b>Current position:</b> left';
}
[left, bottom].forEach((e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            titlebar.updateMenuPosition(event.target.value);
            currentPosition.innerHTML = `<b>Current position:</b> ${event.target.value}`;
        }
    });
});
// Title horizontal alignment
const titleHorizontalAlignment = titlebar.options.titleHorizontalAlignment;
const currentTitlePosition = document.getElementById('current-title-position');
const leftTitle = document.getElementById('left-title-position');
const centerTitle = document.getElementById('center-title-position');
const rightTitle = document.getElementById('right-title-position');
if (titleHorizontalAlignment) {
    currentTitlePosition.innerHTML = `<b>Current horizontal alignment:</b> ${titleHorizontalAlignment}`;
}
else {
    currentTitlePosition.innerHTML = '<b>Current horizontal alignment:</b> center';
}
[leftTitle, centerTitle, rightTitle].forEach((e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            titlebar.setHorizontalAlignment(event.target.value);
            currentTitlePosition.innerHTML = `<b>Current horizontal alignment:</b> ${event.target.value}`;
        }
    });
});
// Titlebar color
const titlebarColor = titlebar.options.backgroundColor;
const picker = document.getElementById('color-picker');
const currentColor = document.getElementById('current-color');
picker.setAttribute('value', titlebarColor.toString());
currentColor.innerHTML = `<b>Current color:</b> ${titlebarColor.toString()}`;
picker.addEventListener('change', (event) => {
    const color = event.detail[0];
    picker.setAttribute('value', color);
    currentColor.innerHTML = `<b>Current color:</b> ${color}`;
    titlebar.updateBackground(custom_electron_titlebar_1.Color.fromHex(color));
});
// Window icons style
const winStyle = document.getElementById('win-style');
const macStyle = document.getElementById('mac-style');
[winStyle, macStyle].forEach((e) => {
    e.addEventListener('change', (event) => {
        if (event.target.checked) {
            const backgroundColor = titlebar.options.backgroundColor;
            const titleHorizontalAlignment = titlebar.options.titleHorizontalAlignment;
            const menuPosition = titlebar.options.menuPosition;
            const icon = titlebar.options.icon;
            titlebar.dispose();
            titlebar = new custom_electron_titlebar_1.Titlebar({
                backgroundColor: backgroundColor,
                icon: icon,
                iconsTheme: event.target.value === 'win' ? custom_electron_titlebar_1.Themebar.win : custom_electron_titlebar_1.Themebar.mac,
                titleHorizontalAlignment: titleHorizontalAlignment,
                menuPosition: menuPosition
            });
        }
    });
});
// Title
const title = document.getElementById('title');
const changeTitle = document.getElementById('change-title');
changeTitle.addEventListener('click', (event) => {
    titlebar.updateTitle(title.value);
    title.value = '';
});
document.querySelector('a').addEventListener('click', (event) => {
    event.preventDefault();
    electron_1.shell.openExternal(event.target.href);
});
