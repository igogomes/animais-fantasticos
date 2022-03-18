import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
    constructor(dropdownMenus, events) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
        this.activeClass = "active";
        // Definição de "touchstart" e "click" como argumentos padrões de events caso o usuário não defina
        if (events === undefined) {
            this.events = ["touchstart", "click"];
        } else {
            this.events = events;
        }
    }

    //Ativação de dropdownmenu e adição de função para observação do clique fora do mesmo
    activeDropdownMenu(e) {
        e.preventDefault();
        const element = e.currentTarget
        element.classList.add(this.activeClass);
        outsideClick(element, this.events, () => {
            element.classList.remove(this.activeClass);
        });
    }

    // Adição de eventos ao dropdownmenu
    addDropdownMenusEvent() {
        this.dropdownMenus.forEach((menu) => {
           this.events.forEach((userEvent) => {
                menu.addEventListener(userEvent, activeDropdownMenu);
            });
        });
    }

    init() {
        if (this.dropdownMenus.length) {
            this.addDropdownMenusEvent();
        }
        return this;
    }
}
