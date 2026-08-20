document.addEventListener('DOMContentLoaded', () => {
  const portraits = document.querySelectorAll('.bio-photo.portrait');
  if (!portraits.length) return;

  let portraitImage = '';
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules || []) {
        if (rule.selectorText === '.bio-photo.portrait' && rule.style.backgroundImage && rule.style.backgroundImage.includes('data:image')) {
          portraitImage = rule.style.backgroundImage;
          break;
        }
      }
    } catch (_) {
      // Cross-origin stylesheets such as Google Fonts are intentionally skipped.
    }
    if (portraitImage) break;
  }

  if (!portraitImage) return;
  portraits.forEach((el) => {
    el.style.setProperty('background-image', portraitImage, 'important');
    el.style.setProperty('background-size', 'cover', 'important');
    el.style.setProperty('background-position', 'center top', 'important');
    el.style.setProperty('background-repeat', 'no-repeat', 'important');
  });
});
