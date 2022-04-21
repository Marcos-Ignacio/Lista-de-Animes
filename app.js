function adicionarAnime() {
  var animeFavorito = document.getElementById("anime").value;
  if (animeFavorito.endsWith("")) {
    listaTela(animeFavorito);
    // var capaFilmeFavorito = "<img src=" + filmeFavorito + ">";
    // var listaFilmes = document.getElementById("listaFilmes");
    // listaFilmes.innerHTML = listaFilmes.innerHTML + capaFilmeFavorito;
  } else {
    console.error("Endereço de imagem invalido");
  }
  document.getElementById("anime").value = "";
}

function listaTela(animes) {
  console.log(animes);
  var capaFilmeFavorito = "<img src=" + animes + ">";
  var listaFilmes = document.getElementById("listaAnimes");
  listaFilmes.innerHTML = listaFilmes.innerHTML + capaFilmeFavorito;
}
