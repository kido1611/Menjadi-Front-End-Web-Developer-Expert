const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.restaurant__title');
  I.see('Huhuhu... daftar kosong', '.empty-message');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Huhuhu... daftar kosong', '.empty-message');

  I.amOnPage('/');

  I.seeElement('.restaurant__item__name a');

  const firstResturant = locate('.restaurant__item__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstResturant);
  I.click(firstResturant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');

  const likedRestaurantName = await I.grabTextFrom('.restaurant__item__name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Huhuhu... daftar kosong', '.empty-message');

  I.amOnPage('/');

  I.seeElement('.restaurant__item__name a');

  const firstResturant = locate('.restaurant__item__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstResturant);
  I.click(firstResturant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant__item');

  const likedRestaurant = locate('.restaurant__item__name a').first();
  const likedRestaurantName = await I.grabTextFrom(likedRestaurant);

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(likedRestaurant);

  const detailRestaurant = locate('.restaurant__detail__title');
  const detailRestaurantName = await I.grabTextFrom(detailRestaurant);

  assert.strictEqual(likedRestaurantName, detailRestaurantName);

  I.seeElement('#likeButton');
  // pastikan yang dilihat tombol unlike
  I.seeElement('[aria-label="unlike this restaurant"]');
  I.click('[aria-label="unlike this restaurant"]');

  I.amOnPage('/#/favorite');
  I.see('Huhuhu... daftar kosong', '.empty-message');
});
