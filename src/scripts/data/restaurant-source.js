import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';
import { createNotification } from '../utils/notification-initiator';
import {
  showLoadingIndicator,
  hideLoadingIndicator,
} from '../utils/loading-indicator-initiator';

const ERROR_MESSAGES = {
  FETCH_RESTAURANT: 'Failed to fetch restaurant data',
  ADD_REVIEW: 'Failed to add a review',
};
class RestaurantSource {
  static async allRestaurant() {
    try {
      showLoadingIndicator();
      const response = await axios.get(API_ENDPOINT.ALL);
      hideLoadingIndicator();
      return response.data.restaurants;
    } catch (error) {
      hideLoadingIndicator();
      createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async detailRestaurant(id) {
    try {
      showLoadingIndicator();
      const response = await axios.get(API_ENDPOINT.DETAIL(id));
      hideLoadingIndicator();
      return response.data.restaurant;
    } catch (error) {
      hideLoadingIndicator();
      createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async searchRestaurant(query) {
    try {
      showLoadingIndicator();
      const response = await axios.get(API_ENDPOINT.SEARCH(query));
      hideLoadingIndicator();
      return response.data.restaurants;
    } catch (error) {
      hideLoadingIndicator();
      createNotification('error', ERROR_MESSAGES.FETCH_RESTAURANT);
      return console.error(error);
    }
  }

  static async reviewRestaurant(body) {
    const data = {
      id: body.id,
      name: body.name,
      review: body.review,
    };

    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      showLoadingIndicator();
      const response = await axios.post(API_ENDPOINT.ADD_REVIEW, data, options);
      hideLoadingIndicator();
      return response.data;
    } catch (error) {
      hideLoadingIndicator();
      createNotification('error', ERROR_MESSAGES.ADD_REVIEW);
      return console.error(error);
    }
  }
}

export default RestaurantSource;
