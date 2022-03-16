export default class Tooltip {
    constructor(tooltips) {
        this.tooltips = document.querySelectorAll(tooltips);

        // bind do objeto da classe aos callbacks
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
    }

    // Movimentação de tooltip com base em seus estilos, de acordo com a posição do mouse
    onMouseMove(e) {
        this.tooltipBox.style.top = `${e.pageY + 20}px`;
        if (e.pageX + 240 > window.innerWidth) {
            this.tooltipBox.style.left = `${e.pageX - 190}px`;
        } else {
            this.tooltipBox.style.left = `${e.pageX + 20}px`;
        }
    }

    // Remoção de tooltip e de eventos do mousemove e mouseleave
    onMouseLeave({ currentTarget }) {
        this.tooltipBox.remove();
        currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
        currentTarget.removeEventListener("mousemove", this.onMouseMove);
    }

    // Criação de tooltip box e inserção no body
    criarTooltipBox(e) {
        const tooltipBox = document.createElement("div");
        const text = e.getAttribute("aria-label");
        tooltipBox.classList.add("tooltip");
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);
        this.tooltipBox = tooltipBox;
    }

    // Criação de tooltip e adição de eventos de mousemove e mouseleave ao target 
    onMouseOver({ currentTarget }) {
        // Criação de tooltip box e inserção em uma propriedade
        this.criarTooltipBox(currentTarget);
        currentTarget.addEventListener("mousemove", this.onMouseMove);
        currentTarget.addEventListener("mouseleave", this.onMouseLeave);
    }

    // Adição de eventos de mouseover a cada tooltip
    addTooltipsEvent() {
        this.tooltips.forEach((item) => {
            item.addEventListener("mouseover", this.onMouseOver);
        });
    }

    init() {
        if(this.tooltips.length) {
            this.addTooltipsEvent();
        }
        return this;
    }

}
