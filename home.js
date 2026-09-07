const nomeSalvo = localStorage.getItem("nomeUsuario");
const titulo = document.querySelector("#titulo");
titulo.textContent = "Olá " + nomeSalvo + "!";