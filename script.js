function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

/* Duplicate carousel items for infinite loop */
document.querySelectorAll(".carousel").forEach(carousel => {
  carousel.innerHTML += carousel.innerHTML;
});
