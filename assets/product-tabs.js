const buttons_container = document.querySelector('[data-name="tabs-buttons"]');
const buttons = buttons_container.querySelectorAll('[data-name="tabs-button"]');
const underline = document.querySelector('.underline');

buttons_container.addEventListener('click', (event) => {
  if (event.target.closest('[data-name="tabs-button"]')) {
    // set active button
    buttons.forEach((button) => {
      button.classList.remove('active');
    });
    event.target.closest('[data-name="tabs-button"]').classList.add('active');
    // set underline

    const activeButton = event.target;
    if (activeButton) {
      const buttonRect = activeButton.getBoundingClientRect();
      const containerRect = activeButton.parentElement.getBoundingClientRect();
      underline.style.width = `${buttonRect.width}px`;
      underline.style.left = `${buttonRect.left - containerRect.left}px`;
    }
    // set tabs body
    const tab = event.target.closest('[data-name="tabs-button"]').getAttribute('data-index');
    const tabs = document.querySelectorAll('[data-name="tab"]');
    tabs.forEach((tab) => {
      tab.classList.remove('active');
    });
    document.querySelector(`.tabs-body[data-index="${tab}"]`).classList.add('active');
  }
});

function initiateUnderline() {
  const buttonRect = document.querySelector('button[data-index="1"]').getBoundingClientRect();
  const containerRect = document.querySelector('button[data-index="1"]').parentElement.getBoundingClientRect();
  underline.style.width = `${buttonRect.width}px`;
  underline.style.left = `${buttonRect.left - containerRect.left}px`;
}

initiateUnderline();
