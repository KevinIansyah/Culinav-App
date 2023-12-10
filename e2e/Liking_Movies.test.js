const assert = require('assert');

Feature('Liking Movies');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Displaying an empty list of liked movies', ({ I }) => {
  I.seeElement('#favoriteNotFound');
  I.see(
    'There are no restaurants added to favorites yet.',
    '#textFavoriteNotFound'
  );
});

Scenario('Liking one restaurant and verifying it appears in the favorites', async ({ I }) => {
  I.see(
    'There are no restaurants added to favorites yet.',
    '#textFavoriteNotFound'
  );

  I.amOnPage('/');

  I.seeElement('.cards__box a');
  const firstRestaurant = locate('.card__description h3').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.cards__box');
  const likedRestaurantTitle = await I.grabTextFrom('.card__description h3');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking one restaurant and verifying it is removed from the favorites', async ({ I }) => {
  I.amOnPage('/');

  I.seeElement('.cards__box a');
  I.click(locate('.cards__box a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.cards__box a');
  I.click(locate('.cards__box a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see(
    'There are no restaurants added to favorites yet.',
    '#textFavoriteNotFound'
  );
});
