import '../css/main.scss';

var mainBody = document.getElementById('mainBody');
var dotsArray = document.getElementById('dotsArray');
var runTime = document.getElementById('runTime');
var yello2svg = document.getElementById('yello2svg');
var white1svg = document.getElementById('white1svg');
var i = 1;
var pageOpenTimeline = new TimelineMax();
var chnageBackGroundColor = new TimelineMax();

pageOpenTimeline
  .from(dotsArray, 2, { top: '-60%' })
  .from(yello2svg, 2, { right: '-5%', opacity: 0 }, '-=1.5')
  .from(white1svg, 2, { left: '-5%', opacity: 0 }, '-=2.5');

// let controller = new ScrollMagic.Controller();
// var sceneTOne = new ScrollMagic.Scene({
//   triggerElement: '#trigger',
//   duration: 100,
//   triggerHook: 0.3
// })
//   .setTween(tl)
//   .addIndicators()
//   .addTo(controller);

// chnageBackGroundColor.to(mainBody, 0.5, { backgroundColor: '#cc2525' });
// chnageBackGroundColor.pause();
// function onRepeat() {
//   i++;
//   runTime.innerHTML = 'I have run' + ' ' + i + ' ' + 'times';
//   if (i % 5 === 0) {
//     chnageBackGroundColor.play();
//   } else {
//     chnageBackGroundColor.reverse();
//   }
// }
