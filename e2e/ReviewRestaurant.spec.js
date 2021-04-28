const assert = require('assert');

Feature('Reviewing Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('see restaurant detail page', async ({ I }) => {
  I.seeElement('.restaurant__item__name a');

  const firstRestaurant = locate('.restaurant__item__name a');
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  const detailRestaurant = locate('.restaurant__detail__title');
  const detailRestaurantName = await I.grabTextFrom(detailRestaurant);

  assert.strictEqual(firstRestaurantName, detailRestaurantName);
});

Scenario('reviewing restaurant', async ({ I }) => {
  I.seeElement('.restaurant__item__name a');

  const firstRestaurant = locate('.restaurant__item__name a');
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  const detailRestaurant = locate('.restaurant__detail__title');
  const detailRestaurantName = await I.grabTextFrom(detailRestaurant);

  assert.strictEqual(firstRestaurantName, detailRestaurantName);

  // Isi review
  const reviewMessage = 'Tempanya menyenangkan, E2E testing';
  I.seeElement('#form__reviews');
  I.fillField('name', 'E2E testing');
  I.fillField('review', reviewMessage);

  // Submit review
  I.click('button.submit__button');

  // Cek apakah review muncul di daftar review
  I.see(reviewMessage, '.restaurant__detail__reviews__data__comment');
});
