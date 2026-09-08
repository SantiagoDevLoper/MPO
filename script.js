const campoNome = document.querySelector("#nome");
const campoBio = document.querySelector("#bio");
const fotoPerfil = document.querySelector("#fotoPerfil");
const botaoContinuar = document.querySelector(".principal");
const mensagem = document.querySelector("#mensagem");
const formulario = document.querySelector("#formulario");
const titulo = document.querySelector("#titulo");

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const emailLogado = localStorage.getItem("usuarioLogado");
const nomeArquivo = document.querySelector("#nomeArquivo");

fotoPerfil.addEventListener("change", function() {

    if (fotoPerfil.files.length > 0) {
        nomeArquivo.textContent = fotoPerfil.files[0].name;
    } else {
        nomeArquivo.textContent = "Nenhuma foto selecionada";
    }

});

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

    const arquivo = fotoPerfil.files[0];

    if (arquivo) {

        const leitor = new FileReader();

        leitor.onload = function() {

            usuarioAtual.foto = leitor.result;

            localStorage.setItem(
                "usuarios",
                JSON.stringify(usuarios)
            );

            mensagem.textContent = "Bem vindo ao MPO!";

            titulo.textContent = "Olá " + campoNome.value + "!";
            formulario.style.display = "none";

            window.location.href = "home.html";
        };

        leitor.readAsDataURL(arquivo);

    } else {

        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );

        mensagem.textContent = "Bem vindo ao MPO!";

        titulo.textContent = "Olá " + campoNome.value + "!";
        formulario.style.display = "none";

        window.location.href = "home.html";
    }
});