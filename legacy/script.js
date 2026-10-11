const cards = document.querySelectorAll(".project-card");
const dotsContainer = document.querySelector(".dots");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;
let interval;

cards.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => showCard(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showCard(i) {
  cards[index].classList.remove("active");
  dots[index].classList.remove("active");
  index = i;
  cards[index].classList.add("active");
  dots[index].classList.add("active");
  resetInterval();
}

function nextCard() {
  showCard((index + 1) % cards.length);
}

function prevCard() {
  showCard((index - 1 + cards.length) % cards.length);
}

function startInterval() {
  interval = setInterval(nextCard, 8000);
}

function resetInterval() {
  clearInterval(interval);
  startInterval();
}

nextBtn.addEventListener("click", nextCard);
prevBtn.addEventListener("click", prevCard);

startInterval();
