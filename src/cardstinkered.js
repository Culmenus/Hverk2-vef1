import { el, element } from './lib/utils.js';


/**
 * Hleður inn spilunum
 * @param {*} videoData
 */
function displayVideos(videoData) {
  videoData.categories.forEach((category) => {
    displayTitle(category.title, videoData);
    displayVideoIdArray(category.videos, videoData);
  });
}

function displayTitle(tit, data) {

}

function displayVideoIdArray(arr, videoData) {
  const arrLength = arr.length;
  for (let i = 1; i <= arrLength; i += 1) {
    const position = i % 3;
    if (position === 1) {
      displayVideo(arr[i], position, true, videoData);
    } else {
      displayVideo(arr[i], position, false, videoData);
    }
  }
}

function displayVideo(vidId, position, videoData) {
  let theElement;
  theLastRow.appendChild(theElement);

}

function loadCards(noOfCards, videoData) {
  for (let i = 0; i < noOfCards; i++) {
    element('div', { class: 'card col col-4' }, null,
      element('div', { class: 'image' }, null,
        element('img', {src: videoData.videos[i].poster }, null, "skil ekki afhverju það þarf að vera eitthvað hér"),
        element('div', { class: "video-length" }, null, "00:70")
      ),
      element('div', { class: 'bottom' }, null,
        element('h3', null, null, videoData.videos[i].title),
        element('div', { class: 'c-counter' }, null, "fyrirsidan")
      )
    );
}
}

document.addEventListener('DOMContentLoaded', async () => {
  fetch('../../videos.json')
    .then((res) => res.json())
    .then((data) => {
      displayVideos(data);
    });
});
