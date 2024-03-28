function mode() {
  let body = document.body
  body.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (body.classList.contains("light")) {
    img.setAttribute("src", "./Avatar.png")
  } else {
    img.setAttribute(
      "src",
      "./DevLinks • Projeto Discover (Community)/Mobile/avatar.png"
    )
  }
}
