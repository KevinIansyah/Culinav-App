import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/notification.css';
import './components/navbar';
import './components/footer';
import './components/hero';
import './components/subcribe';
import { removeNotification } from './utils/notification-initiator';
import skipContentInitiator from './utils/skip-content-initiator';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  hamburgerButton: document.querySelector('.toggle__menu'),
  dropdownMenu: document.querySelector('.dropdown__menu'),
  toggleButtonIcon: document.querySelector('.toggle__menu i'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  skipContentInitiator();
  app.renderPage();
  swRegister();

  const notifications = document.querySelector('.notifications');
  notifications.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-xmark')) {
      removeNotification(event.target.parentElement);
    }
  });
});
