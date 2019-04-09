
const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('mouseover', growHeader);

function growHeader(event) {
  event.target.classList.add('hover');
}

logoHeading.addEventListener('mouseleave', shrinkHeader);

function shrinkHeader(event) {
  event.target.classList.remove('hover');
}