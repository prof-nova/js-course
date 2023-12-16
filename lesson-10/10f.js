function toggler(functional) {
  const button = document.querySelector(functional);
  if (!button.classList.contains('alt-button')) {
    button.classList.add('alt-button')
  } else {
    button.classList.remove('alt-button')
  }
}