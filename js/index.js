import '../css/main.scss';

// let controller = new ScrollMagic.Controller();

var desk = document.getElementsByClassName('Desk');
var jsBox = document.getElementsByClassName('jsBox');
var cssBox = document.getElementsByClassName('cssBox');
var codeBlock1 = document.getElementsByClassName('codeBlock1');
var codeBlock2 = document.getElementsByClassName('codeBlock2');
var codeBlock3 = document.getElementsByClassName('codeBlock3');

var play = document.getElementById('play');
var pause = document.getElementById('pause');
var resume = document.getElementById('resume');
var restart = document.getElementById('restart');
var fast = document.getElementById('fast');
var seek = document.getElementById('seek');
var progress = document.getElementById('progress');
var To = document.getElementById('To');

var tl = new TimelineMax({ onComplete: myDoneFunc, onUpdate: myUpdateFunc });
// tl.pause();

play.onclick = function() {
  tl.play();
};
pause.onclick = function() {
  tl.pause();
  cssBoxTl.pause();
};
restart.onclick = function() {
  tl.restart();
};
resume.onclick = function() {
  tl.resume();
};
fast.onclick = function() {
  tl.timeScale(0.5);
};
seek.onclick = function() {
  tl.seek('lastCss');
};

To.onclick = function() {
  tl.tweenTo('lastCss');
};

tl.from(desk, 1, { y: 200, opacity: 0 })
  .add('lastCss')
  .from(codeBlock1, 0.5, { y: -200, opacity: 0 }, '-=0.5')
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
    cssBox,
    0.5,
    {
      opacity: 0,
      y: -200
    },
    'lastCss'
  );

var cssBoxTl = new TimelineMax({ repeat: -1 });
function myDoneFunc() {
  // alert('Done');

  cssBoxTl
    .to(cssBox, 1, { paddingLeft: 170 })
    .to(cssBox, 1, { paddingLeft: 160 });

  var jsTimeLine = new TimelineMax({ repeat: -1 });
  jsTimeLine
    .to(jsBox, 1, { paddingLeft: 10 })
    .to(jsBox, 0.5, { paddingLeft: 0 });
}

var i = 0;
function myUpdateFunc() {
  console.log(i++);
}

// var sceneTOne = new ScrollMagic.Scene({
//   triggerElement: '#trigger',
//   duration: 100,
//   triggerHook: 0.3
// })
//   .setTween(tl)
//   .addIndicators()
//   .addTo(controller);
