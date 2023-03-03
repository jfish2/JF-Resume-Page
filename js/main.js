const root = document.documentElement // or document.querySelector(':root');
//initially set to light mode
//let mode = 'light';
setInitialModeFromLocalStorage(); // gets mode from browser's local storage to ensure that page reload doesn't reset mode or light mode if no value
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

function toggleMode() {
  const storedMode = localStorage.getItem('storedTheme')
  console.log(storedMode);
  console.log('toggling mode');
  if (storedMode === 'light') {
    document.documentElement.style
      .setProperty('--mainBgColor', backgroundDark);
    document.documentElement.style
      .setProperty('--mainBorderColor', borderDark);
    document.documentElement.style
      .setProperty('--mainLinkColor', mainLinkDark);
    document.documentElement.style
      .setProperty('--mainTextColor', mainTextDark);
    document.documentElement.style
      .setProperty('--secondaryTextColor', secondaryTextDark);

    localStorage.setItem('storedTheme', 'dark');
   // mode = 'dark';
  } else {
    document.documentElement.style
      .setProperty('--mainBgColor', backgroundLight);
    document.documentElement.style
      .setProperty('--mainBorderColor', borderLight);
    document.documentElement.style
      .setProperty('--mainLinkColor', mainLinkLight);
    document.documentElement.style
      .setProperty('--mainTextColor', mainTextLight);
    document.documentElement.style
      .setProperty('--secondaryTextColor', secondaryTextLight);

    localStorage.setItem('storedTheme', 'light');
   // mode = 'light'
  }
  //setCurrentModeInLocalStorage(mode);
}

  function setCurrentModeInLocalStorage(mode) {
    let storedTheme = localStorage.getItem(mode);
    if (!storedTheme) {
      storedTheme = 'light';
      localStorage.setItem('storedTheme', 'light');
    }
    else if (storedTheme === 'light') {
      localStorage.setItem('storedTheme', 'dark');
    } else if (storedTheme === 'dark') {
      localStorage.setItem('storedTheme', 'light');
    }
  }

  function setInitialModeFromLocalStorage() {
    let storedTheme = localStorage.getItem(current);
    if (!storedTheme) {
      storedTheme = 'light';
      localStorage.setItem('storedTheme', 'light');
    }
  }

