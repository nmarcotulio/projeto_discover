function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar1-light.png")
    img.setAttribute("alt", "Foto de Marco sorrindo")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar1.png")
    img.setAttribute("alt", "Foto de Marco e Stella sorrindo")
  }

  // if (html.classList.contains("light")) {
  // html.classList.remove("light")
  // } else {
  // html.classList.add("light")
  // }
}
