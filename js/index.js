import '../css/main.scss';

var dotsArray = document.getElementById('dotsArray');

var pageOpenTimeline = new TimelineMax();

pageOpenTimeline.from(dotsArray, 2, { top: '-60%' });
