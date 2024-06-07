// Get buttons on init
const buttons = [...document.querySelectorAll('[data-tab-controls]')];
const tabs = [...document.querySelectorAll('[data-tab-index]')];

// Add event listen to each button
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const index = button.getAttribute('data-tab-controls');

    // Toggle button active class
    buttons.forEach((button) => button.classList.remove('active'));
    button.classList.add('active');

    // Toggle body active class
    tabs.forEach((tab) => tab.classList.remove('active'));
    document.querySelector(`[data-tab-index="${index}"]`).classList.add('active');
  });
});
