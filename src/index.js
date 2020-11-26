/* eslint-disable import/extensions */
import { loadCards, loadSection } from './lib/displayvideos.js';
import { element } from './lib/utils.js';

/**
 * upphafsstillir forsiðuna
 * @param {JSON} videodata
 */
function init(videodata) {
  const main = document.querySelector('main');
  const lenCat = videodata.categories.length;
  for (let i = 0; i < lenCat; i += 1) {
    loadSection(videodata.categories[i].title, loadCards(videodata, videodata.categories[i].videos), `section-${i}`);
  }
  const footer = element('footer', { class: 'vidfooter' }, null,
    element('p', null, null, '\u{A9} Fræðslumyndbandaleigan'));
  main.appendChild(footer);
}

/**
 * Fjarlægir skilaboð um að verið sé að hlaða gögnum
 */
function removeLoading() {
  const loadingEl = document.querySelector('.loading');
  loadingEl.parentNode.removeChild(loadingEl);
}

/**
 * Birtir error message sem það fær inn í staðinn fyrir
 *  "Hleður gögnum..." skilaboð sem þegar eru til staðar
 * @param {string} message
 */
function appendError(message) {
  removeLoading();
  const main = document.querySelector('main');
  main.appendChild(element('h1', { class: 'title grid' }, null, message));
}

document.addEventListener('DOMContentLoaded', async () => {
  fetch('../../videos.json')
    .then((res) => {
      if (!res.ok) {
        appendError('Gögn fundust ekki.');
        throw res;
      }
      // komumst bara hingað ef gögn eru í lagi
      removeLoading();
      return res.json();
    })
    .then((data) => {
      init(data);
    });
});
