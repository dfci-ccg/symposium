/**
 * Adds left padding of 0s to dates components.
 * @param {*} num
 * @returns
 */
function lpadDate(num) {
  return Math.floor(num).toString().padStart(2, '0');
}

function calculateDeadline() {
  const diff = DEADLINE_DT.diffNow(['days', 'hours', 'minutes'])
  const passedDeadline = DEADLINE_DT.diffNow('days').toObject().days < 0;

  // Check if the deadline has passed
  if (passedDeadline) {
    clearInterval(deadlineInterval); // Stop the countdown
    // Set all time units to 0 if the deadline has passed
    $('#day').html(lpadDate(0));
    $('#hour').html(lpadDate(0));
    $('#minute').html(lpadDate(0));
  } else {
    // Update countdown display
    $('#day').html(lpadDate(diff.days));
    $('#hour').html(lpadDate(diff.hours));
    $('#minute').html(lpadDate(diff.minutes));
    // $('#second').html(lpadDate(seconds));
  }
}
let deadlineInterval = setInterval(calculateDeadline, 400);
$(function () {
  calculateDeadline();
})
