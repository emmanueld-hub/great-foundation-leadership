document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.bio-photo.portrait').forEach((el) => {
    el.style.setProperty('background-image', "url('/images/emmanuel-s-desmolieres.jpg')", 'important');
    el.style.setProperty('background-size', 'cover', 'important');
    el.style.setProperty('background-position', 'center top', 'important');
    el.style.setProperty('background-repeat', 'no-repeat', 'important');
  });
});
