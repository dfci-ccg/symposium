// When the user clicks on the button, scroll to the top of the document
function onClickHandler() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const scrollLoaded = appendPartial('body', 'scroll.html');
Promise.all([scrollLoaded]).then(() => {
  $('#scroll-button').click(onClickHandler);
})
