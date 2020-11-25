import { el, element } from './utils.js';
//splice
  /**
 * Hleður inn spilunum test
 * @param {JSON} videodata
 * @param {Array} arr fylki af ids
 */
// eslint-disable-next-line import/prefer-default-export
export async function displayCards(videodata, arr) {
  console.log('var verið að kalla?');
  const children = loadCards(videodata, arr);
  // Reyndist vera nauðsynlegt að gera children[0] i stadinn fyrir null
  // því annars var ekki hægt að appenda.
  const grid = element('div', { class: 'grid' }, null,
    element('div', { class: 'row' }, null, children[0]));
  const main = document.querySelector('main');
  main.appendChild(grid);
  const gridDiv = document.querySelector('div[class=row]');
  for (let i = 1; i < children.length; i += 1) {
    gridDiv.appendChild(children[i]);
  }
  return 0;
}

/**
 * Tekur inn json fylki af fylkjum. Býr til öll spil út frá
 * videos fylkinu í videos.json.
 * @param {JSON} videodata
 * @return html card array
 */

export function loadCards(videodata, arr) {
  const cardArray = [];
  arr.forEach((i) => {
    cardArray.push(
      element('div', { class: 'card col col-4' }, { click: () => { window.location.href = `video.html?id=${(i)}`; } },
        element('div', { class: 'image' }, null,
          element('img', {src: videodata.videos[i - 1].poster }, null, "skil ekki afhverju það þarf að vera eitthvað hér"),
          element('div', { class: "video-length" }, null, lengthOfVid(videodata.videos[i - 1])),
        ),
        element('div', { class: 'bottom' }, null,
          element('h3', null, null, videodata.videos[i - 1].title),
          element('div', { class: 'c-counter' }, null, time(videodata.videos[i - 1])),
        )
      )
    );
  });
  return cardArray;
}


/**
 * Use: lengthOfVid(Array)
 * Pre: Array er array úr jason skránni, specifically videos tilvik
 * Result: Skilar streng með duration á 0:00 formi, breytir úr sek.
 */
export function lengthOfVid(videodataVideos) {
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
export function time(videodataVideos) {
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
