const campoNome = document.querySelector("#nome");
const campoBio = document.querySelector("#bio");
const botaoContinuar = document.querySelector(".principal");
const mensagem = document.querySelector("#mensagem");
const formulario = document.querySelector("#formulario");
const titulo = document.querySelector("#titulo");

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const emailLogado = localStorage.getItem("usuarioLogado");

const usuarioAtual = usuarios.find(function(usuario) {
    return usuario.email === emailLogado;
});

botaoContinuar.addEventListener("click", function() {

    if (campoNome.value === "") {
        mensagem.textContent = "Digite um Nome para continuar";
        return;
    }

    usuarioAtual.nome = campoNome.value;
    usuarioAtual.bio = campoBio.value;

    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    mensagem.textContent = "Bem vindo ao MPO!";

    titulo.textContent = "Olá " + campoNome.value + "!";
    formulario.style.display = "none";

    window.location.href = "home.html";
});