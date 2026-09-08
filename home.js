const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const emailLogado = localStorage.getItem("usuarioLogado");

const usuarioAtual = usuarios.find(function(usuario) {
    return usuario.email === emailLogado;
});

const titulo = document.querySelector("#titulo");

if (usuarioAtual) {
    titulo.textContent = "Olá " + usuarioAtual.nome + "!";
}