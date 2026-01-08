const navLoaded = loadPartial('#nav-container', 'nav.html');
const bannerLoaded = loadPartial('#banner-container', 'banner.html');
const footerLoaded = loadPartial('#footer-container', 'footer.html');

/**
 * All dynamic filling should be done on this file in order to not have race conditions.
 */
Promise.all([navLoaded, bannerLoaded, footerLoaded])
  .then(() => {
    return Promise.all(
      KEYNOTE_SPEAKERS.map(({ img, institute, name, title }) =>
        appendPartial('#keynote-speakers-container', 'keynote.html', ($el) => {
          $el.find('.speaker').text(name);
          const formattedTitle = Array.isArray(title) ? title.join('<br/>') : title;
          $el.find('.title').html(formattedTitle);
          $el.find('.institute').text(institute);
          $el.find('img.keynote-speaker').attr('src', img);
        })
      )
    );
  })
  .then(() => {
    return Promise.all(
      VIGNETTE_SPEAKERS.map(({ institute, name, title }) =>
        appendPartial('#clinical-vignettes-container', 'speaker.html', ($el) => {
          $el.find('.name').text(name);
          $el.find('.title').text(title);
          $el.find('.institute').text(institute);
        })
      )
    );
  })
  .then(() => {
    return Promise.all(
      STUDIES_SPEAKERS.map(({ institute, name, title }) =>
        appendPartial('#research-studies-container', 'speaker.html', ($el) => {
          $el.find('.name').text(name);
          $el.find('.title').text(title);
          $el.find('.institute').text(institute);
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
