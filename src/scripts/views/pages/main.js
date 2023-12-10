import RestaurantSource from '../../data/restaurant-source';
import { createCardRestaurant } from '../templates/tempalte-restaurant';

const Main = {
  async render() {
    return `
    <main>
    <hero-section></hero-section>
      <section class="explore">
        <div class="title__explore">
          <h2 tabindex="0">EXPLORE RESTAURANT</h2>
        </div>
        <div class="cards__box"></div>
      </section>
      <subcribe-section></subcribe-section>
    </main>
    <end-bar></end-bar>
  `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.allRestaurant();
    const restaurantContainer = document.querySelector('.cards__box');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createCardRestaurant(restaurant);
    });
  },
};

export default Main;
