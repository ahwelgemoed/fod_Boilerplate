import '../css/main.scss';
let Desk = document.getElementsByClassName('Desk');
let jsBox = document.getElementsByClassName('jsBox');
let ccsBox = document.getElementsByClassName('ccsBox');
let codeBlock1 = document.getElementsByClassName('codeBlock1');
let codeBlock2 = document.getElementsByClassName('codeBlock2');
let codeBlock3 = document.getElementsByClassName('codeBlock3');
let tl = new TimelineMax({ onComplete });
tl.from(Desk, 1, { opacity: 0, y: 100 })
  .from(
    codeBlock1,
    0.5,
    {
      opacity: 0,
      y: -200
    },
    '-=0.5'
  )
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
    ccsBox,
    0.5,
    {
      opacity: 0,
      y: -200
    },
    '-=0.5'
  );

function onComplete() {
  let ccs = new TimelineMax({ repeat: -1 });
  ccs
    .from(ccsBox, 1, { paddingLeft: 150 })
    .to(ccsBox, 1, { paddingLeft: 160 })
    .to(ccsBox, 1, { paddingLeft: 150 });

  let js = new TimelineMax({ repeat: -1 });
  js.from(jsBox, 0.5, { paddingLeft: 0 })
    .to(jsBox, 1, { paddingLeft: 10 })
    .to(jsBox, 0.5, { paddingLeft: 0 });

  let code3 = new TimelineMax({ repeat: -1 });
  code3
    .from(codeBlock3, 1, { paddingTop: 85 })
    .to(codeBlock3, 1, { paddingTop: 70 }, '-=0.5')
    .to(codeBlock3, 1, { paddingTop: 85 });
  let code2 = new TimelineMax({ repeat: -1 });
  code2
    .from(codeBlock2, 0.1, {
      paddingLeft: 35,
      paddingTop: 10,
      ease: Linear.easeNone
    })
    .to(
      codeBlock2,
      1,
      { paddingLeft: 45, paddingTop: 15, ease: Linear.easeNone },
      '-=0.5'
    )
    .to(codeBlock2, 1, {
      paddingLeft: 35,
      paddingTop: 10,
      ease: Linear.easeNone
    });
}
