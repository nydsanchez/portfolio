document.addEventListener("DOMContentLoaded", function () {
  const aboutSkillsSection = document.querySelector(".about-skills");
  const aboutSection = document.querySelector(".about");

  function onScroll() {
    const aboutPosition = aboutSection.getBoundingClientRect().top;
    const sectionPosition = aboutSkillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (aboutPosition < sectionPosition || sectionPosition < screenPosition) {
      aboutSection.classList.add("visible");
      aboutSkillsSection.classList.add("visible");
      window.removeEventListener("scroll", onScroll); // Remover el listener después de activar
    }
  }

  window.addEventListener("scroll", onScroll);
});
