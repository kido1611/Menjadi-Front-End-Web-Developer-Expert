import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FormReviewInitiator from '../../utils/form-review-initiator';

import {
  createRestaurantDetailTemplate,
  createRestaurantCategoryTemplate,
  createRestaurantMenuTemplate,
  createRestaurantReviewTemplace,
} from '../template/template-creator';

import '../components/star-item';
import '../components/failed-view';
import '../components/loading-view';

const Detail = {
  async render() {
    return `
      <div id="state__container"></div>
      <div class="restaurant__detail__container"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async renderHero() {
    return '';
  },

  async afterRender() {
    window.scrollTo(0, 0);

    const stateContainer = document.querySelector('#state__container');

    const loadingElement = document.createElement('loading-view');
    stateContainer.appendChild(loadingElement);

    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantSource.getRestaurantDetail(url.id);

      stateContainer.innerHTML = '';

      const container = document.querySelector('.restaurant__detail__container');
      container.innerHTML = createRestaurantDetailTemplate(restaurant);

      const starsContainer = document.querySelector('.restaurant__detail__star__container');
      for (let i = 0; i < Math.round(restaurant.rating); i += 1) {
        starsContainer.innerHTML += '<star-item></star-item>';
      }

      const categoriesContainer = document.querySelector('#restaurant__detail__category');
      restaurant.categories.forEach((category) => {
        categoriesContainer.innerHTML += createRestaurantCategoryTemplate(category.name);
      });

      const foodsContainer = document.querySelector('#restaurant__detail__menu__foods');
      restaurant.menus.foods.forEach((food) => {
        foodsContainer.innerHTML += createRestaurantMenuTemplate(food.name);
      });

      const drinksContainer = document.querySelector('#restaurant__detail__menu__drinks');
      restaurant.menus.drinks.forEach((drink) => {
        drinksContainer.innerHTML += createRestaurantMenuTemplate(drink.name);
      });

      const reviewsContainer = document.querySelector('.restaurant__detail__reviews__container');
      restaurant.customerReviews.forEach((review) => {
        reviewsContainer.innerHTML += createRestaurantReviewTemplace(review);
      });

      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          city: restaurant.city,
          description: restaurant.description,
          rating: restaurant.rating,
        },
      });

      FormReviewInitiator.init({
        id: restaurant.id,
        formContainer: document.querySelector('#form__reviews'),
        reviewsContainer,
      });
    } catch (error) {
      stateContainer.innerHTML = '';

      const element = document.createElement('failed-view');
      stateContainer.appendChild(element);
    }
  },
};

export default Detail;
