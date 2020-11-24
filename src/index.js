document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman

  /**
 * Use: lengthOfVid(Array)
 * Pre: Array er array úr jason skránni, specifically videos tilvik
 * Result: Skilar streng með duration á 0:00 formi, breytir úr sek.
 */
  function lengthOfVid(VideoDataVideos) {
    const timedur = VideoDataVideos.duration;
    let theTime = '';
    if (timedur < 10) {
      theTime = `0:0${timedur}`;
      return theTime;
    } if (timedur > 9 && timedur < 60) {
      theTime = `0:${timedur}`;
      return theTime;
    } if (timedur > 59) {
      theTime = `${Math.floor(timedur / 60)}:`;
      if (timedur % 60 < 10) {
        theTime = `${theTime}0${(timedur % 60)}`;
      } else {
        theTime = `theTime${(timedur % 60)}`;
      }
      return theTime;
    }
    return '';
  }

  /**
   * Use: time(Array)
   * Pre: Array er array úr jason skránni, specifically videos tilvik
   * Result: Skilar streng með hversu langt síðan myndbandið var búið til.
   */
  function time(videodataVideos) {
    const d = new Date();
    const n = d.getTime();
    let totaltime = n - parseInt(videodataVideos.created, 10);
    totaltime /= (1000 * 60 * 60);
    totaltime = Math.round(totaltime);
    let LongAgo = '';

    if (totaltime < 2) {
      LongAgo = ('Fyrir 1 klukkustund síðan');
      return LongAgo;
    } if (totaltime > 2 && totaltime < 48) {
      LongAgo = (`Fyrir ${totaltime} klukkustundum síðan`);
      return LongAgo;
    } if (totaltime < 48 && totaltime > 23) {
      LongAgo = ('Fyrir 1 degi síðan');
      return LongAgo;
    } if (totaltime > 48 && totaltime < 168) {
      LongAgo = `Fyrir ${Math.round(totaltime / 24)} dögum síðan`;
      return LongAgo;
    } if (totaltime > 167 && totaltime < (168 * 2)) {
      LongAgo = ('Fyrir 1 viku síðan');
      return LongAgo;
    } if (totaltime > (168 * 2) && totaltime < 720) {
      LongAgo = `Fyrir ${Math.round((totaltime / 24) / 7)} vikum síðan`;
      return LongAgo;
    } if (totaltime > 720 && totaltime < (720 * 2)) {
      LongAgo = ('Fyrir 1 mánuði síðan');
      return LongAgo;
    } if (totaltime > (720 * 2) && totaltime < 8760) {
      LongAgo = `Fyrir ${Math.round(((totaltime / 24) / 30))} mánuðum síðan`;
      return LongAgo;
    } if (totaltime > 8760 && totaltime < (8760 * 2)) {
      LongAgo = ('Fyrir 1 ári síðan');
      return LongAgo;
    } if (totaltime > (8760 * 2)) {
      LongAgo = `Fyrir ${Math.round((totaltime / 24) / 365)} árum síðan`;
      return LongAgo;
    }
    return LongAgo;
  }

  function process1(videodata) {
    const theTime = time(videodata.videos[1]);
    const theLength = lengthOfVid(videodata.videos[1]);
    console.log(theTime);
    console.log(theLength);
  }

  fetch('../../videos.json')
    .then((res) => res.json())
    .then((data) => {
      process1(data);
    });
});
