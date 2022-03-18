import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
    constructor(dropdownMenus, events) {
        this.dropdownMenus = document.querySelectorAll(dropdownMenus);

        // Definição de "touchstart" e "click" como argumentos padrões de events caso o usuário não defina
        if (events === undefined) {
            this.events = ["touchstart", "click"];
        } else {
            this.events = events;
        }

        this.activeClass = 'active';
        this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
    }

    //Ativação de dropdownmenu e adição de função para observação do clique fora do mesmo
    activeDropdownMenu(e) {
        e.preventDefault();
        const element = e.currentTarget
        element.classList.add(this.activeClass);
        outsideClick(element, this.events, () => {
            element.classList.remove("active");
        });
    }

    // Adição de eventos ao dropdownmenu
    addDropdownMenusEvent() {
        this.dropdownMenus.forEach((menu) => {
           this.events.forEach((userEvent) => {
                menu.addEventListener(userEvent, this.activeDropdownMenu);
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
