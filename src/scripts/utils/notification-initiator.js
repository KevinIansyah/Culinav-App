const notifications = document.querySelector('.notifications');

const notificationDetails = {
  timer: 5000,
  success: {
    icon: 'fa-circle-check',
  },
  error: {
    icon: 'fa-circle-xmark',
  },
  warning: {
    icon: 'fa-triangle-exclamation',
  },
  info: {
    icon: 'fa-circle-info',
  },
};

const removeNotification = (toast) => {
  toast.classList.add('hide');
  if (toast.timeoutId) clearTimeout(toast.timeoutId);
  setTimeout(() => toast.remove(), 500);
};

const createNotification = (id, text) => {
  const { icon } = notificationDetails[id];
  const toast = document.createElement('li');
  toast.className = `toast ${id}`;

  toast.innerHTML = `<div class="column">
                        <i class="fa-solid ${icon}"></i>
                        <span>${text}</span>
                    </div>
                    <i class="fa-solid fa-xmark"></i>`;
  if (notifications) {
    notifications.appendChild(toast);
  }

  toast.timeoutId = setTimeout(
    () => removeNotification(toast),
    notificationDetails.timer
  );
};

export { createNotification, removeNotification };
