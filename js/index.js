import '../css/main.scss';

var mainBody = document.getElementById('mainBody');
var dotsArray = document.getElementById('dotsArray');
var runTime = document.getElementById('runTime');
var yello2svg = document.getElementById('yello2svg');
var white1svg = document.getElementById('white1svg');
var i = 1;
var pageOpenTimeline = new TimelineMax();
var chnageBackGroundColor = new TimelineMax();

var white1svgPath = {
  curviness: 1.5,
  autoRotate: false,
  type: 'soft',
  values: [
    { left: '10%', bottom: '15%', rotation: 0 },
    { left: '15%', bottom: '25%', rotation: 90 },
    { bottom: '55%', left: '15%', rotation: 180 },
    { bottom: '55%', left: '40%', rotation: 180 },
    { bottom: '40%', left: '40%', rotation: 180 }
  ]
};

pageOpenTimeline
  .from(dotsArray, 2, { top: '-60%' })
  .from(yello2svg, 2, { right: '-5%', opacity: 0 }, '-=1.5')
  .to(white1svg, 2, { bezier: white1svgPath }, '-=2.5');

let controller = new ScrollMagic.Controller();
var sceneTOne = new ScrollMagic.Scene({
  triggerElement: '#trigger',
  duration: '30%',
  triggerHook: 0
})
  .setTween(pageOpenTimeline)
  .addIndicators()
  .addTo(controller);

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
