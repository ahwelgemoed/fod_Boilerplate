## Notes / Cheat Sheet

**NB - Always Import The GSAP JS files after your own JS Link Here**

### Tween

#### Simple Tween

```javascript
TweenMax.to(elem, time, { vars });
```

`.to()` / `.from()`

`elem` is the element you want to animate (Target this with its ID or ClassName)

`time` is the duration of the Animation

`vars` is and JS Object of vars you want to Animate (CSS)

#### Stagger Tween

```javascript
TweenMax.staggerTo(elem, time, { vars }, timeBetween);
```

`.staggerTo()` / `.staggerFrom()`

`elem` is the element you want to animate (Target this with its ID or ClassName)

`time` is the duration of the Animation

`vars` is and JS Object of vars you want to Animate (CSS)

`timeBetween` is a number value of time between the stagger animation

### Timeline _(Chaining Tweens)_

Creating a New GSAP timeline

```javascript
var tl = new TimelineLite();
```

A GSAP Timeline is very similar to Tween exepct wee _chain_ then together

#### Example of Simple Timeline

```javascript
tl.to(element1, 1, { x: 50, y: 0 }).to(element2, 1, { x: 50, y: 0 });
```

#####Verbose Explanation

When Timeline callsd `tl` is called it will move _element1_ for one second then _element2_ will be moved for one second

#### Adjust Time

```javascript
tl.to(element1, 1, { x: 50, y: 0 }).to(element2, 1, { x: 50, y: 0 }, TIME);
```

`TIME` is a var that uses Relative Numbers

`TIME = 0.5` will animate element2 one 0.5 seconds into timeline
`TIME = "-=0.5"` will Overlap element2's animation 0.5 seconds before the previous animation ends
`TIME = "+=0.5"` will Delay element2's animation 0.5 seconds after the previous animation ends

#### Label

Label work simulate that adjusting the time abut you are naming it

```javascript
tl.add(LABEL)
  .to(element1, 1, { x: 50, y: 0 })
  .to(element2, 1, { x: 50, y: 0 }, LABEL);
```

## Control Your Timeline with Playback Functions

`tl.play(1.5)` Play from 1.5s
`tl.play(-1);` Play 1s from end
`tl.pause();` Pause timeline
`tl.resume();` Continue playback
`tl.seek(1.5);` Go to 1.5s or 'label'
`tl.reverse();` Reverse playback anytime
`tl.timeScale(2);` Speed up timeline
`tl.tweenTo('LABEL');` Skips To That Label in the Timeline
`tl.progress(0.5);` Skip to halfway

## JS events to Control Animation

Most JS events can Trigger An Animation

Full List Can be Found [Here](https://developer.mozilla.org/en-US/docs/Web/Events#Mouse_events)

**Example**

```javascript
button.addEventListener('mouseenter', function() {
  tl.play();
});
```

## Animation Callbacks

`onStart` `onComplete` `onUpdate`
`onRepeat` `onRepeatParams` `onReverseComplete`

## Scroll Control Of Animation

ADD on for GSAP called Scroll Magic (CDN HERE)

**Boilerplate**

`var controller = new ScrollMagic.Controller()`

### Setting up Scrollmagic Scene

```javascript
var sceneOne = new ScrollMagic.Scene({
  triggerElement: '#trigger',
  duration: '100%',
  triggerHook: 0.3
})
  .setTween(tl)
  .addIndicators()
  .addTo(controller);
```

`triggerElemet` where the trigger is in the dom

`duration` is how long the scroll animation will be - if removed animation will trigger on scroll

`triggerHook` Be in Class You had to be there

**Chain Elements**

`.setTween()` - is the Tween or Timeline to trigger on scroll.

`.addIndicators()` Only For Dev

`.addTo(controller)` Boilerplate work (Dont Worry)
