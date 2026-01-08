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
  $('.deadline-day').html(DEADLINE_DATE_STRING);
  $('.deadline-short-day').html(DEADLINE_SHORT_DATE_STRING);
  $('.deadline-year').html(DEADLINE_DATE.getFullYear());
  $('.location').html(LOCATION);
  $('.location-address').html(LOCATION_ADDRESS);
  $('.livestream-time').html(LIVESTREAM_TIME);
});
