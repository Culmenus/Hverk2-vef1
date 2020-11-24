
document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman

  let videodata =
  fetch('../../videos.json')
    .then((res) => res.json());
  console.log('hey');
  console.log(videodata);
});
