/**
 * Loads in navigation bar.
 */
const navLoaded = prependPartial('body', 'nav.html');
const footerLoaded = loadPartial('#footer-container', 'footer.html');

Promise.all([navLoaded, footerLoaded]).then(() => {
  loadConstants();
  loadHrefs();
  $('.sidenav').sidenav();
});