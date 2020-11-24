// eslint-disable-next-line import/extensions
import { el, element } from './lib/utils.js';
// virkar ekki án .js

const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

function loadVideoPlayer(id, videoData) {
  const vid = element('video', { src: videoData.videos[id - 1].video }, null, id);
  const title = element('h1', { class: 'videotitle grid' }, null, videoData.videos[id - 1].title);
  const videocontainer = element('div', { class: 'videocontainer' }, null,
    element('div', { class: 'videooverlay' }, null, ''),
    vid);

  const main = document.querySelector('main');
  main.appendChild(title);
  main.appendChild(videocontainer);
  vid.play();
}

document.addEventListener('DOMContentLoaded', async () => {
  fetch('../../videos.json')
    .then((res) => res.json())
    .then((data) => {
      loadVideoPlayer(videoId, data);
    });
});
