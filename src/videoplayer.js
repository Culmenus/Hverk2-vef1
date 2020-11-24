// eslint-disable-next-line import/extensions
import { el, element } from './lib/utils.js';
// virkar ekki án .js

const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');
let isPlaying = false;

/**
 * Spilar video og skiptir úr play í stop icon
 * @param {video} v
 *
 */
function playVid(v) {
  v.play();
  const lay = document.querySelector('.videooverlay');
  console.log(lay);
  lay.toggleAttribute('hidden');
  isPlaying = true;
  const buttn = document.querySelector('.playpause img');
  buttn.setAttribute('src', './img/pause.svg');
}
/**
 * stoppar video og skiptir ur pause í play icon
 * @param {video} v
 */
function pauseVid(v) {
  v.pause();
  const lay = document.querySelector('.videooverlay');
  lay.toggleAttribute('hidden');
  isPlaying = false;
  const buttn = document.querySelector('.playpause img');
  buttn.setAttribute('src', './img/play.svg');
}

function togglePlay(v) {
  if (isPlaying) {
    pauseVid(v);
  } else {
    playVid(v);
  }
}

function back(v) {

}

function loadVideoPlayer(id, videoData) {
  const vid = element('video', { src: videoData.videos[id - 1].video }, null, id);
  const title = element('h1', { class: 'title grid' }, null, videoData.videos[id - 1].title);
  const videocontainer = element('div', { class: 'videocontainer' }, null,
    vid,
    element('div', { class: 'videooverlay' }, null,
      element('button', { class: 'overlaybutton' }, { click: () => togglePlay(vid) },
        element('img', { src: './img/play.svg' }, null, id))));
  const controls = element('div', { class: 'controls grid' }, null,
    element('button', { class: 'overlaybutton' }, { click: () => back(vid) },
      element('img', { src: './img/back.svg' }, null, id)),
    element('button', { class: 'overlaybutton playpause' }, { click: () => togglePlay(vid) },
      element('img', { src: './img/play.svg' }, null, id)));

  const main = document.querySelector('main');
  main.appendChild(title);
  main.appendChild(videocontainer);
  main.appendChild(controls);
}

document.addEventListener('DOMContentLoaded', async () => {
  fetch('../../videos.json')
    .then((res) => res.json())
    .then((data) => {
      loadVideoPlayer(videoId, data);
    });
});
