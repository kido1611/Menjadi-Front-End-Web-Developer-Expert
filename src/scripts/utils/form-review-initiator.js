import RestaurantSource from '../data/restaurant-source';
import { createRestaurantReviewTemplace } from '../views/template/template-creator';

const FormReviewInitiator = {
  async init({ id, formContainer, reviewsContainer }) {
    this._id = id;
    this._formContainer = formContainer;
    this._reviewsContainer = reviewsContainer;

    this._formContainer.addEventListener('submit', (event) => {
      event.preventDefault();
      this.submitForm();
    });
  },

  async submitForm() {
    const inputName = document.querySelector('#form__name');
    const inputReview = document.querySelector('#form__review');

    const review = {
      id: this._id,
      name: inputName.value,
      review: inputReview.value,
    };

    const response = await RestaurantSource.postRestaurantReview(review);
    const newReviews = response.customerReviews;

    this._reviewsContainer.innerHTML = '';
    newReviews.forEach((newReview) => {
      this._reviewsContainer.innerHTML += createRestaurantReviewTemplace(newReview);
    });
    this._formContainer.reset();
  },
};

export default FormReviewInitiator;
