/**
 * Loads in HTML partials.
 */
// async function loadPartial(selector, url) {
//   const res = await fetch(url);
//   const partialHTML = await res.text();
//   alert('hfdskl')
//   alert(partialHTML);
//   $(selector).html(partialHTML)
// }

$(function() {
  alert('hi')
  $("#nav-container").load("/partials/nav.html");

})
