// Task 1
// Создайте массив a. Выведите его на страницу. Элементы внутри вложенных массивов разделяйте пробелом, между вложенными массивами - перенос строки!
// const a = [
//   [1,2,3],
//   ['a','b','c'],
//   [ 4,5,6],
//   ['d','e','f'],
//   [ 7,8,9],
// ];

const a = [
  [1, 2, 3],
  ['a', 'b', 'c'],
  [4, 5, 6],
  ['d', 'e', 'f'],
  [7, 8, 9],
];
let div_1 = document.querySelector('.out-1');
let out_1 = '';
for (let i = 0; i < a.length; i++) {
  for (let k = 0; k < a[i].length; k++) {
    out_1 += a[i][k] + ' ';
  }
  out_1 += '<br>';
}
div_1.innerHTML = out_1;

// Task 2
// Выведите на страницу символ 3 из массива a.

let div_2 = document.querySelector('.out-2');
div_2.innerHTML = a[0][2];

// Task 3
// Выведите на страницу символ e из массива a.

let div_3 = document.querySelector('.out-3');
div_3.innerHTML = a[3][1];

// Task 4
// Выведите на страницу содержимое третьего вложенного массива в массиве a.

let div_4 = document.querySelector('.out-4');
div_4.innerHTML = a[3];

// Task 5
//Выведите на страницу только первые элементы вложенных массивов массива a.

let div_5 = document.querySelector('.out-5');
let out_5 = '';
for (let i = 0; i < a.length; i++) {
  for (let k = 0; k < a[i].length; k++) {
    if (k == 0) {
      out_5 += a[i][k];
    }
  }
  out_5 += '<br>';
}
div_5.innerHTML = out_5;

// Task 6
// Выведите на страницу только четные вложенные массивы массива a.

let div_6 = document.querySelector('.out-6');
let out_6 = '';
for (let i = 0; i < a.length; i++) {
  if (i % 2 == 0) {
    out_6 += a[i];
  }
  out_6 += '<br>';
}
div_6.innerHTML = out_6;

// Task 7
// Выведите на страницу только числа из массива a.

let div_7 = document.querySelector('.out-7');
let out_7 = '';
for (let i = 0; i < a.length; i++) {
  for (let k = 0; k < a[i].length; k++) {
    if (isNaN(a[i][k]) == false) {
      out_7 += a[i][k] + ' ';
    }
  }
}
div_7.innerHTML = out_7;

// Task 8
// Выведите на страницу длины вложенных массивов в массив a.

let div_8 = document.querySelector('.out-8');
let out_8 = '';
for (let i = 0; i < a.length; i++) {
  out_8 += a[i].length;
  out_8 += '<br>';
}
div_8.innerHTML = out_8;

// Task 9
// Выведите на страницу элементы массива a в обратном порядке, т.е.
// 9 8 7 f e ...

let div_9 = document.querySelector('.out-9');
let out_9 = '';
for (let i = a.length - 1; i >= 0; i--) {
  for (let k = a[i].length - 1; k >= 0; k--) {
    out_9 += a[i][k] + ' ';
  }
}
div_9.innerHTML = out_9;


// Task 10
// Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке:
// 3 2 1
// c b a
// 6 5 4

let div_10 = document.querySelector('.out-10');
let out_10 = '';
for (let i = 0; i < a.length; i++) {
  for (let k = a[i].length - 1; k >= 0; k--) {
    out_10 += a[i][k] + ' ';
  }
  out_10 += '<br>';
}
div_10.innerHTML = out_10;

// Task 11
// Создайте массив шахматную доску. Белые - 0, черные - 1. Выведите на страницу.

let div_11 = document.querySelector('.out-11');
let arr11 = [];
let out_11 = '';
let k11 = 0;
for (let i = 0; i < 8; i++) {
  arr11[i] = [];
  for (let k = 0; k < 8; k++) {
    if (k11 % 2 == 0) {
      arr11[i][k] = '0';
      out_11 += arr11[i][k] + ' &nbsp ';
      k11 += 1;
    }
    else {
      arr11[i][k] = '1';
      out_11 += arr11[i][k] + ' &nbsp ';
      k11 += 1;
    }
  }
  k11 += 11;
  out_11 += '<br>';
}
div_11.innerHTML = out_11;

