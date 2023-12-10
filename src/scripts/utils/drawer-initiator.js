/* eslint-disable no-param-reassign */
const DrawerInitiator = {
  init({
    hamburgerButton, dropdownMenu, toggleButtonIcon, content,
  }) {
    hamburgerButton.addEventListener('click', (event) => {
      this._toggleDrawer({ event, dropdownMenu, toggleButtonIcon });
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer({
        event, hamburgerButton, dropdownMenu, toggleButtonIcon,
      });
    });
  },

  _toggleDrawer({ event, dropdownMenu, toggleButtonIcon }) {
    event.stopPropagation();
    dropdownMenu.classList.toggle('active');

    const isActive = dropdownMenu.classList.contains('active');
    toggleButtonIcon.classList = isActive
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars';
  },

  _closeDrawer({
    event, hamburgerButton, dropdownMenu, toggleButtonIcon,
  }) {
    event.stopPropagation();
    if (
      !dropdownMenu.contains(event.target)
      && !hamburgerButton.contains(event.target)
    ) {
      dropdownMenu.classList.remove('active');
      toggleButtonIcon.classList = 'fa-solid fa-bars';
    }
  },
};

export default DrawerInitiator;
