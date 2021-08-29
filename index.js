window.addEventListener('DOMContentLoaded', () => {
  /* TIMELINE POSITION */

  const timelineLine = document.querySelector('div#timelineLine');
  const timelineDots = document.querySelectorAll('.timeline-dot');
  const firstDot = timelineDots.item(0);
  const lastDot = timelineDots.item(timelineDots.length - 1);

  const setTimelinePosition = () => {
    const dotRect = firstDot.getBoundingClientRect();
    timelineLine.style.top = firstDot.offsetTop + dotRect.height / 2 + 'px';
    timelineLine.style.left =
      firstDot.offsetLeft + dotRect.width / 2 - 2 + 'px';
    timelineLine.style.height = lastDot.offsetTop - dotRect.height / 2 + 'px';
  };

  setTimeout(() => {
    setTimelinePosition();
  }, 500);

  window.addEventListener('resize', setTimelinePosition);

  /* TIMELINE POSITION END */

  /* SECTION PANELS */

  const sides = ['top', 'right', 'left', 'bottom'];
  const overlay = document.querySelector('#overlay');
  const sectionElems = [];

  sides.forEach(side => {
    const ctrl = document.querySelector(`#${side}Ctrl`);
    const closeCtrl = document.querySelector(`#${side}Close`);
    const pgSection = document.querySelector(`#${side}Pg`);

    closeCtrl?.addEventListener('click', () => {
      pgSection.classList.remove('visible');
      overlay.classList.remove('visible');
    });

    ctrl.addEventListener('click', () => {
      pgSection.classList.toggle('visible');
      overlay.classList.toggle('visible');
    });

    pgSection.addEventListener('click', e => e.stopPropagation());

    sectionElems.push(pgSection);
  });

  overlay.addEventListener('click', closeAllPanels);

  window.addEventListener('keyup', e => {
    if (e.keyCode === 27) {
      closeAllPanels();
    }
  });

  function closeAllPanels() {
    overlay.classList.remove('visible');
    sectionElems.forEach(side => side.classList.remove('visible'));
  }

  /* SECTION PANELS END */

  /* NAME AND TITLE ANIMATIONS EASTER EGG */

  const nameTitleElem = document.querySelector('#nameTitle');
  let shouldAnimate = 0;

  function nameTitleClickListener() {
    shouldAnimate++;
    if (shouldAnimate >= 5) {
      addAnimateAndUnbind();
    }
  }

  const addAnimateAndUnbind = () => {
    nameTitleElem.classList.add('animate');
    nameTitleElem.removeEventListener('click', nameTitleClickListener);
  };

  nameTitleElem.addEventListener('click', nameTitleClickListener);

  /* NAME AND TITLE ANIMATIONS EASTER EGG END */
});
