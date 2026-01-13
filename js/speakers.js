const bannerLoaded = loadPartial('#banner-container', 'banner.html');

/**
 * All dynamic filling should be done on this file in order to not have race conditions.
 */
Promise.all([bannerLoaded])
  .then(() => {
    return loadSequentially(
      KEYNOTE_SPEAKERS.map(
        ({ img, institute, name, title }) =>
          () =>
            appendPartial(
              '#keynote-speakers-container',
              'keynote.html',
              ($el) => {
                $el.find('.speaker').text(name);
                const formattedTitle = Array.isArray(title)
                  ? title.join('<br/>')
                  : title;
                $el.find('.title').html(formattedTitle);
                $el.find('.institute').text(institute);
                $el.find('img.keynote-speaker').attr('src', img);
              }
            )
      )
    );
  })
  .then(() => {
    return loadSequentially(
      VIGNETTE_SPEAKERS.map(
        ({ institute, name, title }) =>
          () =>
            appendPartial(
              '#clinical-vignettes-container',
              'speaker.html',
              ($el) => {
                $el.find('.name').text(name);
                $el.find('.title').text(title);
                $el.find('.institute').text(institute);
              }
            )
      )
    );
  })
  .then(() => {
    return loadSequentially(
      STUDIES_SPEAKERS.map(
        ({ institute, name, title }) =>
          () =>
            appendPartial(
              '#research-studies-container',
              'speaker.html',
              ($el) => {
                $el.find('.name').text(name);
                $el.find('.title').text(title);
                $el.find('.institute').text(institute);
              }
            )
      )
    );
  })
  .then(() => {
    loadConstants();
    loadHrefs();
    showHTMLBody();
  });
