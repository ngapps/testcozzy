export class ItemMenu {
    constructor(public name, public icon, public heading:boolean, public link, public submenu:ItemMenu[]){}
}
