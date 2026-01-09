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
const MORNING_WEBCAST = false;
const AFTERNOON_WEBCAST = false;

const MORNING_WEBCAST_HREF =
  'https://mgb.mediasite.com/Mediasite/Play/ee63982960824edea40b96ac3d02db481d';
const AFTERNOON_WEBCAST_HREF =
  'https://mgb.mediasite.com/Mediasite/Play/c2aad827cf2e42a1b807b1b274abc6b21d';

/**
 * Speakers
 */
const KEYNOTE_SPEAKERS = [
  {
    name: 'Neal Lindeman, MD',
    title: [
      'Faculty Distinguished Professor (II) of Pathology',
      'Vice Chair, Laboratory Medicine and Molecular Pathology',
      'Department of Pathology and Laboratory Medicine',
    ],
    institute: 'Weill Cornell Medicine/New York Presbyterian Hospital',
    img: 'img/guests/lindeman.jpg',
  },
  {
    name: 'Faisal Mahmood, PhD',
    title: 'Associate Professor of Pathology',
    institute: 'Harvard Medical School, BWH, DFCI/Harvard Cancer Center',
    img: 'img/guests/mahmood.jpg',
  },
];

const VIGNETTE_SPEAKERS = [
  {
    name: 'Franziska Wachter, MD',
    title:
      'Instructor of Pediatrics; Attending Physician, Pediatric Stem Cell Transplant',
    institute: 'HMS, BCH, DFCI',
  },
  {
    name: 'Alok Tewari, MD, PhD',
    title: 'Assistant Professor of Medicine',
    institute: 'HMS, DFCI',
  },
  {
    name: 'Kristina Fanucci, MD',
    title: 'Instructor in Medicine',
    institute: 'HMS, DFCI',
  },
  {
    name: 'Charlene Mantia, MD',
    title: 'Instructor in Medicine, Genitourinary Medical Oncologist',
    institute: 'HMS, DFCI',
  },
];

const STUDIES_SPEAKERS = [
  {
    name: 'Pratiti (Mimi) Bandopadhayay, MBBS, PhD',
    title: 'Associate Professor of Pediatrics',
    institute: 'HMS, DFCI',
  },
  {
    name: 'Kornelia Polyak, MD, PhD',
    title: 'Professor of Medicine',
    institute: 'HMS, DFCI',
  },
  {
    name: 'Kartik Sehgal, MD',
    title: 'Assistant Professor of Medicine',
    institute: 'HMS, DFCI',
  },
  {
    name: 'Mark Murakami, MD',
    title: 'Assistant Professor of Medicine',
    institute: 'HMS, DFCI',
  },
  {
    name: 'Netta Makinen, PhD',
    title: 'Instructor in Medicine',
    institute: 'HMS, DFCI',
  },
  {
    name: 'Volker Hovestadt, PhD',
    title: 'Assistant Professor of Pediatrics',
    institute: 'HMS, DFCI',
  },
  {
    name: 'David Shulman, MD',
    title:
      'Assistant Professor of Pediatrics; Attending Physician, Pediatric Oncology (Sarcoma)',
    institute: 'HMS, DFCI',
  },
];

const GOLD_SPONSORS = [
  { name: 'idt', img: 'idt.png' },
  { name: 'ultima', img: 'ultima.png' },
  { name: 'illumina', img: 'illumina.png' },
  { name: 'roche', img: 'roche.png' },
];
const GOLD_WIDTH = '250px';

const SILVER_SPONSORS = [
  { name: 'miltenyi', img: 'miltenyi.png' },
  { name: 'covaris', img: 'covaris.png' },
  { name: 'neb', img: 'neb.png' },
];
const SILVER_WIDTH = '180px';
