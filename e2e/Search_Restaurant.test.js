const assert = require('assert');

Feature('Search Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('Search restaurant with an empty keyword', ({ I }) => {
  I.seeElement('#searchInput');
  I.fillField('#searchInput', '');

  I.seeElement('#buttonSearch');
  I.click('#buttonSearch');

  I.seeElement('#notifications');
});

Scenario('Search restaurant with the "rumah senja" keyword', ({ I }) => {
  I.seeElement('#searchInput');
  I.fillField('#searchInput', 'rumah senja');

  I.seeElement('#buttonSearch');
  I.click('#buttonSearch');

  I.seeElement('.cards__box');
  I.see('Rumah Senja', '.card__description h3');

});

Scenario('Search for a restaurant and receive a "not found" result', ({ I }) => {
  I.seeElement('#searchInput');
  I.fillField('#searchInput', 'asjhdaskhfAS');

  I.seeElement('#buttonSearch');
  I.click('#buttonSearch');

  I.seeElement('#searchNotFound');
  I.see(
    'The restaurant you were trying to find is not available.',
    '#textSearchNotFound'
  );
});
