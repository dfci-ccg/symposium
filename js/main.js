function loadPartial(selector, partial) {
  return new Promise((resolve) =>
    $(selector).load(`/partials/${partial}`, resolve)
  );
}

const navLoaded = loadPartial('#nav-container', 'nav.html');
const bannerLoaded = loadPartial('#banner-container', 'banner.html');

/**
 * All dynamic filling should be done on this file in order to not have race conditions.
 */
Promise.all([navLoaded, bannerLoaded]).then(() => {
  $('.deadline-day').html(day);
  $('.deadline-year').html(deadline.getFullYear());
});
