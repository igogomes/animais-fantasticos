export default class AnimaNumeros {
    constructor(numeros, observerTarget, observerClass) {
        this.numeros = document.querySelectorAll(numeros);
        this.observerTarget = document.querySelector(observerTarget);
        this.observerClass = observerClass;
        // Bind para o this do objeto ao callback da mutação
        this.handleMutation = this.handleMutation.bind(this);
    }

    //Recebimento de elemento do DOM com número em seu texto, realiza a incrementação de zero até o número final
    static incrementarNumero(numero) {
        const total = +numero.innerText;
        const incremento = Math.floor(total / 100);
        let start = 0;

        const timer = setInterval(() => {
            start += incremento;
            numero.innerText = start;
            
            if (start > total) {
                numero.innerText = total;
                clearInterval(timer);
            }
        }, 25 * Math.random());
    }

    // Realizar incrementação de número para cada número selecionado do DOM
    animaNumeros() {
        this.numeros.forEach((numero) => {
            this.constructor.incrementarNumero(numero)}
        );
    }

    // Função acionada quando alguma mutação ocorrer
    handleMutation(mutation) {
        if (mutation[0].target.classList.contains(this.observerClass)) {
            this.observer.disconnect();
            this.animaNumeros();
        }
    }

    // Adição de MutationObserver para verificação da adição da classe "ativo" ao elemento target
    addMutationObserver() {
        this.observer = new MutationObserver(this.handleMutation);

        this.observer.observe(this.observerTarget, { attributes: true });
    }

    init() {
        if (this.numeros.length && this.observerTarget) {
            this.addMutationObserver();
        }
        return this;
    }

}
