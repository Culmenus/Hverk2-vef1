/* eslint-disable import/extensions */
import { loadCards, loadSection } from './lib/displayvideos.js';

async function init(videodata) {
  const lenCat = videodata.categories.length;
  for (let i = 0; i < lenCat; i += 1) {
    loadSection(videodata.categories[i].title, loadCards(videodata, videodata.categories[i].videos), `section-${i}`);
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman
  fetch('../../videos.json')
    .then((res) => res.json())
    .then((data) => {
      init(data);
    });
});
