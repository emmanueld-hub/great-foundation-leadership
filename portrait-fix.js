document.addEventListener('DOMContentLoaded', async () => {
  const portraits = document.querySelectorAll('.bio-photo.portrait');
  if (!portraits.length) return;

  try {
    const response = await fetch('/overrides.css', { cache: 'no-store' });
    if (!response.ok) throw new Error(`CSS request failed: ${response.status}`);
    const css = await response.text();
    const match = css.match(/data:image\/jpeg;base64,[A-Za-z0-9+/=]+/);
    if (!match) throw new Error('Embedded portrait not found');

    const portraitUrl = `url("${match[0]}")`;
    portraits.forEach((el) => {
      el.style.setProperty('min-height', '420px', 'important');
      el.style.setProperty('background-image', portraitUrl, 'important');
      el.style.setProperty('background-size', 'cover', 'important');
      el.style.setProperty('background-position', 'center top', 'important');
      el.style.setProperty('background-repeat', 'no-repeat', 'important');
    });
  } catch (error) {
    console.error('Portrait render failed', error);
  }
});
