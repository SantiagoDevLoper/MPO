const mangas = [
    {
        nome: "berserk",
        capa: "imagens/manga/berserk.jpg"
    },
    {
        nome: "Sword Art Online",
        capa: "imagens/manga/sao.avif"
    },
    {
        nome: "Dragon Ball Z",
        capa: "imagens/manga/dragonball.avif"
    },
    {
        nome: "Naruto",
        capa: "imagens/manga/naruto.avif"
    },
    {
        nome: "One Piece",
        capa: "imagens/manga/onepiece.avif"
    },
    {
        nome: "Pokémon",
        capa: "imagens/manga/pokemon.avif"
    },
    {
        nome: "Death Note",
        capa: "imagens/manga/deathnote.avif"
    },
    {
        nome: "Attack On Titan",
        capa: "imagens/manga/attack.avif"
    },
    {
        nome: "Demon Slayer",
        capa: "imagens/manga/demonslayer.avif"
    },
    {
        nome: "Jujutsu Kaisen",
        capa: "imagens/manga/jujutsu.avif"
    },
    {
        nome: "Boku No Hero Academia",
        capa: "imagens/manga/bokunohero.avif"
    },
    {
        nome: "Bleach",
        capa: "imagens/manga/bleach.avif"
    },
    {
        nome: "One Punch Man",
        capa: "imagens/manga/onepunch.avif"
    },
    {
        nome: "Hunter x Hunter",
        capa: "imagens/manga/hunterx.avif"
    },
    {
        nome: "Fullmetal Alchemist Brotherhood",
        capa: "imagens/manga/fullmetalbh.avif"
    },
];




const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const emailLogado = localStorage.getItem("usuarioLogado");

const usuarioAtual = usuarios.find(function(usuario) {
    return usuario.email === emailLogado;
});

if (!usuarioAtual) {
    alert("Usuário não encontrado. Faça login novamente.");
    window.location.href = "login.html";
}

const minhaColeçao = usuarioAtual.colecao;




const listaMangas = document.querySelector("#listaMangas");
const pesquisaMangas = document.querySelector("#pesquisaManga");




function mostrarMangas(lista) {

    listaMangas.innerHTML = "";

    lista.forEach(function(manga) {

        const card = document.createElement("div");
        card.classList.add("card-anime");


        const imagem = document.createElement("img");
        imagem.src = manga.capa;
        imagem.alt = manga.nome;


        const nome = document.createElement("h2");
        nome.textContent = manga.nome;


        const botao = document.createElement("button");
        botao.classList.add("principal");
        botao.textContent = "Adicionar";



        if (minhaColeçao.some(function(item) {
            return item.nome === manga.nome && item.tipo === "manga";
        })) {

            botao.textContent = "✓ Adicionado";
            botao.classList.add("adicionado");
            botao.disabled = true;
        }



        botao.addEventListener("click", function() {

            if (minhaColeçao.some(function(item) {
                return item.nome === manga.nome && item.tipo === "manga";
            })) {

                botao.textContent = "✓ Adicionado";
                botao.classList.add("adicionado");
                return;
            }


            minhaColeçao.push({
                nome: manga.nome,
                capa: manga.capa,
                tipo: "manga"
            });


            localStorage.setItem("usuarios", JSON.stringify(usuarios));


            botao.textContent = "✓ Adicionado";
            botao.classList.add("adicionado");
            botao.disabled = true;
        });


        card.appendChild(imagem);
        card.appendChild(nome);
        card.appendChild(botao);

        listaMangas.appendChild(card);
    });
}




mostrarMangas(mangas);




pesquisaMangas.addEventListener("input", function() {

    const textoPesquisa = pesquisaMangas.value.toLowerCase();

    const mangasFiltrados = mangas.filter(function(manga) {

        return manga.nome.toLowerCase().includes(textoPesquisa);

    });

    mostrarMangas(mangasFiltrados);
});

