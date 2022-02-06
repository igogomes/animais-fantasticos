function initTabNav() {
    const tabMenu = document.querySelectorAll(".js-tabmenu li");
    const tabContent = document.querySelectorAll(".js-tabcontent section");
    tabContent[0].classList.add("ativo");

    if(tabMenu.length && tabContent.length) {
        function activeTab(index) {
            tabContent.forEach((section) => {
                section.classList.remove("ativo");
            });
            tabContent[index].classList.add("ativo");
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}

initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt");
    const activeClass = "ativo";

    if(accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener("click", activeAccordion);
        }); 
    }
}

initAccordion();

function initScrollSuave() {
    const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

    function scrollToSection(e) {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href");
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        /* ALTERNATIVA
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: 'smooth'
        });*/

    }

    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });
}

initScrollSuave();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll(".js-scroll");

    if(sections.length) {
        const windowMetade = window.innerHeight * 0.6;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible) {
                    section.classList.add("ativo");
                }
                else {
                    //Alternativa para remoção de classe "ativo", reativando animação a todo momento. 
                    //Caso a linha abaixo seja removida, a animação de exibição dos blocos de seções
                    //será executada apenas uma vez.
                    section.classList.remove("ativo");
                }
            });
        }

        animaScroll();

        window.addEventListener("scroll", animaScroll);
    }
}

initAnimacaoScroll();