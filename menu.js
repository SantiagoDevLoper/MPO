const menu = document.createElement("nav");

menu.classList.add("menu-lateral");

menu.innerHTML = `
    <h2>MPO</h2>

    <button class="botao-menu" onclick="window.location.href='home.html'">
        🏠 Home
    </button>

    <button class="botao-menu" onclick="window.location.href='animes.html'">
        🎌 Animes
    </button>

    <button class="botao-menu" onclick="window.location.href='mangas.html'">
        📚 Mangás
    </button>

    <button class="botao-menu">
        🔔 Notificações
    </button>

    <button class="botao-menu" onclick="window.location.href='perfil-usuario.html'">
        👤 Meu Perfil
    </button>
`;

document.body.appendChild(menu);