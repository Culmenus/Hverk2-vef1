// eslint-disable-next-line import/extensions
import { el, element } from './lib/utils.js';
// virkar ekki án .js

const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

function playVid(v) {
  v.play();
  const lay = document.querySelector('.videooverlay');
  console.log(lay);
  lay.toggleAttribute('hidden');
}

function pause() {

}

function loadVideoPlayer(id, videoData) {
  const vid = element('video', { src: videoData.videos[id - 1].video }, null, id);
  const title = element('h1', { class: 'title grid' }, null, videoData.videos[id - 1].title);
  const videocontainer = element('div', { class: 'videocontainer' }, null,
    vid,
    element('div', { class: 'videooverlay' }, null,
      element('button', { class: 'overlaybutton' }, { click: () => playVid(vid) },
        element('img', { src: './img/play.svg' }, null, '2'))));
  //const controls =

  const main = document.querySelector('main');
  main.appendChild(title);
  main.appendChild(videocontainer);
}

document.addEventListener('DOMContentLoaded', async () => {
  fetch('../../videos.json')
    .then((res) => res.json())
    .then((data) => {
      loadVideoPlayer(videoId, data);
    });
});
