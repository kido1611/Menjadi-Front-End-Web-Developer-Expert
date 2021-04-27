import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__detail__overview">
    <div class="restaurant__detail__overview__image">
      <picture>
        <source media="(max-width: 639px)" srcset="${CONFIG.BASE_IMAGE_SMALL_URL(restaurant.pictureId)}">
        <img class="rounded lazyload" 
          data-src="${CONFIG.BASE_IMAGE_MEDIUM_URL(restaurant.pictureId)}" 
          alt="${restaurant.name}" />
      </picture>
    </div>
    <div class="restaurant__detail__overview__data">
      <h1 class="restaurant__detail__title">${restaurant.name}</h1>
      <div class="restaurant__detail__star__container"></div>
      <div class="restaurant__detail__location">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor" style="width: 1.5rem; height: 1.5rem;">
          <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
        </svg>
        ${restaurant.address}, ${restaurant.city}
      </div>
      <div class="restaurant__detail__sub__category">
        <h3>Kategori</h3>
        <ul class="badge__container" id="restaurant__detail__category">
        </ul>
      </div>
      <div class="restaurant__detail__sub__category" id="restaurant__detail__sub__category__description">
        <h3>
        Deskripsi
        </h3>
        <p>${restaurant.description}</p>
      </div>
    </div>
  </div>
  <div class="restaurant__detail__category">
    <h2 class="text-center">Menu</h2>
    <div class="restaurant__detail__menu">
      <div class="restaurant__detail__sub__category">
        <h3>Makanan</h3>
        <ul class="badge__container" id="restaurant__detail__menu__foods"></ul>
      </div>
      <div class="restaurant__detail__sub__category">
        <h3>Minuman</h3>
        <ul class="badge__container" id="restaurant__detail__menu__drinks">
        </ul>
      </div>
    </div>
  </div>
  <div class="restaurant__detail__category">
    <h2 class="text-center">Ulasan</h2>
    <div class="restaurant__detail__reviews__container"></div>
  </div>
  <div class="restaurant__detail__category" id="category__reviews__form">
    <h2 class="text-center">Tambah Ulasan</h2>
    <div class="restaurant__detail__add__reviews__container">
      <form id="form__reviews">
        <div>
          <input type="hidden" name="id" value="${restaurant.id}">
        </div>
        <div>
          <label for="form__name">Nama</label>
          <input class="input__text" type="text" id="form__name" name="name" required >
        </div>
        <div class="mt__3">
          <label for="form__review">Pesan</label>
          <textarea class="input__text" id="form__review" rows="5" name="review" required></textarea>
        </div>
        <div class="mt__3">
          <button class="submit__button" role="button" type="submit">Buat ulasan</button>
        </div>
      </form>
    </div>
  </div>
`;

const createRestaurantCategoryTemplate = (name) => `
  <li>${name}</li>
`;

const createRestaurantMenuTemplate = (name) => `
  <li>${name}</li>
`;

const createRestaurantReviewTemplace = (review) => `
<div class="restaurant__detail__reviews__item">
  <svg xmlns="http://www.w3.org/2000/svg" class="" viewBox="0 0 20 20" fill="currentColor" style="width: 2.5rem; height: 2.5rem;">
    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
  </svg>
  <div class="restaurant__detail__reviews__data__container">
    <div class="restaurant__detail__reviews__data__date">${review.date}</div>
    <div class="restaurant__detail__reviews__data__name">${review.name}</div>
    <p class="restaurant__detail__reviews__data__comment">${review.review}</p>
  </div>
</div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path></svg>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" class="svg-inline--fa fa-heart fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantCategoryTemplate,
  createRestaurantMenuTemplate,
  createRestaurantReviewTemplace,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
