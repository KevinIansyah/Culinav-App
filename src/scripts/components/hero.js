class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="hero" tabindex="0">
          <picture>
            <source type="image/webp" media="(max-width: 600px)" srcset="./images/hero-image_2-small.webp">
            <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
            <source type="image/webp" media="(max-width: 600px)" srcset="./images/hero-image_2-large.webp">
            <img class="hero__image"  src="./images/hero-image_2-large.jpg" alt="Gambar jumbotron.">
          </picture>
          <div class="overlay">
            <h1>CULINAV</h1>
            <h2>CULINARY NAVIGATION</h2>
            <p>
                Culinav adalah sebuah platform daring yang didedikasikan untuk
                pencinta kuliner. Ini adalah tempat di mana Anda dapat menemukan
                informasi tentang berbagai restoran, kafe, dan tempat makan lainnya
                di berbagai kota dan daerah.
            </p>
          </div>
        </section>
    `;
  }
}

customElements.define('hero-section', Hero);
