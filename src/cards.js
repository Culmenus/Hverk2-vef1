import { el, element } from './lib/utils.js';


/**
 * Hleður inn spilunum
 * @param {*} videoData
 */
function testCards(jsonVideoData) {
  const testGrid = element('div', {class: 'grid'}, null,
    element('div', {class: 'row'}, null, null)
  );
  const main = document.querySelector('main');
  main.appendChild(testGrid);
}

function loadCards(noOfCards, videoData){

  for (let i = 0; i < noOfCards; i++) {
    element('div', {class: 'card col col-4'}, null,
      element('div', {class: 'image'}, null,
        element('img', {src: videoData.videos[i].poster}, null, id),
        element('div', {class: "video-length"}, null, "00:70")
      ),
      element('div', {class: 'bottom'}, null,
        element('h3', null, null, videoData.videos[i].title),
        element('div', {class: 'c-counter'}, null, "fyrirsidan")
      )
    );
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  fetch('../../videos.json')
    .then((res) => res.json())
    .then((data) => {
      testCards(data);
    });
});
