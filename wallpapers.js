const wallpapers = [
    {
        nome: "Miku001",
        imagem: "imagens/wpp/miku001.jpg",
        tipo: "pc"
    },
    {
        nome: "Monster001",
        imagem: "imagens/wpp/monster001.jpg",
        tipo: "pc"
    },
    {
        nome: "Monster002",
        imagem: "imagens/wpp/monster002.jpg",
        tipo: "pc"
    },
    {
        nome: "Elfen Lied001",
        imagem: "imagens/wpp/elfen001.jpg",
        tipo: "celular"
    },
    {
        nome: "Elfen Lied002",
        imagem: "imagens/wpp/elfen002.jpg",
        tipo: "celular"
    },
    {
        nome: "Tokyo Ghoul001",
        imagem: "imagens/wpp/tokyoghoul001.jpeg",
        tipo: "pc"
    },
    {
        nome: "Tokyo Ghoul002",
        imagem: "imagens/wpp/tokyoghoul002.jpeg",
        tipo: "pc"
    },
    {
        nome: "Tokyo Ghoul003",
        imagem: "imagens/wpp/tokyoghoul003.jpeg",
        tipo: "pc"
    },
    {
        nome: "Hellsing001",
        imagem: "imagens/wpp/hellsing001.jpg",
        tipo: "celular"
    },

];

const listaWallpapers = document.querySelector("#listaWallpapers");
const visualizadorWallpaper = document.querySelector("#visualizadorWallpaper");
const imagemGrande = document.querySelector("#imagemGrande");
const fecharWallpaper = document.querySelector("#fecharWallpaper");
const baixarWallpaper = document.querySelector("#baixarWallpaper");
const pesquisaWallpaper = document.querySelector("#pesquisaWallpaper");

let tipoAtual = "todos";


function mostrarWallpapers(lista) {

    listaWallpapers.innerHTML = "";

    lista.forEach(function(wallpaper) {

        const card = document.createElement("div");
        card.classList.add("card-wallpaper");

        const imagem = document.createElement("img");

        imagem.src = wallpaper.imagem;
        imagem.alt = wallpaper.nome;

        card.appendChild(imagem);

        imagem.addEventListener("click", function() {

            imagemGrande.src = wallpaper.imagem;

            baixarWallpaper.href = wallpaper.imagem;
            
            const extensao = wallpaper.imagem.split(".").pop();

            baixarWallpaper.download = wallpaper.nome + "." + extensao;

            visualizadorWallpaper.style.display = "flex";

        });

        listaWallpapers.appendChild(card);
    });
}


function aplicarFiltros() {

    const textoPesquisa = pesquisaWallpaper.value.toLowerCase();

    const wallpapersFiltrados = wallpapers.filter(function(wallpaper) {

        const correspondeTipo =
            tipoAtual === "todos" ||
            wallpaper.tipo === tipoAtual;

        const correspondePesquisa =
            wallpaper.nome.toLowerCase().includes(textoPesquisa);

        return correspondeTipo && correspondePesquisa;

    });

    mostrarWallpapers(wallpapersFiltrados);
}


const botoesCategoria = document.querySelectorAll(".botao-wallpaper");

botoesCategoria.forEach(function(botao) {

    botao.addEventListener("click", function() {

        tipoAtual = botao.dataset.tipo;

        aplicarFiltros();

    });

});


pesquisaWallpaper.addEventListener("input", function() {

    aplicarFiltros();

});


visualizadorWallpaper.addEventListener("click", function(event) {

    if (event.target === visualizadorWallpaper) {

        visualizadorWallpaper.style.display = "none";

    }

});


fecharWallpaper.addEventListener("click", function() {

    visualizadorWallpaper.style.display = "none";

});


mostrarWallpapers(wallpapers);