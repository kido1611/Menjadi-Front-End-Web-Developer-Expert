import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantSource {
  static async getRestaurants() {
    const response = await fetch(API_ENDPOINT.list);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getRestaurantDetail(id) {
    const response = await fetch(API_ENDPOINT.detail(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async postRestaurantReview(review) {
    const response = await fetch(API_ENDPOINT.review, {
      method: 'POST',
      headers: {
        'X-Auth-Token': CONFIG.KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });

    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantSource;
