import RestaurantSource from '../data/restaurant-source';
import defaultProfil from '../../public/icons/defaultprofil.png';
import { createNotification } from './notification-initiator';

const InputReviewInitiator = {
  async init(id) {
    this._id = id;

    await this._postReview();
  },

  async _postReview() {
    const formReview = document.querySelector('#formAddReview');
    formReview.addEventListener('submit', async (event) => {
      event.preventDefault();

      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const currentDate = new Date().toLocaleDateString('id-ID', options);
      const nameValueInput = document.getElementById('nameInput').value;
      const reviewValueInput = document.getElementById('reviewInput').value;

      const reviewBox = document.querySelector('.boxs__show__review');
      console.log(reviewBox);
      const response = await RestaurantSource.reviewRestaurant({
        id: this._id,
        name: nameValueInput,
        review: reviewValueInput,
      });

      if (response.error) {
        createNotification('error', 'An error occurred while adding the review');
      } else {
        const newContent = `
         <div class="box__show__review">
            <div class="title__review">
              <div class="profil__review">
                <img src="${defaultProfil}" alt="Foto profil">
                <h4>${nameValueInput}</h4>
              </div>
              <h6>${currentDate}</h6>
            </div>
            <p>"${reviewValueInput}"</p>
          </div>
        `;
        const existingContent = reviewBox.innerHTML;
        const combinedContent = newContent + existingContent;
        reviewBox.innerHTML = combinedContent;
        createNotification('success', 'Review successfully added.');
      }
      document.getElementById('nameInput').value = '';
      document.getElementById('reviewInput').value = '';
    });
  },
};

export default InputReviewInitiator;
