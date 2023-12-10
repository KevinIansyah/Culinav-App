class EndBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <div class="footer__header">
                <picture>
                    <source type="image/webp" srcset="./icons/logo1.webp">
                    <source type="image/png" srcset="./icons/logo1.png">
                    <img src="./icons/logo1.png" alt="">
                </picture>
                <p class="footer__description">
                    Culinav adalah tempat di mana Anda dapat menemukan informasi
                    tentang berbagai restoran, kafe, dan tempat makan lainnya di
                    berbagai kota dan daerah.
                </p>
            </div>
            <div class="footer__body">
                <h1 class="card-title">Chortcut</h1>
                <a href="#/main">Home</a>
                <a href="#/favorite">Favorite</a>
                <a href="https://github.com/KevinIansyah" target="_blank">About Us</a>
            </div>
            <div class="footer__body">
                <h1 class="card-title">Contact</h1>
                <a href="#">Instagram</a>
                <a href="#">Facebook</a>
                <a href="#">Email</a>
            </div>
            <div class="footer__body">
                <h1 class="card-title">Addres</h1>
                <p class="card-text m-0">Surabaya</p>
                <p class="card-text m-0">Indonesia</p>
            </div>
        </footer>
    `;
  }
}

customElements.define('end-bar', EndBar);
