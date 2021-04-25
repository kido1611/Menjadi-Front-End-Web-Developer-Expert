import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../components/restaurant-item';
import '../components/empty-list';

const Favorite = {
  async render() {
    return `
    <section class="restaurant">
      <h1 class="restaurant__title">Restoran Disukai</h1>
      <div id="state__container"></div>
      <div class="restaurant__list" id="restaurants"></div>
    </section>
    `;
  },

  async renderHero() {
    return '';
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getRestaurants();
    if (restaurants.length > 0) {
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurants.forEach((restaurant) => {
        const element = document.createElement('restaurant-item');
        element.setAttribute('id', restaurant.id);
        element.setAttribute('name', restaurant.name);
        element.setAttribute('picture', restaurant.pictureId);
        element.setAttribute('location', restaurant.city);
        element.setAttribute('rating', restaurant.rating);
        element.setAttribute('description', restaurant.description);

        restaurantsContainer.appendChild(element);
      });
    } else {
      document.querySelector('#restaurants').style.display = 'none';
      const stateContainer = document.querySelector('#state__container');
      const element = document.createElement('empty-list');
      stateContainer.appendChild(element);
    }
  },
};

export default Favorite;
