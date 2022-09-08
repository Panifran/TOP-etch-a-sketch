'use strict';

const container = document.querySelector('.container');
const h2 = document.querySelector('h2');
const grid = document.querySelector('.grid');
const cell = document.createElement('div');
const small = document.querySelector('.small');
const medium = document.querySelector('.medium');
const big = document.querySelector('.big');
const btnRed = document.querySelector('.btn-red');
let html = '';

const reset = function () {
  grid.textContent = '';
};

const formatHtml = function (cells) {
  html = `<div class="cell" style="width: ${90 / cells}vh; height:  ${
    90 / cells
  }vh;"></div>`;
  for (let i = 0; i < cells * cells; i++) {
    grid.insertAdjacentHTML('afterbegin', html);
  }
};

small.addEventListener('click', function () {
  reset();
  formatHtml(20);
});

medium.addEventListener('click', function () {
  reset();
  formatHtml(40);
});

big.addEventListener('click', function () {
  reset();
  formatHtml(60);
});

btnRed.addEventListener('click', function () {
  console.log('click btnRed');
  // const cells = document.querySelectorAll('.cell');
  // cells.forEach(cell => cell.addEventListener('click'), function() {
  //   cell.classList.add('red');
  // })}
  cell.addEventListener('click', function() {
    console.log('click cell');
  })
});
