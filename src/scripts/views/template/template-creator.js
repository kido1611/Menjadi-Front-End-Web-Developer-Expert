import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <div class="restaurant__detail__overview">
    <img class="rounded restaurant__detail__overview__image lazyload" data-src="${CONFIG.BASE_IMAGE_URL(restaurant.pictureId)}" alt="${restaurant.name}" />
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

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantCategoryTemplate,
  createRestaurantMenuTemplate,
  createRestaurantReviewTemplace,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
