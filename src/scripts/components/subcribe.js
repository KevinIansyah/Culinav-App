class Subcribe extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="subcribe">
            <picture>
              <source type="image/webp" media="(max-width: 600px)" srcset="./images/subcribe4-small.webp">
              <source type="image/jpeg" media="(max-width: 600px)" srcset="./images/subcribe4-small.jpg">
              <source type="image/webp" media="(max-width: 600px)" srcset="./images/subcribe4-large.webp">
              <img class="hero__image"  src="./images/subcribe4-large.jpg" alt="dirt rally poster">
            </picture>
            <div class="overlay__subcribe">
              <h2 tabindex="0">SUBSCRIBE TO STAY UPDATE</h2>
              <form class="email__box" method="#" action="#">
                  <input
                  class="form__input"
                  type="email"
                  placeholder="Please enter your email address to stay update with our latest information"
                  />
                  <button class="button">Send</button>
              </form>
            </div>
        </section>
    `;
  }
}

customElements.define('subcribe-section', Subcribe);
