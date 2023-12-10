/* eslint-disable max-len */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from '../../global/config';

const createCardRestaurant = (restaurant) => `
    <a href="#/detail/${restaurant.id}" class="card">
        <img class="lazyload" src="${CONFIG.BASE_IMAGE_SMALL + restaurant.pictureId}" alt="Foto restaurant ${restaurant.name}." loading="lazy" />
        <div class="card__description">
            <div class="card__icon">
                <div class="card__location">
                    <i class="fa-solid fa-store"></i>
                    <p aria-label="Lokasi: ${restaurant.city}.">${restaurant.city}</p>
                </div>
                <div class="card__location">
                    <i class="fa-solid fa-star"></i>
                    <p aria-label="Rating: ${restaurant.rating}.">${restaurant.rating}</p>
                </div>
            </div>
            <h3 aria-label="Nama restaurant: ${restaurant.name}.">${restaurant.name}</h3>
            <p class="description" aria-label="Deskripsi restaurant: ${restaurant.description}.">${restaurant.description}</p>
        </div>
    </a>
    `;

const createDetailRestaurant = (restaurant) => `
    <div
        class="detail__background"
        style="background-image: url('${CONFIG.BASE_IMAGE_SMALL + restaurant.pictureId}')"
    >
      <div class="detail__overlay">
        <div class="detail__content">
          <img tabindex="0" src="${CONFIG.BASE_IMAGE_SMALL + restaurant.pictureId}" alt="Foto restaurant ${restaurant.name}" />
          </div>
          <div class="detail__content">
            <div class="detail__name">
              <button tabindex="0" class="button__back" onclick="window.history.go(-1)" aria-label="Kembali ke halaman sebelumnya">
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <h2 tabindex="0" aria-label="Nama restaurant: ${restaurant.name}">${restaurant.name}</h2>
            </div>
            <h3 tabindex="0" aria-label="Kategori: ${restaurant.categories.map((category) => category.name).join(', ')}">
            ${restaurant.categories.map((category) => category.name).join(', ')}
            </h3>
            <div class="detail__address">
              <div class="address__box">
                <i class="fa-solid fa-store"></i>
                <h4 tabindex="0" aria-label="Alamat: ${restaurant.address}, ${restaurant.city}">${restaurant.address}, ${restaurant.city}</h4>
              </div>
              <hr class="vertical-line" />
              <div class="address__box">
                <i class="fa-solid fa-star"></i>
                <h4 class="rating" tabindex="0" aria-label="Rating: ${restaurant.rating}">${restaurant.rating}</h4>
              </div>
              <hr class="vertical-line" />
              <div class="favorite-box"></div>
            </div>
            <p tabindex="0" aria-label="Deskripsi: ${restaurant.description}">${restaurant.description}</p>
          </div>
        </div>
      </div>
      
      <div class="menus__box">
        <h2 class="menus__title" tabindex="0">MENUS</h2>
        <div class="menus__content">
            <div class="food">
                <h3 tabindex="0">FOODS</h3>
                <p tabindex="0" aria-label="Menu makanan: ${restaurant.menus.foods.map((food) => food.name).join(', ')}">${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
            </div>
            <div class="food">
                <h3 tabindex="0">DRINKS</h3>
                <p tabindex="0" aria-label="Menu minuman: ${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}">${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
            </div>
        </div>
      </div>

      <div class="menus__box reviews__box">
        <h2 class="menus__title" tabindex="0">REVIEW</h2>
            <div class="menus__content reviews__content">
                <div class="add__review">
                    <h3 tabindex="0">WRITE REVIEW</h3>
                    <form id="formAddReview" class="form__review">
                        <input id="id" type="hidden" value="${restaurant.id}">
                        <input
                            class="form__control"
                            id="nameInput"
                            type="text"
                            placeholder="Input your name..."
                            required
                        />
                        <textarea id="reviewInput" class="form__control" rows="10" cols="50" style="resize: none;" placeholder="Input your review here..." required></textarea>
                        <button id="buttonReview" class="button button__review" type="submit">Send</button>
                    </form>
                </div>
                <div class="show__review">
                    <h3 tabindex="0">REVIEWS</h3>
                    <div class="boxs__show__review">
                    
                    ${restaurant.customerReviews.slice().reverse().map((customerReview) => `
                        <div class="box__show__review">
                            <div class="title__review">
                                <div class="profil__review">
                                    <picture>
                                      <source type="image/webp" srcset="./icons/defaultprofil.webp">
                                      <source type="image/jpeg" srcset="./icons/defaultprofil.png">
                                      <img src="./icons/defaultprofil.png" alt="">
                                    </picture>
                                    
                                    <h4 tabindex="0" aria-label="Nama customer: ${customerReview.name}">${customerReview.name}</h4>
                                </div>
                                <h5 tabindex="0" aria-label="Tanggal ulasan: ${customerReview.date}">${customerReview.date}</h5>
                            </div>
                            <p tabindex="0" aria-label="Ulasan: ${customerReview.review}">${customerReview.review}</p>
                        </div>
                      `).join('')}
                    </div>
                </div>
            </div>
      </div>
`;

const createLikeMovieButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa-regular fa-heart"></i>
  </button>
`;

const createUnlikeMovieButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa-solid fa-heart"></i>
  </button>
`;

export {
  createCardRestaurant, createDetailRestaurant, createLikeMovieButtonTemplate, createUnlikeMovieButtonTemplate,
};
