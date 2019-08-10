<!--
What is Greensock and how to usr CDN
  How To taget an Elemet in the dom
  Wright Simple TweenMax Selector
Dif To and From

Stagger
call Back
Time Line
Struncture Simple TimeLine
Overlap TimeLine Animations
Adding Lablel
And RElitive Positions
Show A preLoader
 -->

How To Get Green Sok Working -

Greensock is Provided with is CDN - Contend Distribution Network

We Will Concentrate on 2 TweenMax and TimelineMax

How Does a Tween Look?

TweenMax.to('Element', Duration, {CSS}, staggerDelay)
TweenMax.from('Element', Duration, {CSS}, staggerDelay)

let headerText = document.getElementById('headerText');
let ThreeBoxes = document.getElementById('ThreeBoxes');
let box = document.getElementsByClassName('box');

TweenMax.from(headerText, 1, { opacity: 0 });
TweenMax.from(ThreeBoxes, 1, { y: 100 });
// TweenMax.from(box, 1, { height: 100 });
TweenMax.staggerFrom(box, 1, { height: 100, delay:0.5 }, 0.2);

Functions

onStart
onUpdate(){
id.innterHTML
}
onComplete()

TimeLine =

let hederText = document.getElementById('headerText');
let ThreeBoxes = document.getElementById('ThreeBoxes');
let box = document.getElementsByClassName('box');

const tl = new TimelineMax();

tl.from(headerText, 1, { opacity: 0 })
.from(ThreeBoxes, 1, { y: 100 })
.staggerFrom(box, 1, { height: 100 }, 0.2);

But this is slow = OVERLAP

Overlapping is Called Relative Postiotiong on the Time Line
,'-=0.1'

Absolute Positioning is replace '-=0.1' with 3 = will wait for 3 sec mark to run

labels

.add(NOW)
