import '../css/main.scss';
let Desk = document.getElementsByClassName('Desk');
let jsBox = document.getElementsByClassName('jsBox');
let ccsBox = document.getElementsByClassName('ccsBox');
let codeBlock1 = document.getElementsByClassName('codeBlock1');
let codeBlock2 = document.getElementsByClassName('codeBlock2');
let codeBlock3 = document.getElementsByClassName('codeBlock3');

let tl = new TimelineMax({ onComplete });

tl.from(Desk, 1, { opacity: 0, y: 100 })
  .from(
    codeBlock1,
    0.5,
    {
      opacity: 0,
      y: -200
    },
    '-=0.5'
  )
  .from(codeBlock2, 0.5, {
    opacity: 0,
    y: -100
  })
  .from(
    codeBlock3,
    0.5,
    {
      opacity: 0,
      y: -200
    },
    '-=0.5'
  )
  .from(
    jsBox,
    0.5,
    {
      opacity: 0,
      y: -200
    },
    '-=0.5'
  )
  .from(
    ccsBox,
    0.5,
    {
      opacity: 0,
      y: -200
    },
    '-=0.5'
  );

function onComplete() {
  // alert('Now')
  let ccs = new TimelineMax({ repeat: -1 });
  ccs.to(ccsBox, 1, { paddingLeft: 170 }).to(ccsBox, 1, { paddingLeft: 160 });

  let js = new TimelineMax({ repeat: -1 });
  js.to(jsBox, 1, { paddingLeft: 10 }).to(jsBox, 0.5, { paddingLeft: 0 });
}

tl.pause();

var play = document.getElementById('play');
var pause = document.getElementById('pause');
var resume = document.getElementById('resume');
var speedUp = document.getElementById('speedUp');
var slowDown = document.getElementById('slowDown');
var seek = document.getElementById('seek');
var progress = document.getElementById('progress');

play.onclick = function() {
  tl.play();
};
pause.onclick = function() {
  tl.pause();
};
restart.onclick = function() {
  tl.restart();
};
resume.onclick = function() {
  tl.resume();
};
speedUp.onclick = function() {
  tl.timeScale(5);
};
slowDown.onclick = function() {
  tl.timeScale(0.5);
};
seek.onclick = function() {
  tl.seek(2);
  // Amount Of SEC
};
progress.onclick = function() {
  tl.progress(0.5);
  // Amount Of SEC
};
