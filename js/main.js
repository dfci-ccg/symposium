function loadPartial(selector, partial) {
  return new Promise((resolve) =>
    $(selector).load(`/partials/${partial}`, resolve)
  );
}
/**
 * Gives callback to easily inject into the the partial html
 * @param {*} selector
 * @param {*} partial
 * @param {*} callback
 * @returns
 */
function appendPartial(selector, partial, callback) {
  return new Promise((resolve, reject) => {
    $.get(`/partials/${partial}`)
      .done((html) => {
        const $el = $(html);
        if (callback) {
          callback($el);
        }
        $(selector).append($el);
        resolve();
      })
      .fail(reject);
  });
}

const navLoaded = loadPartial('#nav-container', 'nav.html');
const bannerLoaded = loadPartial('#banner-container', 'banner.html');

/**
 * All dynamic filling should be done on this file in order to not have race conditions.
 */
Promise.all([navLoaded, bannerLoaded])
  .then(() => {
    return Promise.all(
      KEYNOTE_SPEAKERS.map(({ img, institute, name, title }) =>
        appendPartial('#keynote-speakers-container', 'keynote.html', ($el) => {
          $el.find('.speaker').text(name);
          $el.find('.title').text(title);
          $el.find('.institute').text(institute);
          $el.find('img.keynote-speaker').attr('src', img);
        })
      )
    );
  })
  .then(() => {
    $('.deadline-day').html(DEADLINE_DATE_STRING);
    $('.deadline-short-day').html(DEADLINE_SHORT_DATE_STRING);
    $('.deadline-year').html(DEADLINE_DATE.getFullYear());
    $('.location').html(LOCATION);
    $('.location-address').html(LOCATION_ADDRESS);
    $('.livestream-time').html(LIVESTREAM_TIME);
    // Href fill in
    $('a.registration').attr('href', REGISTRATION_HREF);
    $('a.agenda').attr('href', AGENDA_HREF);
    $('a.about').attr('href', ABOUT_HREF);
  });
