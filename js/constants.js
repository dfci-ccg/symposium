function formatDateWithOrdinal(date) {
  const day = date.getDate();

  let suffix = 'th';
  if (day % 10 === 1 && day !== 11) suffix = 'st';
  else if (day % 10 === 2 && day !== 12) suffix = 'nd';
  else if (day % 10 === 3 && day !== 13) suffix = 'rd';

  return `${day}${suffix}`;
}
function formatOnlyMonthDay(date) {
  const day = formatDateWithOrdinal(date);
  const month = date.toLocaleString('en-US', { month: 'long' });

  return `${month} ${day}`;
}
function formatFullDate(date) {
  const year = date.getFullYear();

  return `${formatOnlyMonthDay(date)}, ${year}`;
}
function addMinutesAndFormat(date, minutesToAdd) {
  const d = new Date(date.getTime());
  d.setMinutes(d.getMinutes() + minutesToAdd);

  return d.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

const DEADLINE_DATE = new Date(`March 20, 2026 08:30:00`);
const DEADLINE_DATE_STRING = formatFullDate(DEADLINE_DATE);
/**
 * Only contains month and day
 */
const DEADLINE_SHORT_DATE_STRING = formatOnlyMonthDay(DEADLINE_DATE);
const LIVESTREAM_TIME = addMinutesAndFormat(DEADLINE_DATE, 30);
const LOCATION = 'Jimmy Fund Auditorium';
const LOCATION_ADDRESS = '35 Binney Street, Boston, MA 02115';

/**
 * Links
 */
const ABOUT_HREF =
  'https://www.dana-farber.org/research/departments-centers-and-labs/integrative-research-centers/center-for-cancer-genome-discovery/';
const REGISTRATION_HREF = 'https://forms.gle/ZCZWY65VEQ45zsNp6';
const AGENDA_HREF = `agendas/${DEADLINE_DATE.getFullYear()}.pdf`;
const MORNING_WEBCAST_HREF = 'https://mgb.mediasite.com/Mediasite/Play/ee63982960824edea40b96ac3d02db481d';
const AFTERNOON_WEBCAST_HREF = 'https://mgb.mediasite.com/Mediasite/Play/c2aad827cf2e42a1b807b1b274abc6b21d';

/**
 * Speakers
 */
const KEYNOTE_SPEAKERS = [
  {
    name: 'Fei Chen, PhD',
    title:
      'Associate Professor, Department of Stem Cell and Regenerative Biology ',
    institute: 'Broad Institute; Harvard University',
    img: 'img/guests/chen.png',
  },
  {
    name: 'Alice Shaw, MD, PhD',
    title: 'Chief, Strategic Partnerships ',
    institute: 'Dana-Farber Cancer Institute',
    img: 'img/guests/shaw.jpg',
  },
];
