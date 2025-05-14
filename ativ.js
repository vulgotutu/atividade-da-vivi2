function mostrarFavoritos() {
    const filme = document.querySelector("#filme").value
    const musica = document.querySelector("#musica").value
    const jogo = document.querySelector("#jogo").value
  
    const resultado = `
    Seu filme favorirto é  ${filme }
    Seu musica favorito é  ${ musica }
    Seu jogo favorito   é  ${ jogo } 
    `
  
    document.querySelector("#resultado").innerHTML = resultado
  }
  