export default class TabNav {
    constructor(menu, content) {
        this.tabMenu = document.querySelectorAll(menu);
        this.tabContent = document.querySelectorAll(content);
        this.activeClass = "ativo";
    }

    // Ativação da tab de acordo com o index da mesma
    activeTab(index) {
        this.tabContent.forEach((section) => {
            section.classList.remove(this.activeClass);
        });
        const direcao = this.tabContent[index].dataset.anime;
        this.tabContent[index].classList.add(this.activeClass, direcao);
    }

    // Adição de eventos às tabs
    addTabNavEvent() {
        this.tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
                this.activeTab(index);
            });
        });
    }

    init() {
        if (this.tabMenu.length && this.tabContent.length) {
            // Ativar primeiro item
            this.activeTab(0);
            this.addTabNavEvent();
        }
        return this;
    }
}
