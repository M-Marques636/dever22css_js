const botaoPrincipal = document.getElementById("botao-principal");
const botaoSecundario = document.getElementById("botao-secundario");
const listaTecnologias = document.getElementById("tecnologias");
const formulario = document.getElementById("form-contato");


const caixas = document.getElementsByClassName("box");
console.log("Quantidade de caixas:", caixas.length);

for (let i = 0; i < caixas.length; i++) {
    caixas[i].title = "Clique para destacar a caixa " + (i + 1);
}


const itensLista = document.getElementsByTagName("li");
console.log("Quantidade de itens da lista:", itensLista.length);

const textoDestaque = document.querySelector(".destaque");
const tituloPrincipal = document.querySelector("header h1");
console.log("Título da página:", tituloPrincipal.textContent);

const titulosDasCaixas = document.querySelectorAll(".box h3");

titulosDasCaixas.forEach(function (titulo) {
    console.log("Título da caixa:", titulo.textContent);
});

botaoPrincipal.addEventListener("click", function () {
    if (textoDestaque.classList.contains("realce")) {
        textoDestaque.innerHTML = "Este é um texto com a classe destaque.";
    } else {
        textoDestaque.innerHTML = "Texto <strong>alterado</strong> com innerHTML!";
    }

    textoDestaque.classList.toggle("realce");
});

botaoSecundario.addEventListener("click", function () {

    const novoItem = document.createElement("li");
    novoItem.textContent = "Tecnologia " + (itensLista.length + 1);


    listaTecnologias.appendChild(novoItem);
});

for (let i = 0; i < caixas.length; i++) {
    caixas[i].addEventListener("click", function () {
        caixas[i].classList.toggle("ativa");
    });
}

const linksMenu = document.querySelectorAll("nav a");
linksMenu.forEach(function (link) {
    link.addEventListener("click", function (evento) {
        evento.preventDefault();
        document.body.classList.toggle("tema-alternativo");
    });
});

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value;
    const curso = document.getElementById("curso").value;

    const mensagemAntiga = document.querySelector(".mensagem");
    if (mensagemAntiga) {
        mensagemAntiga.remove();
    }

    const mensagem = document.createElement("p");
    mensagem.classList.add("mensagem");

    if (nome === "" || curso === "") {
        mensagem.textContent = "Preencha o nome e escolha um curso.";
    } else {
        mensagem.innerHTML = "Obrigado, <strong>" + nome + "</strong>! Inscrição em " + curso + " recebida.";
    }

    formulario.appendChild(mensagem);
});