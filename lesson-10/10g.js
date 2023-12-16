/*
function toggler(functional) {
  const button = document.querySelector(functional);
  if (!button.classList.contains('alt-button')) {
    switcher();
    button.classList.add('alt-button');
  } else {
    button.classList.remove('alt-button');
  }
}

function switcher (){
  const switchOff = document.querySelector('.alt-button');
  if (switchOff){
    switchOff.classList.remove('alt-button');
  }
    
}

*/

// The word "toggle" means turn on/off.
function toggler(functional) {
  const button = document.querySelector(functional);
  if (!button.classList.contains('alt-button')) {

    // Before turning this button ON, check if there's
    // already a button that's turned ON and turn it OFF.
    turnOffPreviousButton();

    button.classList.add('alt-button');
  } else {
    button.classList.remove('alt-button');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.alt-button');
  if (previousButton) {
    previousButton.classList.remove('alt-button');
  }
}