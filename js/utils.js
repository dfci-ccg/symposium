function ordinal(n) {
  var s = ["th", "st", "nd", "rd"];
  var v = n%100;
  return n + (s[(v-20)%10] || s[v] || s[0]);
}
function formatLuxonMonthDayWithOrdinal(luxon_dt) {
  const monthDay = luxon_dt.toFormat('MMMM ') + ordinal(luxon_dt.day)
  return monthDay
}
function formatLuxonFullDateWithOrdinal(luxon_dt) {
  return formatLuxonMonthDayWithOrdinal(luxon_dt) + luxon_dt.toFormat(', yyyy')
}

/**
 * Adds minutes to the luxon datetime and then returns a formatted string of the time.
 * @param {*} luxon_dt 
 * @param {*} minutesToAdd 
 * @returns 
 */
function formatLuxonTime(luxon_dt, minutesToAdd) {
  return luxon_dt.plus({ minutes: minutesToAdd }).toFormat('h:mm a');
}

function formatDateWithOrdinal(date) {
  const day = date.getDate();

  return ordinal(day)
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

/**
 * Loads partial html. Note that if element doesn't exist, this will just resolve
 * @param {*} selector
 * @param {*} partial
 * @returns
 */
function loadPartial(selector, partial) {
  return new Promise((resolve) => {
    const $el = $(selector);

    if (!$el.length) {
      resolve();
      return;
    }

    $el.load(`./partials/${partial}`, resolve);
  });
}
/**
 * Gives callback to easily inject into the the partial html.
 *
 * If element cannot be injected, a warning log is instead placed
 * @param {*} selector
 * @param {*} partial
 * @param {*} callback
 * @returns
 */
function appendPartial(selector, partial, callback) {
  return new Promise((resolve, reject) => {
    $.get(`partials/${partial}`)
      .done((html) => {
        const $el = $(html);
        if (callback) {
          callback($el);
        }
        if (!$(selector).length) {
          console.warn(`cannot find selector: '${selector}'`);
          resolve();
          return;
        }
        $(selector).append($el);
        resolve();
      })
      .fail(reject);
  });
}
/**
 * Similar to append partial, but instead prepends partial HTML
 * @param {*} selector 
 * @param {*} partial 
 * @param {*} callback 
 * @returns 
 */
function prependPartial(selector, partial, callback) {
  return new Promise((resolve, reject) => {
    $.get(`partials/${partial}`)
      .done((html) => {
        const $el = $(html);
        if (callback) {
          callback($el);
        }
        if (!$(selector).length) {
          console.warn(`cannot find selector: '${selector}'`);
          resolve();
          return;
        }
        $(selector).prepend($el);
        resolve();
      })
      .fail(reject);
  });
}

/**
 * Loads the values of constants into the css classes
 */
function loadConstants() {
  $('.deadline-day').html(DEADLINE_DATE_STRING);
  $('.deadline-short-day').html(DEADLINE_SHORT_DATE_STRING);
  $('.deadline-year').html(DEADLINE_DT.toFormat('yyyy'));
  $('.location').html(LOCATION);
  $('.location-address').html(LOCATION_ADDRESS);
  $('.livestream-time').html(LIVESTREAM_TIME);
}

/**
 * Loads in href
 */
function loadHrefs() {
  $('a.registration').attr('href', REGISTRATION_HREF);
  $('a.agenda').attr('href', AGENDA_HREF);
  $('a.about').attr('href', ABOUT_HREF);
}

/**
 * Because we dynamically load in the elements this can be result in a flashing motion
 * as a result to temper this we can just hide the body until we want to show it.
 * 
 * I would recommend calling this at the end of a longer load.
 */
function showHTMLBody() {
  $('body').addClass('loaded');
}

async function loadSequentially(tasks) {
  for (const task of tasks) {
    await task(); 
  }
}
