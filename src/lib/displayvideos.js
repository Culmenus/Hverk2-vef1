/* eslint-disable import/extensions */
import { element } from './utils.js';
import { lengthOfVid, time } from './calculations.js';

/**
 * Hleður inn spilunum test
 * @param {JSON} videodata
 * @param {Array} arr fylki af ids
 */
export function displayCards(videodata, arr) {
  const children = loadCards(videodata, arr);
  // Reyndist vera nauðsynlegt að gera children[0] i stadinn fyrir null
  // því annars var ekki hægt að appenda.
  const grid = element('div', { class: 'grid' }, null,
    element('div', { class: 'row' }, null, children[0]));
  const main = document.querySelector('main');
  main.appendChild(grid);
  const gridDiv = document.querySelector('div[class=row]');
  for (let i = 1; i < children.length; i += 1) {
    gridDiv.appendChild(children[i]);
  }
}
/**
 * Tekur inn sectionId til að querySelector velji rétt.
 * Fylki spilanna fyrir sectionið og titil fyrir það.
 * @param {String} sectionId
 * @param {Card array} cardArray
 * @param {String} sectionTitle
 * @return Ekkert.
 */
export function loadSection(sectionTitle, cardArray, sectionId) {
  const container = element('section', {class: 'grid'}, null,
    element('h2', {class: 'row col'}, null, sectionTitle),
    element('div', { class:'row', id: sectionId }, null, cardArray[0]));
  const main = document.querySelector('main');
  main.appendChild(container);
  const rowDiv = document.querySelector(`div[id=${sectionId}]`);
  for (let i = 1; i < cardArray.length; i++) {
    rowDiv.appendChild(cardArray[i]);
  }
}

/**
 * Tekur inn json fylki af fylkjum og fylki af id's.
 * Skilar fylki af þeim spilum sem samsvara ids í innteknu fylki
 * @param {JSON} videodata
 * @return html card array
 */
export function loadCards(videodata, arr) {
  const cardArray = [];
  arr.forEach((i) => {
    cardArray.push(
      element('div', { class: 'card col col-4' }, { click: () => { window.location.href = `video.html?id=${(i)}`; } },
        element('div', { class: 'image' }, null,
          element('img', { src: videodata.videos[i - 1].poster }, null, "skil ekki afhverju það þarf að vera eitthvað hér"),
          element('div', { class: "video-length" }, null, lengthOfVid(videodata.videos[i - 1]))),
        element('div', { class: 'bottom' }, null,
          element('h3', null, null, videodata.videos[i - 1].title),
          element('div', { class: 'c-counter' }, null, time(videodata.videos[i - 1])))),
    );
  });
  return cardArray;
}
