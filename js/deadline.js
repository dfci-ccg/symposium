/**
 * Adds left padding of 0s to dates components.
 * @param {*} num
 * @returns
 */
function lpadDate(num) {
  return num.toString().padStart(2, '0');
}

function calculateDeadline() {
  let now = new Date().getTime();
  let t = DEADLINE_DATE.getTime() - now;

  // Check if the deadline has passed
  if (t < 0) {
    clearInterval(x); // Stop the countdown
    // Set all time units to 0 if the deadline has passed
    $('#day').html(lpadDate(0));
    $('#hour').html(lpadDate(0));
    $('#minute').html(lpadDate(0));
  } else {
    // Calculate days, hours, minutes, and seconds if the deadline has not passed
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    // let seconds = Math.floor((t % (1000 * 60)) / 1000);

    // Update countdown display
    $('#day').html(lpadDate(days));
    $('#hour').html(lpadDate(hours));
    $('#minute').html(lpadDate(minutes));
    // $('#second').html(lpadDate(seconds));
  }
}
let x = setInterval(calculateDeadline, 400);
$(function () {
  calculateDeadline();
})
