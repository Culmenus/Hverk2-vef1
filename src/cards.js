import { el, element } from './lib/utils.js';


/**
 * Hleður inn spilunum
 * @param {*} videoData
 */
function testCards(videoData) {
  const children = loadCards(3, videoData);
  const testGrid = element('div', { class: 'grid' }, null,
    element('div', { class: 'row' }, null, null)
  );
  const main = document.querySelector('main');
  main.appendChild(testGrid);
  const gridDiv = document.querySelector('div[class=grid]');
  for(let i = 0; i < children.length ; i++) {
    gridDiv.appendChild(children[i]);
  }
}

function loadCards(noOfCards, videoData) {
  const childArray = [];
  for (let i = 0; i < noOfCards; i++) {
    childArray.push(
      element('div', { class: 'card col col-4' }, null,
        element('div', { class: 'image' }, null,
          element('img', {src: videoData.videos[i].poster }, null, "skil ekki afhverju það þarf að vera eitthvað hér"),
          element('div', { class: "video-length" }, null, "00:70")
        ),
        element('div', { class: 'bottom' }, null,
          element('h3', null, null, videoData.videos[i].title),
          element('div', { class: 'c-counter' }, null, "fyrirsidan")
        )
      )
    );
  }
  return childArray;
}

document.addEventListener('DOMContentLoaded', async () => {
  fetch('../../videos.json')
    .then((res) => res.json())
    .then((data) => {
      testCards(data);
    });
});
