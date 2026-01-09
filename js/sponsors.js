Promise.all([])
  .then(() => {
    return loadSequentially(
      GOLD_SPONSORS.map(({ name, img }) => {
        return () =>
          appendPartial('.gold .sponsor-list', 'sponsor.html', ($imgEl) => {
            $imgEl.attr('src', `img/sponsor/${img}`);
            $imgEl.width(GOLD_WIDTH);
            $imgEl.attr('alt', name);
          });
      })
    );
  })
  .then(() => {
    return loadSequentially(
      SILVER_SPONSORS.map(({ name, img }) => {
        return () =>
          appendPartial('.silver .sponsor-list', 'sponsor.html', ($imgEl) => {
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
