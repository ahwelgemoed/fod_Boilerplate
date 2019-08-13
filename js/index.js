import '../css/main.scss';

let controller = new ScrollMagic.Controller();

let mainCreditCard = document.getElementById('mainCreditCard');
let redCreditCard = document.getElementById('redCreditCard');
let goldCreditCard = document.getElementById('goldCreditCard');

let sceneOneTimeLine = new TimelineMax();
let sceneTwoTimeLine = new TimelineMax();

sceneOneTimeLine
  .set(mainCreditCard, { scale: 2, y: -1200 })
  .to(mainCreditCard, 2, { scale: 1, y: 0 });
sceneTwoTimeLine
  .to(payMore, 1, { opacity: 1, y: 100 })
  .to(redCreditCard, 0.3, { opacity: 1, scale: 1, x: '+5%' }, '-=1')
  .to(goldCreditCard, 0.3, { opacity: 1, scale: 1, x: '-5%' }, '-=1');

let sceneTOne = new ScrollMagic.Scene({
  triggerElement: '.sceneOneTrigger',
  triggerHook: 0,
  duration: '100%'
})
  .setTween(sceneOneTimeLine)
  .addIndicators()
  .addTo(controller);

let sceneTwo = new ScrollMagic.Scene({
  triggerElement: '.sceneTwoTrigger',
  triggerHook: 0,
  duration: '100%'
})
  .setTween(sceneTwoTimeLine)
  .addIndicators()
  .setPin('.sceneTwoTrigger')
  .addTo(controller);
