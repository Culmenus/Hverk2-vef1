// eslint-disable-next-line import/extensions
import { el, element } from './lib/utils.js';
// virkar ekki án .js

const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

function loadVideoPlayer(id, videoData) {
  const elem = element('div', { class: 'videocontainer' }, null,
    element('video', { src: videoData.videos[id - 1].video }, null, id));

  const main = document.querySelector('main');
  main.appendChild(elem);
}

document.addEventListener('DOMContentLoaded', async () => {
  fetch('../../videos.json')
    .then((res) => res.json())
    .then((data) => {
      loadVideoPlayer(videoId, data);
    });
});
