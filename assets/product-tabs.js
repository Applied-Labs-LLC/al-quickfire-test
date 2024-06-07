const buttons_container = document.querySelector('[data-name="tabs-buttons"]');
const buttons = buttons_container.querySelectorAll('[data-name="tabs-button"]');

buttons_container.addEventListener('click', (event) => {
  if (event.target.closest('[data-name="tabs-button"]')) {
    // set active button
    buttons.forEach((button) => button.classList.remove('active'));
    event.target.closest('[data-name="tabs-button"]').classList.add('active');

    // set tabs body
    document.querySelectorAll('[data-name="tab"]').forEach((tab) => tab.classList.remove('active'));
    const tab = event.target.closest('[data-name="tabs-button"]').getAttribute('data-index');
    document.querySelector(`.tabs-body[data-index="${tab}"]`).classList.add('active');
  }
});
