const assert = require('assert');
Feature('Input Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('test', ({ I }) => {
  I.seeElement('.cards__box a');
  I.click(locate('.cards__box a').first());

  I.seeElement('#nameInput');
  I.fillField('#nameInput', 'Kevin Ian');

  I.seeElement('#reviewInput');
  I.fillField('#reviewInput', 'Makanan enak');

  I.seeElement('#buttonReview');
  I.click('#buttonReview');

  I.see('Kevin Ian', '.profil__review h4');
  I.see('Makanan enak', '.box__show__review p');
});
