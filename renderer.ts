import { Titlebar, Themebar } from 'custom-electron-titlebar';
import { remote } from 'electron';

const { Menu, MenuItem } = remote;

const titlebar = new Titlebar('green', {
	maximizable: false,
	iconsStyle: Themebar.mac
});

const menu = new Menu();
menu.append(new MenuItem({
	label: 'Item 1',
	submenu: [
		{
			label: 'Subitem 1',
			click() { console.log('Click on subitem 1') }
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
