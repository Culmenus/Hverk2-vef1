const urlParams = new URLSearchParams(window.location.search);
const videoId = urlParams.get('id');

console.log(videoId);
