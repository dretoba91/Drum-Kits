'use strict';

// const removeTransition = function (e) {
//   if (e.propertyName !== 'transform') {
//     e.target.classList.remove('playing');
//   }
// };

// const playSound = function (e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

//   if (!audio) {
//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
//   }
// };

// for (let i = 0; i <= btnKeys.length; i++) {
//   btnKeys[i].addEventListener('transitionend', removeTransition);
//   window.addEventListener('keydown', playSound);
// }

// function removeTransition(e) {
//   if (e.propertyName !== 'transform') return;
//   e.target.classList.remove('playing');
// }

// function playSound(e) {
//   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//   if (!audio) return;

//   key.classList.add('playing');
//   audio.currentTime = 0;
//   audio.play();
// }

// const keys = Array.from(document.querySelectorAll('.key'));
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// console.log(keys);
// window.addEventListener('keydown', playSound);

// const btnKeys = document.querySelectorAll('.key');
// console.log(btnKeys);
// for (let i = 0; i < btnKeys.length; i++) {
//   btnKeys.addEventListener('keydown', playSound);

//   btnKeys[i].addEventListener('transitionend', removeTransition);
// }
