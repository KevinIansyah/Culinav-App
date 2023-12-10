import { createNotification } from '../utils/notification-initiator';

class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header>
          <nav>
            <div class="loader__box">
              <a class="nav__logo" href="#/" aria-label="beranda">
                <picture>
                  <source type="image/webp" srcset="./icons/logo1.webp">
                  <source type="image/png" srcset="./icons/logo1.png">
                  <img src="./icons/logo1.png" alt="">
                </picture>
              </a>
              <div class="loader"></div>
            </div>

            <div class="nav__menu">
                <a href="#/main">Home</a>
                <a href="#/favorite">Favorite</a>
                <a href="https://github.com/KevinIansyah" target="_blank">About Us</a>
            </div>

            <form id="searchForm" class="search__form">
                <input
                id="searchInput"
                type="text"
                class="form__control"
                placeholder="Search name or category or menus..."
                />
                <button id="buttonSearch" class="button" type="submit">Search</button>
            </form>

            <button class="toggle__menu" aria-label="Buka menu">
              <i class="fa-solid fa-bars"></i>
            </button>

            <div class="dropdown__menu">
                <a href="#/main">Home</a>
                <a href="#/favorite">Favorite</a>
                <a href="https://github.com/KevinIansyah" target="_blank">About Us</a>
                <form id="searchFormDropdown" class="search__form dropdown__form">
                <input
                    id="searchInputDropdown"
                    type="text"
                    class="form__control"
                    placeholder="Search name or category or menus..."
                />
                <button id="buttonDropdown" class="button button__dropdown" type="submit">
                    Search
                </button>
                </form>
            </div>
          </nav>
        </header>
    `;

    const buttonSearch = document.getElementById('buttonSearch');
    const buttonDropdown = document.getElementById('buttonDropdown');

    const handleSearch = (event, inputId) => {
      event.preventDefault();
      const keyword = document.getElementById(inputId).value;

      if (keyword.length > 0) {
        const queryString = `#/search/${keyword}`;
        window.location.href = window.location.origin + queryString;
      } else {
        createNotification('info', 'Please fill in the search field!');
      }
    };

    buttonSearch.addEventListener('click', (event) => {
      handleSearch(event, 'searchInput');
    });

    buttonDropdown.addEventListener('click', (event) => {
      handleSearch(event, 'searchInputDropdown');
    });
  }
}

customElements.define('nav-bar', NavBar);