// Task 12
// Создайте массив шахматную доску. Белые - 0, черные - 1. Напишите функцию, которая выводит данный массив в виде шахматной доски - блоки div в нужном порядке, закранные цветом.

let arr12 = [];
let k12 = 0;
for (i = 0; i < 8; i++) {
  arr12[i] = [];
  for (let k = 0; k < 8; k++) {
    if (k12 % 2 == 0) {
      arr12[i][k] = '0';
      k12 += 1;
    }
    else {
      arr12[i][k] = '1';
      k12 += 1;
    }
  }
  k12 += 1;
}
function boardChess() {
  let out_12 = document.querySelector('.out-12');
  let board;
  for (let i = 0; i < 8; i++) {
    for (let k = 0; k < 8; k++) {
      board = document.createElement('div');
      board.classList.add('cell');
      out_12.appendChild(board);
      if (arr12[i][k] == '0') {
        board.classList.add('white');
      }
      else {
        board.classList.add('black');
      }
    }
  }
}
boardChess();

// Task 13
// Создайте массив, который подходит под следующие условия:
// b[0][1] == 4;
// b[3][2] == 5

let b = [
  [17, 4, 28],
  [1, 21, 11],
  [33, 51, 67],
  [50, 91, 5],
];

// Task 14
// Создайте массив, который подходит под следующие условия:
// c[0][1] == 4;
// c[2] == 5

let c = [
  [77, 4],
  [88, 6],
  [5],
];

// Task 15
// Создайте массив, который подходит под следующие условия:
// d[0][1] == 4;
// d[2][3] == 5
// d[6] = [4,5]

let d = [
  [17, 4, 28, 17],
  [1, 21, 11, 24],
  [33, 51, 67, 5],
  [50, 91, 5, 57],
  [],
  []
  [4, 5]
];

// Task 16
// Создайте массив, который подходит под следующие условия:
// e[0][1] == 4;
// e[2][3] == 5
// e[6][0][1] = 6;

let e = [
  [0, 4],
  [],
  [0, 0, 5],
  [],
  [],
  [],
  [[25, 6]],
];

// Task 17
// Создайте массив, который подходит под следующие условия:
// f[0][1][3] == 4;
// f[2][1][1] == 5
// f[6][0][1] = 6;

let f = [
  [[], [4, 5, 14, 4]],
  [],
  [[], [67, 5]],
  [],
  [],
  [],
  [[25, 6]],
];

// Task 18
// Создайте массив, который подходит под следующие условия:
// g[0][1][3] == 4;
// g[2][1][3] == 5
// g[6][0][1] = 6;
// g[3] == g[5]; 

let g = [
  [[], [4, 5, 14, 4]],
  [],
  [[], [67, 7, 77, 5]],
  [50],
  [],
  [50],
  [[5, 6]],
];

// Task 19
// Выведите на страницу сумму элементов массива a (только чисел).

let div_19 = document.querySelector('.out-19');
let out_19 = 0;
for (let i = 0; i < a.length; i++) {
  for (let k = 0; k < a[i].length; k++) {
    if (isNaN(a[i][k]) == false) {
      out_19 += a[i][k];
    }
  }
}
div_19.innerHTML = out_19;

// Task 20
// Создайте массив, который эмулирует доску для крестиков - ноликов, напишите все возможные выиграшные комбинации, т.е. a[0][0], a[0][1], a[0][2] - занята первая линия, и т.д.

let l = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// l[0][0], l[0][1], l[0][2];
// l[1][0], l[1][1], l[1][2];
// l[2][0], l[2][1], l[2][2];

// l[0][0], l[1][0], l[2][0];
// l[0][1], l[1][1], l[2][1];
// l[0][2], l[1][2], l[2][2];

// l[0][0], l[1][1], l[2][2];
// l[0][2], l[1][1], l[2][0];
