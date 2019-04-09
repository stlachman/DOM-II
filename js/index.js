
const logoHeading = document.querySelector('.logo-heading');

logoHeading.addEventListener('mouseover', growHeader);

function growHeader(event) {
  event.target.classList.add('hover');
}

logoHeading.addEventListener('mouseleave', shrinkHeader);

function shrinkHeader(event) {
  event.target.classList.remove('hover');
}

logoHeading.addEventListener('dblclick', notifyUser);

const notificationDiv = document.createElement('div');
notificationDiv.innerHTML = "<p>I don't go anywhere!</p>";
notificationDiv.className = "notification";

function notifyUser(event) {
  event.target.appendChild(notificationDiv);
}