function formatDateWithOrdinal(date) {
  const day = date.getDate();

  let suffix = "th";
  if (day % 10 === 1 && day !== 11) suffix = "st";
  else if (day % 10 === 2 && day !== 12) suffix = "nd";
  else if (day % 10 === 3 && day !== 13) suffix = "rd";

  return `${day}${suffix}`;
}
function formatFullDate(date) {
  const day = formatDateWithOrdinal(date);
  const month = date.toLocaleString("en-US", { month: "long" });
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

const day = 'March 20, 2026';
const time = '08:30:00';
const DEADLINE_DATE = new Date(`${day} ${time}`);
const DEADLINE_DATE_STRING = formatFullDate(DEADLINE_DATE);
const LOCATION = "Jimmy Fund Auditorium";
const LOCATION_ADDRESS = "35 Binney Street, Boston, MA 02115";
