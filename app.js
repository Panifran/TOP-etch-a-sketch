'use strict';

const container = document.querySelector('.container');
const h2 = document.querySelector('h2');
const grid = document.querySelector('.grid');
const cell = document.createElement('div');
const small = document.querySelector('.small');
const medium = document.querySelector('.medium');
const big = document.querySelector('.big');

small.addEventListener('click', function () {
  const html = `<div class="cell" style="width: ${90 / 20}vh; height:  ${
    90 / 20
  }vh;"></div>`;
  for (let i = 0; i < 20 * 20; i++) {
    grid.insertAdjacentHTML('afterbegin', html);
  }
});

medium.addEventListener('click', function () {
  const html = `<div class="cell" style="width: ${90 / 40}vh; height:  ${
    90 / 40
  }vh;"></div>`;
  for (let i = 0; i < 40 * 40; i++) {
    grid.insertAdjacentHTML('afterbegin', html);
  }
});

big.addEventListener('click', function () {
  const html = `<div class="cell" style="width: ${90 / 60}vh; height:  ${
    90 / 60
  }vh;"></div>`;
  for (let i = 0; i < 60 * 60; i++) {
    grid.insertAdjacentHTML('afterbegin', html);
  }
});
