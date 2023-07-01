/*---Inicio Header---*/
const headerEl = document.querySelector('.header')

document.addEventListener("DOMContentLoaded", function () {
  var menuToggle = document.querySelector("#menu-toggle");
  var nav = document.querySelector(".nav");
  var list = document.querySelector(".list");

  menuToggle.addEventListener("click", function () {
    nav.classList.toggle("header--active");
    list.classList.toggle("header--active");
  });
});

const isScrolling = () => {
  const windowPosition = window.scrollY > 50
  headerEl.classList.toggle('header--active', windowPosition)
}

window.addEventListener('scroll', isScrolling)

/*---Fim Header---*/
/*---Inicio Cards---*/

const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');
const cardWidth = cards[0].offsetWidth;

let currentPosition = 0;

function scrollCards(direction) {
  const cardCount = cardContainer.children.length;

  if (direction === 'left') {
    currentPosition = Math.max(currentPosition - 1, 0);
  } else if (direction === 'right') {
    currentPosition = Math.min(currentPosition + 1, cardCount - 1);
  }

  const scrollPosition = currentPosition * cardWidth;

  cardContainer.style.transform = `translateX(-${scrollPosition}px)`;
}

/*---Fim Cards---*/


