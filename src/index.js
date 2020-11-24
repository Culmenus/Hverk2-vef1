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
  time(videodata.videos[1]);
}

///tekur inn videos jason array og skilar tímanum frá því að
///það var created.
function time(videodataVideos){
  var d = new Date();
  var n = d.getTime();
  var time = n - parseInt(videodataVideos.created);
  time = time / (1000*60*60);
  time = Math.round(time);

  if(time <2){
    console.log("Fyrir " + 1 + " klukkustund síðan");
  }
  else if(time>2 && time<48){
    console.log("Fyrir " + time + " klukkustundum síðan");
  }
  else if(time<48 && time>23){
    console.log("Fyrir " + 1 + " degi síðan");
  }
  else if(time>48 && time<168){
    console.log("Fyrir " + Math.round(time/24) + " dögum síðan");
  }
  else if(time>167 && time<(168*2)){
    console.log("Fyrir " + 1 + " viku síðan");
  }
  else if(time>(168*2) && time<720){
    console.log("Fyrir " + Math.round((time/24)/7) + " vikum síðan");
  }
  else if(time>720 && time<(720*2)){
    console.log("Fyrir " + 1 + " mánuði síðan");
  }
  else if(time>(720*2) && time<8760){
    console.log("Fyrir " + Math.round(((time/24)/30)) + " mánuðum síðan");
  }
  else if(time>8760 && time<(8760*2)){
    console.log("Fyrir " + 1 + " ári síðan");
  }
  else if(time>(8760*2)){
    console.log("Fyrir " + Math.round((time/24)/365) + " árum síðan");
  }
}
