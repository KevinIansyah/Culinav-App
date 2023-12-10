import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    hamburgerButton, dropdownMenu, toggleButtonIcon, content,
  }) {
    this._hamburgerButton = hamburgerButton;
    this._dropdownMenu = dropdownMenu;
    this._toggleButtonIcon = toggleButtonIcon;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      hamburgerButton: this._hamburgerButton,
      dropdownMenu: this._dropdownMenu,
      toggleButtonIcon: this._toggleButtonIcon,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}

export default App;
