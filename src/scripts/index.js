import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../scripts/restaurant-item.js';
import data from '../DATA.json';

const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#sidenav");

hamburgerButtonElement.addEventListener("click", event => {
    drawerElement.classList.toggle("open");
    event.stopPropagation();
});

const restaurantList = document.querySelector(".restaurant__list");
data.restaurants.forEach(restaurant => {
    const element = document.createElement("restaurant-item");
    element.setAttribute('id', restaurant.id);
    element.setAttribute('name', restaurant.name);
    element.setAttribute('picture', restaurant.pictureId);
    element.setAttribute('location', restaurant.city);
    element.setAttribute('rating', restaurant.rating);
    element.setAttribute('description', restaurant.description);

    restaurantList.appendChild(element);
});
