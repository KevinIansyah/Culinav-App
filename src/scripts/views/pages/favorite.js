import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createCardRestaurant } from '../templates/tempalte-restaurant';
import {
  showLoadingIndicator,
  hideLoadingIndicator,
} from '../../utils/loading-indicator-initiator';

const Favorite = {
  async render() {
    return `
    <main>
      <section class="explore">
        <div class="title__explore">
          <h2 tabindex='0'>FAVORITE</h2>
        </div>
        <div id="favoriteList" class="cards__box"></div>
        <div id="favoriteNotFound" class="cards__box__null"></div>
      </section> 
    </main>
    <end-bar></end-bar>
  `;
  },

  async afterRender() {
    showLoadingIndicator();
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    hideLoadingIndicator();
    const restaurantContainer = document.querySelector('.cards__box');
    const restaurantContainerNull = document.querySelector('.cards__box__null');

    if (restaurants.length > 0) {
      restaurants.forEach((restaurant) => {
        restaurantContainer.innerHTML += createCardRestaurant(restaurant);
      });
    } else {
      restaurantContainerNull.innerHTML
        += '<p id="textFavoriteNotFound" tabindex="0">There are no restaurants added to favorites yet.</p>';
    }
  },
};

export default Favorite;
