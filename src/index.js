import { el, element } from './lib/utils.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman

  /**
 * Use: lengthOfVid(Array)
 * Pre: Array er array úr jason skránni, specifically videos tilvik
 * Result: Skilar streng með duration á 0:00 formi, breytir úr sek.
 */
  function lengthOfVid(videodataVideos) {
    const timedur = videodataVideos.duration;
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
        theTime = `${theTime}${(timedur % 60)}`;
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
    testCards(videodata);
  }

//splice
  /**
 * Hleður inn spilunum test
 * @param {*} videodata
 */
function testCards(videodata) {
  const children = loadCards(videodata);
  // Reyndist vera nauðsynlegt að gera children[0] i stadinn fyrir null
  // því annars var ekki hægt að appenda.
  const testGrid = element('div', { class: 'grid' }, null,
    element('div', { class: 'row' }, null, children[0])
  );
  const main = document.querySelector('main');
  main.appendChild(testGrid);
  const gridDiv = document.querySelector('div[class=row]');
  for(let i = 1; i < children.length ; i++) {
    gridDiv.appendChild(children[i]);
  }
}

/**
 * Tekur inn json fylki af fylkjum. Býr til öll spil út frá
 * videos fylkinu í videos.json.
 * @param {JSON} videodata
 * @return html card array
 */

function loadCards(videodata) {
  const cardArray = [];
  for (let i = 0; i < videodata.videos.length; i++) {
    childArray.push(
      element('div', { class: 'card col col-4' }, { click: () => { window.location.href = `video.html?id=${(i + 1)}`; } },
        element('div', { class: 'image' }, null,
          element('img', {src: videodata.videos[i].poster }, null, "skil ekki afhverju það þarf að vera eitthvað hér"),
          element('div', { class: "video-length" }, null, lengthOfVid(videodata.videos[i]))
        ),
        element('div', { class: 'bottom' }, null,
          element('h3', null, null, videodata.videos[i].title),
          element('div', { class: 'c-counter' }, null, time(videodata.videos[i]))
        )
      )
    );
  }
  return cardArray;
}

  fetch('../../videos.json')
    .then((res) => res.json())
    .then((data) => {
      process1(data);
    });
});
