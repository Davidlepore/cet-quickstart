const { Menu, MenuItem } = require('electron').remote;
const { Titlebar } = require('custom-electron-titlebar');

const titlebar = new Titlebar('green', {
  minimizable: false
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
