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
    loadConstants();
    loadHrefs();

    // Webcast buttons
    $('button.morning-webcast').prop('disabled', true);
    $('button.morning-webcast').on('click', () => {
      window.location.href = MORNING_WEBCAST_HREF;
    });
    
    $('button.afternoon-webcast').prop('disabled', true);
    $('button.afternoon-webcast').on('click', () => {
      window.location.href = AFTERNOON_WEBCAST_HREF;
    });

    showHTMLBody();
  });

function enableWebcasts() {
  const now = new Date();
  if (now >= MORNING_WEBCAST_DEADLINE) {
    $('button.morning-webcast').prop('disabled', false);
  }
  if (now >= AFTERNOON_WEBCAST_HREF) {
    $('button.afternoon-webcast').prop('disabled', false);
  }
}

let enableButtons = setInterval(enableWebcasts, 400);
