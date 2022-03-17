import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
    // Criação de div contendo informações com total de animais
    function createAnimal(animal) {
        const div = document.createElement("div");
        div.classList.add("numero-animal");
        div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
        return div;
    }

    // Preenchimento de cada animal no DOM
    const numerosGrid = document.querySelector(target);

    function preencherAnimais(animal) {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
    }

    // Animação de números de cada animal
    function animaAnimaisNumeros() {
        const animaNumeros = new AnimaNumeros('[data-numero]', '.numeros', 'ativo');
            animaNumeros.init();
    }

    // Obtenção de animais através de um arquivo JSON e criação de cada animal através de createAnimal
    async function criarAnimais() {
        try {
            // Espera de resposta através de fetch e transformação em JSON
            const animaisResponse = await fetch(url);
            const animaisJSON = await animaisResponse.json();
            
            // Com a transformação em JSON, as funções são ativadas para preenchimento e animação de números
            animaisJSON.forEach((animal) => {
                preencherAnimais(animal);
            });
            animaAnimaisNumeros();
        } catch (e) {
            console.log(e);
        }
    }

    return criarAnimais();
}
