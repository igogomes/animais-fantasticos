export default class Modal {
    constructor(botaoAbrir, botaoFechar, containerModal) {
        this.botaoAbrir = document.querySelector(botaoAbrir);
        this.botaoFechar = document.querySelector(botaoFechar);
        this.containerModal = document.querySelector(containerModal);

        // bind this ao callback para fazer referência ao objeto da classe
        this.eventToggleModal = this.eventToggleModal.bind(this);
        this.cliqueForaModal = this.cliqueForaModal.bind(this);
    }

    // Abertura ou fechamento da estrutura de modal
    toggleModal() {
        this.containerModal.classList.toggle("ativo");
    }

    // Adição de evento de toggle ao modal
    eventToggleModal(e) {
        e.preventDefault();
        this.toggleModal();
    }

    // Realiza o fechamento do modal ao clicar fora do espaço do mesmo
    cliqueForaModal(e) {
        if (e.target === this.containerModal) {
            this.toggleModal(e);
        }
    }

    // Realiza adição dos eventos aos elementos do modal
    addModalEvents() {
        this.botaoAbrir.addEventListener("click", this.eventToggleModal);
        this.botaoFechar.addEventListener("click", this.eventToggleModal);
        this.containerModal.addEventListener("click", this.cliqueForaModal);
    }

    init() {
        if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
            this.addModalEvents();
        }
        return this;
    }
}
