const animes = [
    {
        nome: "Death Note",
        capa: "imagens/anime/death-note.avif"
    },
    {
        nome: "Monster",
        capa: "imagens/anime/monster.avif"
    },
    {
        nome: "Naruto",
        capa: "imagens/anime/naruto.avif"
    },
    {
        nome: "Mob Psycho 100",
        capa: "imagens/anime/mob.avif"
    },
    {
        nome: "Bleach",
        capa: "imagens/anime/bleach.avif"
    },
    {
        nome: "Bleach Thousand-Year Blood War",
        capa: "imagens/anime/tybw.avif"
    },
    {
        nome: "One Piece",
        capa: "imagens/anime/onepiece.avif"
    },
    {
        nome: "Attack On Titan",
        capa: "imagens/anime/attack.avif"
    },
    {
        nome: "Bunny Girl Senpai",
        capa: "imagens/anime/bunnygirl.avif"
    },
    {
        nome: "Mirai Nikki",
        capa: "imagens/anime/mirai.avif"
    },
    {
        nome: "Classroom Of The Elite",
        capa: "imagens/anime/cote.avif"
    },
    {
        nome: "Saga Of Tanya The Evil",
        capa: "imagens/anime/tanya.avif"
    },
    {
        nome: "Ancient Magus Bride",
        capa: "imagens/anime/magusbride.avif"
    },
    {
        nome: "Tate No Yuusha/Shield Hero",
        capa: "imagens/anime/tate.avif"
    },
    {
        nome: "Kaifuku/Redo Of Healer",
        capa: "imagens/anime/redo.avif"
    },
    {
        nome: "Kakegurui",
        capa:  "imagens/anime/kakegurui.avif"

    },
    {
        nome: "Inuyasha",
        capa: "imagens/anime/inuyasha.avif"
    },
    {
        nome: "Digimon Adventure",
        capa: "imagens/anime/digimonad.avif"
    },
    {
        nome: "Saint Seya/Cavaleiros Do Zodíaco",
        capa: "imagens/anime/saintseya.avif"
    },
    {
        nome: "Yu-Gi-Oh",
        capa: "imagens/anime/yugioh.avif"
    },
    {
        nome: "Yu-Gi-Oh GX",
        capa: "imagens/anime/yugiohgx.avif"
    },
    {
        nome: "Berserk",
        capa: "imagens/anime/berserk.avif"
    },
    {
        nome: "Vinland Saga",
        capa: "imagens/anime/vinland.avif"
    },
    {
        nome: "Dr.Stone",
        capa: "imagens/anime/drstone.avif"
    },
    {
        nome: "Haikyuu!!",
        capa: "imagens/anime/haikyuu.avif"
    },
    {
        nome: "Kuroko No Basket",
        capa: "imagens/anime/kuroko.avif"
    },
    {
        nome: "Assassination Classroom",
        capa: "imagens/anime/ac.avif"
    },
    {
        nome: "Nanatsu No Taizai",
        capa: "imagens/anime/nanatsu.avif"
    },
    {
        nome: "Re:Zero",
        capa: "imagens/anime/rezero.avif"
    },
    {
        nome: "No Game No Life",
        capa: "imagens/anime/nogame.avif"
    },
    {
        nome: "Tensei Shitara Slime Data Ken",
        capa: "imagens/anime/tensei.avif"
    },
    {
        nome: "Overlord",
        capa: "imagens/anime/overlord.avif"
    },
    {
        nome: "The Promised Neverland",
        capa: "imagens/anime/tpnl.avif"
    },
    {
        nome: "Erased",
        capa: "imagens/anime/erased.avif"
    },
    {
        nome: "Steins;Gate",
        capa: "imagens/anime/steins.avif"
    },
    {
        nome: "Fate/Zero",
        capa: "imagens/anime/fatezero.avif"
    },
    {
        nome: "Fate/Stay Night: Unlimited Blade Works",
        capa: "imagens/anime/fatestayubw.avif"
    },
    {
        nome: "Spy x Family",
        capa: "imagens/anime/spyfamily.avif"
    },
    {
        nome: "Frieren: Beyond Journey's End",
        capa: "imagens/anime/frierenbj.avif"
    },
    {
        nome: "Dragon Ball",
        capa: "imagens/anime/db.avif"
    },
    {
        nome: "Dragon Ball Z",
        capa: "imagens/anime/dragonballz.avif"
    },
    {
        nome: "Pokémon",
        capa: "imagens/anime/pokemon.avif"
    },
    {
        nome: "Demon Slayer",
        capa: "imagens/anime/demonslayer.avif"
    },
    {
        nome: "Boku No Hero Academia",
        capa: "imagens/anime/bokunohero.avif"
    },
    {
        nome: "One Punch Man",
        capa: "imagens/anime/onepunch.avif"
    },
    {
        nome: "Sword Art Online",
        capa: "imagens/anime/sao.avif"
    },
    {
        nome: "Hunter x Hunter",
        capa: "imagens/anime/hunterx.avif"
    },
    {
        nome: "Fullmetal Alchemist: Brotherhood",
        capa: "imagens/anime/fullmetalbh.avif"
    },
    {
        nome: "Tokyo Ghoul",
        capa: "imagens/anime/tokyoghoul.avif"
    },
    {
        nome: "JoJo's Bizarre Adventure",
        capa: "imagens/anime/jojos.avif"
    },
    {
        nome: "Saylor Moon",
        capa: "imagens/anime/sm.avif"
    },
    {
        nome: "Neon Genesis Evangelion",
        capa: "imagens/anime/neongenesis.avif"
    },
    {
        nome: "Cowboy Bebop",
        capa: "imagens/anime/bebop.avif"
    },
    {
        nome: "Fairy Tail",
        capa: "imagens/anime/fairytail.avif"
    },
    {
        nome: "Black Clover",
        capa: "imagens/anime/blackclover.avif"
    },
    {
        nome: "ChainSaw Man",
        capa: "imagens/anime/chainsawman.avif"
    },
    {
        nome: "Code Geass",
        capa: "imagens/anime/codegeass.avif"
    },
    {
        nome: "Yu Yu Hakusho",
        capa: "imagens/anime/yuyu.avif"
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


const listaAnimes = document.querySelector("#listaAnimes");
const pesquisaAnime = document.querySelector("#pesquisaAnime");

function mostrarAnimes(lista){
    listaAnimes.innerHTML = "";
    lista.forEach(function(anime){
        const card = document.createElement("div");
        card.classList.add("card-anime");
        
        const imagem = document.createElement("img");
        imagem.src = anime.capa;
        imagem.alt = anime.nome
        
        
        
        const nome = document.createElement("h2");
        nome.textContent = anime.nome;
        
        card.appendChild(imagem);
        card.appendChild(nome);
        
        const botao = document.createElement("button");
        botao.classList.add("principal");
        botao.textContent = "Adicionar";
        if (minhaColeçao.some(function(item){
            return item.nome === anime.nome
        })){
            botao.textContent = "✓ Adicionado";
            botao.classList.add("adicionado");
            botao.disabled = true
        }
        botao.addEventListener("click", function(){
            if (minhaColeçao.some(function(item){
                return item.nome === anime.nome
            })){
                botao.textContent = "✓ Adicionado"
                botao.classList.add("adicionado")

                return;
            }
            minhaColeçao.push(anime);
            localStorage.setItem("usuarios", JSON.stringify(usuarios));
            botao.textContent = "✓ Adicionado";
            botao.classList.add("adicionado");
            botao.disabled = true;
        })
        
        card.appendChild(botao)
        listaAnimes.appendChild(card)
    })
}
mostrarAnimes(animes);
pesquisaAnime.addEventListener("input", function(){
    const textoPesquisa = pesquisaAnime.value.toLowerCase();
    const animesFiltrados = animes.filter(function(anime){
        return anime.nome.toLowerCase() .includes(textoPesquisa);
        
    })
    
mostrarAnimes(animesFiltrados)
})

