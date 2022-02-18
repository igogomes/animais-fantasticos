export default function initTooltip() {
    const tooltips = document.querySelectorAll("[data-tooltip]");

    tooltips.forEach((item) => {
        item.addEventListener("mouseover", onMouseOver);
    });

    function onMouseOver(e) {
        const toolTipBox = criarToolTipBox(this);

        onMouseMove.toolTipBox = toolTipBox;
        this.addEventListener("mousemove", onMouseMove);

        onMouseLeave.toolTipBox = toolTipBox;
        onMouseLeave.element = this;
        this.addEventListener("mouseleave", onMouseLeave);
    }

    const onMouseLeave = {
        handleEvent() {
            this.toolTipBox.remove();
            this.element.removeEventListener("mouseleave", onMouseLeave);
            this.element.removeEventListener("mousemove", onMouseMove);
        }
    }

    const onMouseMove = {
        handleEvent(e) {
            this.toolTipBox.style.top = e.pageY + 20 + "px";
            this.toolTipBox.style.left = e.pageX + 20 + "px";
        }
    }

    function criarToolTipBox(e) {
        const toolTipBox = document.createElement("div");
        const text = e.getAttribute("aria-label");
        toolTipBox.classList.add("tooltip");
        toolTipBox.innerText = text;
        document.body.appendChild(toolTipBox);
        return toolTipBox;
    }
}