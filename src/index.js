import { el, element } from './lib/utils.js';
import { displayCards, time, lengthOfVid } from './lib/displayvideos.js'

async function process1(videodata) {
  const theTime = time(videodata.videos[1]);
  const theLength = lengthOfVid(videodata.videos[1]);
  const lenCat = videodata.categories.length;



  setTimeout(() => {
    displayTitle(videodata, videodata.categories[0].title);
    displayCards(videodata, videodata.categories[0].videos);
    }, 0);

  setTimeout(() => {
    displayTitle(videodata, videodata.categories[1].title);
    displayCards(videodata, videodata.categories[1].videos);
    }, 1000);

  setTimeout(() => {
    displayTitle(videodata, videodata.categories[2].title);
    displayCards(videodata, videodata.categories[2].videos);
    }, 2000);

  //const resolve3 = await displayTitle(videodata, videodata.categories[1].title);
  //const resolve4 = await displayCards(videodata, videodata.categories[1].videos);
  //console.log(videodata.categories[1].videos);
}

async function displayTitle(data, title) {
  const main = document.querySelector('main');
  const theTitle = element('h2', { class: 'grid' }, null, title);
  main.appendChild(theTitle);
  return 0;
}

document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman
  fetch('../../videos.json')
    .then((res) => res.json())
    .then((data) => {
      process1(data);
    });
});

//
//for (let i = 0; i < lenCat; i += 1) {
  //const resolved1 = await displayTitle(videodata, videodata.categories[i].title);
  //const resolved2 = await displayCards(videodata, videodata.categories[i].videos);
  //console.log(videodata.categories[i].videos);
//}
