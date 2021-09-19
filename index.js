function adicionarFilme() {
    
    let campoFilme = document.getElementById("filme").value;
    if (campoFilme.endsWith(".jpg")) {
        listarFilmesNaTela(campoFilme)
    } else {
        console.error("end errado")
    }

    document.getElementById("filme").value = "";
}

function listarFilmesNaTela(campoFilme) {
    let filmeFavorito = "<img src=" + campoFilme + ">"
    let listaFilmes = document.getElementById("listaFilmes");
    listaFilmes.innerHTML = listaFilmes.innerHTML + filmeFavorito;
}

