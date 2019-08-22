import '../css/main.scss';

var mainBody = document.getElementById('mainBody');
var dotsArray = document.getElementById('dotsArray');
var runTime = document.getElementById('runTime');
var yellow2svg = document.getElementById('yello2svg');
var white1svg = document.getElementById('white1svg');

var pageOpenTimeline = new TimelineMax();
var chnageBackGroundColor = new TimelineMax();

var white1svgOptions = [
  { left: '10%', bottom: '15%' },
  { left: '30%', bottom: '40%' },
  { left: '30%', bottom: '40%' },
  { left: '80%', bottom: '60%' }
];

pageOpenTimeline
  .from(dotsArray, 2, { top: '-60%' })
  .from(yellow2svg, 2, { right: '-5%', opacity: 0 }, '-=1.5')
  .to(white1svg, 2, { bezier: white1svgOptions, opacity: 0 }, '-=1.5');

var controller = new ScrollMagic.Controller();

var sceneOne = new ScrollMagic.Scene({
  triggerElement: '#trigger1',
  triggerHook: 0,
  duration: '80%'
})
  .setTween(pageOpenTimeline)
  .addIndicators()
  .setPin('#trigger1')
  .addTo(controller);
