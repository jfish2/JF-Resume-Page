const root = document.documentElement // or document.querySelector(':root');
//initially grab from local storage or set to light mode
const storedMode = getInitialMode(); // gets mode from browser's local storage to ensure that page reload doesn't reset mode or light mode if no value

let backgroundLight = getComputedStyle(root).getPropertyValue("--mainBgColor-light");
let mainTextLight = getComputedStyle(root).getPropertyValue("--mainTextColor-light");
let secondaryTextLight = getComputedStyle(root).getPropertyValue("--secondaryTextColor-light");
let mainLinkLight = getComputedStyle(root).getPropertyValue("--mainLinkColor-light");
let borderLight = getComputedStyle(root).getPropertyValue("--mainBorderColor-light");

let backgroundDark = getComputedStyle(root).getPropertyValue("--mainBgColor-dark");
let mainTextDark = getComputedStyle(root).getPropertyValue("--mainTextColor-dark");
let secondaryTextDark = getComputedStyle(root).getPropertyValue("--secondaryTextColor-dark");
let mainLinkDark = getComputedStyle(root).getPropertyValue("--mainLinkColor-dark");
let borderDark = getComputedStyle(root).getPropertyValue("--mainBorderColor-dark");

const colorModeButton = document.querySelector('#toggle');
colorModeButton.addEventListener('click',toggleMode);


if (storedMode === 'dark') {
  setDarkMode();
} else {
  setLightMode();
}

function setDarkMode() {
  root.style
    .setProperty('--mainBgColor', backgroundDark);
  root.style
    .setProperty('--mainBorderColor', borderDark);
  root.style
    .setProperty('--mainLinkColor', mainLinkDark);
  root.style
    .setProperty('--mainTextColor', mainTextDark);
  root.style
    .setProperty('--secondaryTextColor', secondaryTextDark);
}

function setLightMode() {
  root.style
    .setProperty('--mainBgColor', backgroundLight);
  root.style
    .setProperty('--mainBorderColor', borderLight);
  root.style
    .setProperty('--mainLinkColor', mainLinkLight);
  root.style
    .setProperty('--mainTextColor', mainTextLight);
  root.style
    .setProperty('--secondaryTextColor', secondaryTextLight);
}

function toggleMode() {
  const storedMode = localStorage.getItem('storedMode')
  console.log(storedMode);
  console.log('toggling mode');
  if (storedMode === 'light') {
    setDarkMode();
    localStorage.setItem('storedMode', 'dark');
  } else {
   setLightMode();
   localStorage.setItem('storedMode', 'light');
  }
}

function getInitialMode() {
    let storedMode = localStorage.getItem('storedMode');
    if (!storedMode) {
      storedMode = 'light';
      localStorage.setItem('storedMode', 'light');
    }
    return storedMode;
  }

