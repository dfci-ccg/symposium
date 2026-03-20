const { DateTime, Duration, Interval } = luxon;

const DEADLINE_DT = DateTime.fromObject(
  { month: 3, day: 20, year: 2026, hour: 8, minute: 30 },
  { zone: 'America/New_York' },
);

/**
 * Full month + day + Full year string (e.g. March 20th, 2026).
 */
const DEADLINE_DATE_STRING = formatLuxonFullDateWithOrdinal(DEADLINE_DT);
/**
 * Only contains month and day with ordinal suffix (e.g. March 20th)
 */
const DEADLINE_SHORT_DATE_STRING = formatLuxonMonthDayWithOrdinal(DEADLINE_DT);
const LIVESTREAM_TIME = formatLuxonTime(DEADLINE_DT, 30);
const LOCATION = 'Jimmy Fund Auditorium';
const LOCATION_ADDRESS = '35 Binney Street, Boston, MA 02115';

/**
 * Links
 */
const ABOUT_HREF =
  'https://www.dana-farber.org/research/departments-centers-and-labs/integrative-research-centers/center-for-cancer-genome-discovery/';
const REGISTRATION_HREF = 'https://forms.gle/ZCZWY65VEQ45zsNp6';
const AGENDA_HREF = `agendas/${DEADLINE_DT.toFormat('yyyy')}.pdf`;

const MORNING_WEBCAST_HREF =
  'https://mgb.mediasite.com/Mediasite/Play/c563ddf3d6ee4f1f8cd80745f90d448e1d';
const AFTERNOON_WEBCAST_HREF =
  'https://mgb.mediasite.com/Mediasite/Play/ec354e33fafe4e9aaf724cbea207bda31d';
const MORNING_WEBCAST_DEADLINE = DEADLINE_DT.set({hour: 9, minute: 0});
const END_OF_MORNING_SYMPOSIUM_DEADLINE = DEADLINE_DT.set({hour: 12, minute: 0});
const AFTERNOON_WEBCAST_DEADLINE = DEADLINE_DT.set({hour: 13, minute: 0});
const END_OF_SYMPOSIUM_DEADLINE = DEADLINE_DT.set({hour: 16, minute: 40});

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
  { name: 'idt', img: 'idt.png', link: 'https://www.idtdna.com/page' },
  {
    name: 'ultima',
    img: 'ultima.png',
    link: 'https://www.ultimagenomics.com/',
  },
  { name: 'illumina', img: 'illumina.png', link: 'https://www.illumina.com/' },
  { name: 'roche', img: 'roche.png', link: 'https://www.roche.com/' },
  { name: 'takara', img: 'takara.jpg', link: 'https://www.takarabio.com/' },
  { name: 'agilent', img: 'agilent.png', link: 'https://www.agilent.com/' },
];
const GOLD_WIDTH = '250px';

const SILVER_SPONSORS = [
  {
    name: 'miltenyi',
    img: 'miltenyi.png',
    link: 'https://www.miltenyibiotec.com/',
  },
  { name: 'covaris', img: 'covaris.png', link: 'https://www.covaris.com/' },
  { name: 'neb', img: 'neb.png', link: 'https://www.neb.com/' },
  { name: '10x', img: '10x.png', link: 'https://www.10xgenomics.com/' },
  {
    name: 'hamilton',
    img: 'hamilton.jpg',
    link: 'https://www.hamiltoncompany.com/',
  },
  {
    name: 'millipore',
    img: 'millipore.jpg',
    link: 'https://www.sigmaaldrich.com/',
  },
];
const SILVER_WIDTH = '170px';
