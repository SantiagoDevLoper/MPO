const campoNome = document.querySelector("#nome");
const campoBio = document.querySelector("#bio")
const botaoContinuar = document.querySelector(".principal");
const mensagem = document.querySelector("#mensagem");
const formulario = document.querySelector("#formulario");
const titulo = document.querySelector("#titulo");





botaoContinuar.addEventListener ("click", function(){
    if (campoNome.value === "") {
        mensagem.textContent = "Digite um Nome para continuar"
    }
    else {
        mensagem.textContent = "Bem vindo ao Mpo!";

        localStorage.setItem("nomeUsuario", campoNome.value);
        localStorage.setItem("bioUsuario", campoBio.value);

        titulo.textContent = "Olá " + campoNome.value + "!";
        formulario.style.display = "none";
        window.location.href = "home.html";
    }
}); 
