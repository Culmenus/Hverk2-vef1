import { element } from './lib/utils.js';
import { loadCards, displayCards, time, lengthOfVid, loadSection } from './lib/displayvideos.js'

async function init(videodata) {
  const lenCat = videodata.categories.length;
  for (let i = 0; i < lenCat; i++) {
    loadSection(videodata.categories[i].title, loadCards(videodata, videodata.categories[i].videos),`section-${i}`);
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

//
//for (let i = 0; i < lenCat; i += 1) {
  //const resolved1 = await displayTitle(videodata, videodata.categories[i].title);
  //const resolved2 = await displayCards(videodata, videodata.categories[i].videos);
  //console.log(videodata.categories[i].videos);
//}
