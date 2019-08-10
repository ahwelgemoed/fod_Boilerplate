import '../css/main.scss';

// let headerText = document.getElementById('headerText');
// let ThreeBoxes = document.getElementById('ThreeBoxes');
// let box = document.getElementsByClassName('box');

// TweenMax.from(headerText, 1, { opacity: 0 });
// TweenMax.from(ThreeBoxes, 1, { y: 100 });
// // TweenMax.from(box, 1, { height: 100 });
// TweenMax.staggerFrom(box, 1, { height: 100 }, 0.2);

// let hederText = document.getElementById('headerText');
// let ThreeBoxes = document.getElementById('ThreeBoxes');
// let box = document.getElementsByClassName('box');

// const tl = new TimelineMax();
// tl.from(hederText, 1, { opacity: 0, y: 50 }).staggerFrom(
//   box,
//   1,
//   { width: 180, y: 500 },
//   0.2,
//   '-=0.5'
// );

let hederText = document.getElementById('headerText');
let ThreeBoxes = document.getElementById('ThreeBoxes');
let box = document.getElementsByClassName('box');

const tl = new TimelineMax();

tl.from(headerText, 1, { opacity: 0 })
  .from(ThreeBoxes, 1, { y: 500 }, '-=1')
  .staggerFrom(box, 1, { height: 100 }, 0.2, '-=0.5');
