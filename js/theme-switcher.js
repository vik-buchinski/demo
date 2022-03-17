'use strict';

const darkThemeBtn = document.getElementById('darkThemeBtn');
darkThemeBtn.addEventListener('click', switchToDarkTheme);

function switchToDarkTheme() {
  const body = document.getElementsByTagName('body');
  if (body && body.length === 1) {
    body[0].className = 'dark-theme';
  } else {
    console.log('failed to get body tag from the document');
  }
}

const lightThemeBtn = document.getElementById('lightThemeBtn');
lightThemeBtn.addEventListener('click', switchToLightTheme);

function switchToLightTheme() {
  const body = document.getElementsByTagName('body');
  if (body && body.length === 1) {
    body[0].className = '';
  } else {
    console.log('failed to get body tag from the document');
  }
}
