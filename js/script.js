const div = document.querySelector("div");
const divColchete = document.querySelector("[data-cor]");
const divColcheteValor = document.querySelector("[data-cor='azul']")

div.dataset.height = 1000;

delete div.dataset.width;

div.dataset.totalHeight = 2000;

console.log(div.dataset);

console.log("EXERCÍCIOS");