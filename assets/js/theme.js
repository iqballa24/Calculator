/* eslint-disable linebreak-style */
function switchTheme() {
  const light = document.querySelector('#light');
  const dark = document.querySelector('#dark');

  light.classList.toggle('active');
  dark.classList.toggle('active');

  if (light.classList.toggle('light')) {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

function themeOnStorage() {
  const currentTheme = localStorage.getItem('theme');
  const light = document.querySelector('#light');
  const dark = document.querySelector('#dark');

  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'light') {
    light.classList.add('active', 'light');
    dark.classList.remove('active');
  } else {
    light.classList.remove('active');
    dark.classList.add('active');
  }
}

export { switchTheme, themeOnStorage };
