import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createCardRestaurant } from '../templates/tempalte-restaurant';

const Search = {
  async render() {
    return `
    <main>
      <section class="explore">
        <div class="title__explore">
          <button class="button__back__search" onclick="window.history.go(-1)" aria-label="Kembali ke halaman sebelumnya">
            <i class="fa-solid fa-arrow-left"></i>
          </button>
          <h2 tabindex='0'>SEARCH</h2>
        </div>
        <div id="searchList" class="cards__box"></div>
        <div id="searchNotFound" class="cards__box__null"></div>
      </section>
    </main>
    <end-bar></end-bar>
  `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.searchRestaurant(url.id);

    const restaurantContainer = document.querySelector('.cards__box');
    const restaurantContainerNull = document.querySelector('.cards__box__null');
    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createCardRestaurant(restaurant);
      });
    } else {
      restaurantContainerNull.innerHTML
        += '<p id="textSearchNotFound" tabindex="0">The restaurant you were trying to find is not available.</p>';
    }
  },
};

export default Search;
