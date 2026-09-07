console.log("JavaScript funcionando");
const nomeSalvo = localStorage.getItem("nomeUsuario");
const nomePerfil = document.querySelector("#nomePerfil");

const bioPerfil = document.querySelector("#bioPerfil");
const bioSalva = localStorage.getItem("bioUsuario");

const botaoEditar = document.querySelector("#botaoEditar");
const areaEdicao = document.querySelector("#areaEdicao");

const botaoSalvar = document.querySelector("#botaoSalvar");

const novoNome = document.querySelector("#novoNome");
const novaBio = document.querySelector("#novaBio");

const minhaColeçao = JSON.parse(localStorage.getItem("minhaColeçao")) || [];
const listaMeusAnimes = document.querySelector("#listaMeusAnimes");

function mostrarMeusAnimes() {
    listaMeusAnimes.innerHTML= "";
    minhaColeçao.forEach(function(anime, indice){
        const card = document.createElement("div");
        card.classList.add("card-colecao")
        
        const imagem = document.createElement("img")
        imagem.src = anime.capa;
        imagem.alt = anime.nome;

        const nome = document.createElement("h3");

        

        const botaoNota = document.createElement("button");
        botaoNota.textContent = "⭐";
        botaoNota.classList.add("botaoNota");
        botaoNota.addEventListener("click", function(){
            const areaNotaExistente = card.querySelector(".area-nota");
             if (areaNotaExistente) {
                areaNotaExistente.remove()
                return
             }
            const areaNota = document.createElement("div");
            areaNota.classList.add("area-nota");
           
            for (let i = 1; i <= 10; i++){
    const estrela = document.createElement("button");

    if (anime.nota && i <= anime.nota){
        estrela.textContent = "⭐";
    } else {
        estrela.textContent = "☆";
    }

    estrela.addEventListener("click", function(){

        for (let j = 0; j < 10; j++){
            if (j < i){
                areaNota.children[j].textContent = "⭐";
            } else {
                areaNota.children[j].textContent = "☆";
            }
        }

        anime.nota = i;
        localStorage.setItem("minhaColeçao", JSON.stringify(minhaColeçao));

        console.log("nota escolhida", i);
    });

    areaNota.appendChild(estrela);
}
    card.appendChild(areaNota)
        })

        const botaoRemover = document.createElement("button");
        nome.textContent = anime.nome;
        botaoRemover.textContent = "Remover";
        botaoRemover.classList.add("principal")
        botaoRemover.addEventListener("click", function(){
            minhaColeçao.splice(indice, 1)
            localStorage.setItem("minhaColeçao", JSON.stringify(minhaColeçao));
            mostrarMeusAnimes();
        })
        

        
        card.appendChild(imagem);
        card.appendChild(nome);
        
        
        const botoes = document.createElement("div");
        botoes.classList.add("botoes-card");

        botoes.appendChild(botaoNota);
        botoes.appendChild(botaoRemover);

        card.appendChild(botoes);


       
        listaMeusAnimes.appendChild(card);
        
    });

}
mostrarMeusAnimes()



nomePerfil.textContent = nomeSalvo;
bioPerfil.textContent = bioSalva;

botaoEditar.addEventListener("click", function(){
    areaEdicao.style.display = "flex";
    novoNome.value = nomeSalvo;
    novaBio.value = bioSalva.trim();
});

botaoSalvar.addEventListener("click", function(){
    const nomeNovo = novoNome.value;
    const bioNova = novaBio.value;
    localStorage.setItem("nomeUsuario", nomeNovo);
    localStorage.setItem("bioUsuario", bioNova);
    nomePerfil.textContent = nomeNovo;
    bioPerfil.textContent = bioNova;
    areaEdicao.style.display = "none"
})
