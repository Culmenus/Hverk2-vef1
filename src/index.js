document.addEventListener('DOMContentLoaded', async () => {
  // Hér er allt „vírað“ saman

  let videodata;
  fetch('../../videos.json')
    .then((res) => res.json())
    .then((data) => {
      process(data);
  });
});

function process(videodata) {
  var theTime = time(videodata.videos[1]);
  var theLength = lengthOfVid(videodata.videos[1]);
  console.log(theTime);
  console.log(theLength);
}

/**
 * Use: lengthOfVid(Array)
 * Pre: Array er array úr jason skránni, specifically videos tilvik
 * Result: Skilar streng með duration á 0:00 formi, breytir úr sek.
 */
function lengthOfVid(VideoDataVideos){

  var time = VideoDataVideos.duration;
  if(time < 10){
    let theTime = "0:0" + time;
    return theTime;
  }
  else if(time>9 && time<60){
    let theTime = "0:" + time;
    return theTime;
  }
  else if(time>59){
   theTime = "" + Math.floor(time/60) + ":";
   if(time%60 < 10){
     theTime = theTime + "0" + time%60;
   }
   else{
     theTime = theTime + time%60;
   }
   return theTime;
  }
  else{
    return "";
  }
}

/**
 * Use: time(Array)
 * Pre: Array er array úr jason skránni, specifically videos tilvik
 * Result: Skilar streng með hversu langt síðan myndbandið var búið til.
 */
function time(videodataVideos){
  var d = new Date();
  var n = d.getTime();
  var time = n - parseInt(videodataVideos.created);
  time = time / (1000*60*60);
  time = Math.round(time);

  if(time <2){
    var LongAgo =  ("Fyrir " + 1 + " klukkustund síðan");
    return LongAgo;
  }
  else if(time>2 && time<48){
    var LongAgo = ("Fyrir " + time + " klukkustundum síðan");
    return LongAgo;
  }
  else if(time<48 && time>23){
    var LongAgo = ("Fyrir " + 1 + " degi síðan");
    return LongAgo;
  }
  else if(time>48 && time<168){
    console.log("Fyrir " + Math.round(time/24) + " dögum síðan");
  }
  else if(time>167 && time<(168*2)){
    var LongAgo = ("Fyrir " + 1 + " viku síðan");
    return LongAgo;
  }
  else if(time>(168*2) && time<720){
    var LongAgo = ("Fyrir " + Math.round((time/24)/7) + " vikum síðan");
    return LongAgo;
  }
  else if(time>720 && time<(720*2)){
    var LongAgo = ("Fyrir " + 1 + " mánuði síðan");
    return LongAgo;
  }
  else if(time>(720*2) && time<8760){
    var LongAgo = ("Fyrir " + Math.round(((time/24)/30)) + " mánuðum síðan");
    return LongAgo;
  }
  else if(time>8760 && time<(8760*2)){
    var LongAgo = ("Fyrir " + 1 + " ári síðan");
    return LongAgo;
  }
  else if(time>(8760*2)){
    var LongAgo = ("Fyrir " + Math.round((time/24)/365) + " árum síðan");
    return LongAgo;
  }
  else{
    return "";
  }
}
