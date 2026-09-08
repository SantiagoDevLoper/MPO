const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const emailLogado = localStorage.getItem("usuarioLogado");

const usuarioAtual = usuarios.find(function(usuario) {
    return usuario.email === emailLogado;
})






const nomePerfil = document.querySelector("#nomePerfil");

const bioPerfil = document.querySelector("#bioPerfil");


const botaoEditar = document.querySelector("#botaoEditar");
const areaEdicao = document.querySelector("#areaEdicao");

const botaoSalvar = document.querySelector("#botaoSalvar");

const novoNome = document.querySelector("#novoNome");
const novaBio = document.querySelector("#novaBio");

const minhaColeçao = usuarioAtual.colecao;

const listaMeusAnimes = document.querySelector("#listaMeusAnimes");
const listaMeusMangas = document.querySelector("#listaMeusMangas");

const fotoPerfilUsuario = document.querySelector("#fotoPerfilUsuario");



function criarCard(item, indiceReal) {

    const card = document.createElement("div");
    card.classList.add("card-colecao");


    const areaImagem = document.createElement("div");
areaImagem.classList.add("area-imagem");

const imagem = document.createElement("img");
imagem.src = item.capa;
imagem.alt = item.nome;

const nota = document.createElement("span");
nota.classList.add("nota-card");

if (item.nota) {
    nota.textContent = `⭐ ${item.nota}/10`;
} else {
    nota.textContent = "⭐ --/10";
}

areaImagem.appendChild(imagem);
areaImagem.appendChild(nota);

const nome = document.createElement("h3");
nome.textContent = item.nome;






    const botaoNota = document.createElement("button");

    botaoNota.textContent = "⭐";
    botaoNota.classList.add("botaoNota");


    botaoNota.addEventListener("click", function() {

        const areaNotaExistente = card.querySelector(".area-nota");

        if (areaNotaExistente) {
            areaNotaExistente.remove();
            return;
        }


        const areaNota = document.createElement("div");
        areaNota.classList.add("area-nota");


        for (let i = 1; i <= 10; i++) {

            const estrela = document.createElement("button");


            if (item.nota && i <= item.nota) {
                estrela.textContent = "⭐";
            } else {
                estrela.textContent = "☆";
            }


            estrela.addEventListener("click", function() {

                for (let j = 0; j < 10; j++) {

                    if (j < i) {
                        areaNota.children[j].textContent = "⭐";
                    } else {
                        areaNota.children[j].textContent = "☆";
                    }

                }


                item.nota = i;
                nota.textContent = `⭐ ${i}/10`;

                localStorage.setItem(
                    "usuarios",
                    JSON.stringify(usuarios)
                );

            });


            areaNota.appendChild(estrela);
        }


        card.appendChild(areaNota);

    });




    const botaoRemover = document.createElement("button");

    botaoRemover.textContent = "Remover";
    botaoRemover.classList.add("principal");


    botaoRemover.addEventListener("click", function() {

        minhaColeçao.splice(indiceReal, 1);

        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuarios)
        );

        mostrarColecoes();

    });




    const botoes = document.createElement("div");

    botoes.classList.add("botoes-card");

    botoes.appendChild(botaoNota);
    botoes.appendChild(botaoRemover);




    card.appendChild(areaImagem);
    card.appendChild(nome);
    card.appendChild(botoes);


    return card;
}


function mostrarColecoes() {

    listaMeusAnimes.innerHTML = "";
    listaMeusMangas.innerHTML = "";


    minhaColeçao.forEach(function(item, indiceReal) {

        const card = criarCard(item, indiceReal);




        if (item.tipo === "manga") {

            listaMeusMangas.appendChild(card);

        } else {

            listaMeusAnimes.appendChild(card);

        }

    });

}


mostrarColecoes();





nomePerfil.textContent = usuarioAtual.nome;
bioPerfil.textContent = usuarioAtual.bio;
if (usuarioAtual.foto) {
    fotoPerfilUsuario.src = usuarioAtual.foto;
}

botaoEditar.addEventListener("click", function(){
    areaEdicao.style.display = "flex";
    novoNome.value = usuarioAtual.nome;
    novaBio.value = usuarioAtual.bio.trim();
});

botaoSalvar.addEventListener("click", function(){
    const nomeNovo = novoNome.value;
    const bioNova = novaBio.value;

    usuarioAtual.nome = nomeNovo;
    usuarioAtual.bio = bioNova;
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    nomePerfil.textContent = nomeNovo;
    bioPerfil.textContent = bioNova;

    areaEdicao.style.display = "none"
})
history.pushState(null, "", "perfil-usuario.html");

window.addEventListener("popstate", function() {
    window.location.href = "home.html";
});