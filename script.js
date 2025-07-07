const sobre = document.getElementById("mainSobre");
const formacao = document.getElementById("mainFormacao");
const portfolio = document.getElementById("mainPortfolio");
const contato = document.getElementById("mainContato");

// Ao clicar sobre o botão Sobre
document.getElementById("menuSobre").addEventListener("click", () => {
    // Outras seções serão escondidas 
    sobre.hidden = false;
    formacao.hidden = true;
    portfolio.hidden = true;
    contato.hidden = true;
    // O botão será sublinhado
    document.getElementById("menuSobre").classList.add("underline");
    document.getElementById("menuFormacao").classList.remove("underline");
    document.getElementById("menuPortfolio").classList.remove("underline");
    document.getElementById("menuContato").classList.remove("underline");
});

// Ao clicar sobre o botão Formação Educacional
document.getElementById("menuFormacao").addEventListener("click", () => {
    // Outras seções serão escondidas  
    sobre.hidden = true;
    formacao.hidden = false;
    portfolio.hidden = true;
    contato.hidden = true;
    // O botão será sublinhado
    document.getElementById("menuSobre").classList.remove("underline");
    document.getElementById("menuFormacao").classList.add("underline");
    document.getElementById("menuPortfolio").classList.remove("underline");
    document.getElementById("menuContato").classList.remove("underline");
});

// Ao clicar sobre o botão Portfólio
document.getElementById("menuPortfolio").addEventListener("click", () => {
    // Outras seções serão escondidas  
    sobre.hidden = true;
    formacao.hidden = true;
    portfolio.hidden = false;
    contato.hidden = true;
    // O botão será sublinhado
    document.getElementById("menuSobre").classList.remove("underline");
    document.getElementById("menuFormacao").classList.remove("underline");
    document.getElementById("menuPortfolio").classList.add("underline");
    document.getElementById("menuContato").classList.remove("underline");
});

// Ao clicar sobre o botão Contato
document.getElementById("menuContato").addEventListener("click", () => {
    // Outras seções serão escondidas  
    sobre.hidden = true;
    formacao.hidden = true;
    portfolio.hidden = true;
    contato.hidden = false;
    // O botão será sublinhado
    document.getElementById("menuSobre").classList.remove("underline");
    document.getElementById("menuFormacao").classList.remove("underline");
    document.getElementById("menuPortfolio").classList.remove("underline");
    document.getElementById("menuContato").classList.add("underline");
});