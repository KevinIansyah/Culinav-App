import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createDetailRestaurant } from '../templates/tempalte-restaurant';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import InputReviewInitiator from '../../utils/input-review-initiator';

const Detail = {
  async render() {
    return `
      <main>
          <section class="detail__restaurant"></section>
      </main>
      <end-bar></end-bar>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('.detail__restaurant');
    detailContainer.innerHTML += createDetailRestaurant(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('.favorite-box'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        description: restaurant.description,
        pictureId: restaurant.pictureId,
        address: restaurant.address,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });

    InputReviewInitiator.init(restaurant.id);
  },
};

export default Detail;
