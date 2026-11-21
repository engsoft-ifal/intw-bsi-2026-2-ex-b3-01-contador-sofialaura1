// Faça o contador funcionar. Edite só este arquivo.
//
// TODO 1: mostre 0 no #total ao carregar a página.
// TODO 2: ao clicar em #somar, aumente 1 e atualize o #total.
// TODO 3: ao clicar em #zerar, volte para 0 e atualize o #total.
//
// Dica: document.querySelector("#total"), addEventListener("click", ...),
//       elemento.textContent = valor.

// escreva seu código aqui
let valor = 0;
const somar = document.querySelector("#somar")
const total = document.querySelector("#total")
const zerar = document.querySelector("#zerar")

total.textContent = valor
somar.addEventListener("click", function() {
    valor += 1;
    total.textContent = valor;
})

zerar.addEventListener("click", function() {
    valor = 0;
    total.textContent = valor;
})
