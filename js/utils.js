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
