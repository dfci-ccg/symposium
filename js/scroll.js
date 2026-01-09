window.onscroll = function () {
  // if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //   document.getElementById('scroll-button').style.display = 'block';
  // } else {
  //   document.getElementById('scroll-button').style.display = 'none';
  // }
};


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

appendPartial('body', 'scroll.html');