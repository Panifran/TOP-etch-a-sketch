'use strict';

// Select elements

const container = document.querySelector('.container');
const h2 = document.querySelector('h2');
const grid = document.querySelector('.grid');
const cell = document.createElement('div');
const small = document.querySelector('.small');
const medium = document.querySelector('.medium');
const big = document.querySelector('.big');
const btnRed = document.querySelector('.btn-red');
const btnBlue = document.querySelector('.btn-blue');
const btnGreen = document.querySelector('.btn-green');
const btnDelete = document.querySelector('.btn-delete');
const btnErase = document.querySelector('.btn-erase');
const btnSize = document.querySelectorAll('.btn-size');
const btnColor = document.querySelectorAll('.btn-color');

// Functions

let html = '';

const reset = function () {
  grid.textContent = '';
};

function resetBtnSize() {
  btnSize.forEach((e) => e.classList.remove('yellow'));
}

function resetBtnColor() {
  btnColor.forEach((e) => e.classList.remove('yellow'));
}

const formatHtml = function (cells) {
  html = `<div class="cell" style="width: ${90 / cells}vh; height:  ${
    90 / cells
  }vh;"></div>`;
  for (let i = 0; i < cells * cells; i++) {
    grid.insertAdjacentHTML('afterbegin', html);
  }
};

function getSize(button, numbGrids) {
  button.addEventListener('click', function () {
    reset();
    formatHtml(numbGrids);
    resetBtnSize();
    button.classList.add('yellow');
    resetBtnColor();
    btnRed.classList.add('yellow');
    cells = document.querySelectorAll('.cell');
    cells.forEach((ele) => ele.addEventListener('click', function () {}));
    defaultColor();
  });
}

function getColor(button, color) {
  button.addEventListener('click', function () {
    resetBtnColor();
    button.classList.add('yellow');
    cells.forEach((ele) =>
      ele.addEventListener('click', function () {
        ele.style.backgroundColor = color;
      })
    );
  });
}
// Default board - Small & red

formatHtml(20);

let cells = document.querySelectorAll('.cell');

function defaultColor() {
  cells.forEach((ele) =>
    ele.addEventListener('click', function () {
      ele.style.backgroundColor = 'red';
    })
  );
}


btnDelete.addEventListener('click', function () {
  reset();
  formatHtml(20);
  resetBtnSize();
  small.classList.add('yellow');
  resetBtnColor();
  btnRed.classList.add('yellow');
  cells = document.querySelectorAll('.cell');
  cells.forEach((ele) => ele.addEventListener('click', function () {}));
  defaultColor();
});

// Call the functions

defaultColor();

const smallSize = getSize(small, 20);
const mediumSize = getSize(medium, 40);
const bigSize = getSize(big, 60);

const colorRed = getColor(btnRed, 'red');
const colorBlue = getColor(btnBlue, 'blue');
const colorGreen = getColor(btnGreen, 'green');
const erase = getColor(btnErase, 'white');
