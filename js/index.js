import '../css/main.scss';

var mainBody = document.getElementById('mainBody');
var dotsArray = document.getElementById('dotsArray');
var runTime = document.getElementById('runTime');
var yellow2svg = document.getElementById('yello2svg');
var white1svg = document.getElementById('white1svg');

var pageOpenTimeline = new TimelineMax();
var chnageBackGroundColor = new TimelineMax();

pageOpenTimeline
  .from(dotsArray, 2, { top: '-60%' })
  .from(yellow2svg, 2, { right: '-5%', opacity: 0 }, '-=1.5');
