/**
 * Preload script for sponser page.
 */
Promise.all([])
  .then(() => {
    return loadSequentially(
      GOLD_SPONSORS.map(({ name, img, link }) => {
        return () =>
          appendPartial('.gold .sponsor-list', 'sponsor.html', ($linkEl) => {
            $linkEl.attr('href', link);
            $imgEl = $linkEl.find('img');
            $imgEl.attr('src', `img/sponsor/${img}`);
            $imgEl.width(GOLD_WIDTH);
            $imgEl.attr('alt', name);
          });
      })
    );
  })
  .then(() => {
    return loadSequentially(
      SILVER_SPONSORS.map(({ name, img, link }) => {
        return () =>
          appendPartial('.silver .sponsor-list', 'sponsor.html', ($linkEl) => {
            $linkEl.attr('href', link);
            $imgEl = $linkEl.find('img');
            $imgEl.attr('src', `img/sponsor/${img}`);
            $imgEl.width(SILVER_WIDTH);
            $imgEl.attr('alt', name);
          });
      })
    );
  })
  .then(() => {
    loadConstants();
    loadHrefs();
    showHTMLBody();
  });
