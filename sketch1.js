//this program loops the first chord of Harvest Moon
//then immediately plays the first chord of Old Man
//and then flips back to Harvest Moon and so on

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// This above function creates an <iframe> (and YouTube player) after the API code downloads.

//var player = []; //creating an array of players, each with its own video start/end
var done = false;
var time = 0;
var players = [];

function setup() {
  createCanvas(400, 400);
  background(1);
  newPlayer('n2MtEsrcTTs','8','13');
  
}

function draw() {
  if (done == true) {
     console.log("i am here at the IF!");
     done == false;
     newPlayer('SYUgGs9IStY','3','11');
     
  }
}

function mousePressed () {
    players[0].playVideo();
}

function onYouTubeIframeAPIReady() {
  
}

function newPlayer(link,startpt,endpt) {

console.log(link + " " + startpt + " " +endpt);

  players.push(new YT.Player('ytplayer', {
      height: '300',
      width: '440',
      videoId: link,
      playerVars: {
        autoplay: '1',
        start: startpt,
        end: endpt,
      },
      events: {
        //'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange,
      }
  }));

}

// function newPlayer2(){

//   player2 = new YT.Player('ytplayer2', {
//     height: '300',
//     width: '440',
//     videoId: 'SYUgGs9IStY',
//      playerVars: {
//       autoplay: '',
//       start: '3',
//       end: '7',
//     }

//     // events: {
//     //   'onReady': OldManReady,
//     //   //'onStateChange': onPlayerStateChange,
//     // }
//   });
// }

// function onPlayerReady(event) {
//   //event.target.playVideo();
//   player.seekTo(8);
// }


// function OldManReady(event) {
//   player2.seekTo(3);
//   player2.playVideo();
// }

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED && !done) {
    // setTimeout(nextVideo, 9300);
    done = true;
  }//is event.data only avail in these fucntions?
}

// function nextVideo() {
//   player.stopVideo();

//   //done = false;
// }

