class RestaurantItem extends HTMLElement {
  connectedCallback() {
    this.id = this.getAttribute('id') || null;
    this.name = this.getAttribute('name') || null;
    this.pictureUrl = this.getAttribute('picture') || null;
    this.location = this.getAttribute('location') || null;
    this.rating = this.getAttribute('rating') || null;
    this.description = this.getAttribute('description') || null;

    this.innerHTML = `
        <article class="restaurant__item">
            <img class="restaurant__item__thumbnail lazyload" alt="${this.name}" data-src="${this.pictureUrl}" >
            <div class="restaurant__item__rating">
                <svg xmlns="http://www.w3.org/2000/svg" class="restaurant__item__rating__star" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                ${this.rating}
            </div>
            <div class="restaurant__item__data">
                <h1 class="restaurant__item__name">
                    <a href="#/detail/${this.id}">${this.name}</a>
                </h1>
                <div class="restaurant__item__city">
                    <svg xmlns="http://www.w3.org/2000/svg" class="restaurant__item__city__icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    ${this.location}
                </div>
                <p class="restaurant__item__description">
                    ${this.description}
                </p>
            </div>
        </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
