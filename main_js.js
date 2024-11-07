function checkMainPosition() {
  const main_about = document.querySelector(".about");
  const rrss = document.querySelector(".header_nav");
  const hero = document.querySelector(".hero");
  const img = document.querySelector(".img_header");
  const title = document.querySelector(".active");
  const header = document.querySelector("#home");

  // Obtener la posición del elemento main
  const rect = main_about.getBoundingClientRect();

  // Si la parte superior de main está en la parte superior de la pantalla
  if (rect.top <= 2) {
    // Ocultar el elemento con la clase massiel
    if (rrss && hero && img) {
      rrss.style.display = "none";
      hero.style.display = "none";
      img.style.display = "none";
      title.style.display = "inline-block";
      header.style.position = "sticky";
      header.style.top = 0;
      header.style.zIndex = 9999;
    }
  } else {
    // Si no está en el top, asegurarse de que sea visible
    if (rrss && hero && img) {
      rrss.style.display = "";
      hero.style.display = "";
      img.style.display = "";
      title.style.display = "none";
      header.style.position = "relative";
    }
  }
}

// Ejecutar la función cada vez que se haga scroll
window.addEventListener("scroll", checkMainPosition);

// Llamar a la función al cargar la página por si ya está en el top
checkMainPosition();
