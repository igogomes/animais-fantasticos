export default class ScrollSuave {
    constructor(links, options) {
        this.linksInternos = document.querySelectorAll(links);
        if (options === undefined) {
            this.options = { behavior: "smooth", block: "start" };
        } else {
            this.options = options;
        }
        this.scrollToSection = this.scrollToSection.bind(this);
    }

    scrollToSection(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        const section = document.querySelector(href);

        section.scrollIntoView(this.options);

        /* ALTERNATIVA
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth'
        }); */
    }

    addLinkEvent() {
        this.linksInternos.forEach((link) => {
            link.addEventListener("click", this.scrollToSection);
        });
    }

    init() {
        if(this.linksInternos.length) {
            this.addLinkEvent();
        }
        return this;
    }
}
