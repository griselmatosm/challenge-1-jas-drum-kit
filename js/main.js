/* eslint-disable no-console */
'use strict';

const keys = document.querySelectorAll('.page__keys--key');

function handleKey(ev){
  const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`.page__keys--key[data-key="${ev.keyCode}"]`);
  key.classList.add('golden-border');
}

const removeTransition = (ev) => {
  if (ev.propertyName !== 'transform') return;
  console.log(ev.target);
  ev.target.classList.remove('golden-border');
};


keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', handleKey);

