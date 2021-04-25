import RestaurantSource from '../../data/restaurant-source';

import '../components/restaurant-item';
import '../components/failed-view';
import '../components/loading-view';

const Home = {
  async render() {
    return `
    <section class="restaurant">
      <h1 class="restaurant__title">Daftar Restoran</h1>
      <div id="state__container"></div>
      <div class="restaurant__list" id="restaurants"></div>
    </section>
    `;
  },

  async renderHero() {
    return `
    <div class="hero__item">
        <div class="hero__container">
            <h1 class="hero__title">
                Temukan restoran terbaik disekitarmu
            </h1>
            <p class="hero__subtitle">
                Cari restoran dimanapun dan kapanpun kamu berada dengan beragam menu yang tersedia
            </p>
        </div>
    </div>
    `;
  },

  async afterRender() {
    const stateContainer = document.querySelector('#state__container');

    const loadingElement = document.createElement('loading-view');
    stateContainer.appendChild(loadingElement);

    try {
      const restaurants = await RestaurantSource.getRestaurants();

      stateContainer.innerHTML = '';

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
    } catch (error) {
      stateContainer.innerHTML = '';

      document.querySelector('#restaurants').style.display = 'none';
      const element = document.createElement('failed-view');
      stateContainer.appendChild(element);
    }
  },
};

export default Home;
