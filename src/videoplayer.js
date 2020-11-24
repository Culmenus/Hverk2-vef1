/* eslint-disable no-param-reassign */
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

/**
 * Spilar myndband ef það er ekki í gangi, annars setur það á pásu.
 * @param {video} v
 */
function togglePlay(v) {
  if (isPlaying) {
    pauseVid(v);
  } else {
    playVid(v);
  }
}

/**
 * myndband fært til baka um 3 sekúndur eða á byrjun
 * @param {video} v
 */
function back(v) {
  if (v.currentTime > 0) {
    v.currentTime -= 3;
  }
}

/**
 * myndband f;rt 'afram um 3 sekundur eða á enda
 * @param {video} v
 */
function next(v) {
  if (v.currentTime < v.duration) {
    v.currentTime += 3;
  }
}

/**
 * ef hljóð er að spila er slökkt á því annars öfugt
 *   og hljóð icon breytt í samræmi
 * @param {vieo} v
 */
function toggleMute(v) {
  const buttn = document.querySelector('.mute img');
  if (!v.muted) {
    buttn.setAttribute('src', './img/unmute.svg');
  } else {
    buttn.setAttribute('src', './img/mute.svg');
  }
  v.muted = !v.muted;
}

/**
 * setur myndband í fullscreen, felur overlay til að það
 *  sé örugglega farið þegar við förum úr fullscreen.
 * @param {video} v
 */
function fullscr(v) {
  v.requestFullscreen();
  const lay = document.querySelector('.videooverlay');
  if (!lay.hasAttribute('hidden')) {
    lay.toggleAttribute('hidden');
  }
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
      element('img', { src: './img/play.svg' }, null, id)),
    element('button', { class: 'overlaybutton mute' }, { click: () => toggleMute(vid) },
      element('img', { src: './img/mute.svg' }, null, id)),
    element('button', { class: 'overlaybutton' }, { click: () => fullscr(vid) },
      element('img', { src: './img/fullscreen.svg' }, null, id)),
    element('button', { class: 'overlaybutton' }, { click: () => next(vid) },
      element('img', { src: './img/next.svg' }, null, id)));
  const description = element('p', { class: 'grid' }, null, videoData.videos[id - 1].description);

  const main = document.querySelector('main');
  main.appendChild(title);
  main.appendChild(videocontainer);
  main.appendChild(controls);
  main.appendChild(description);
  main.appendChild(element('h2', { class: 'grid' }, null, 'Tengd myndbönd'));
}

document.addEventListener('DOMContentLoaded', async () => {
  fetch('../../videos.json')
    .then((res) => res.json())
    .then((data) => {
      loadVideoPlayer(videoId, data);
    });
});
