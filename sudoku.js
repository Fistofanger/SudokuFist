function read(match) {
  const fs = require("fs");
  const { EOL } = require("os");
  const puzzlesTxt = fs.readFileSync("./puzzles.txt", "utf-8");

  //arrPuzzles - одномерный массивб каждый элемент это строка из puzzle.txt
  const arrPuzzles = puzzlesTxt.split(EOL);

  //arrSudoku - массив где каждый элемент это одно значение всего судоку (81 элемент)
  let arrSudoku;
  for (let i = 0; i <= arrPuzzles.length; i += 1) {
    arrSudoku = arrPuzzles[match - 1].split("");
    break;
  }

  //playngField - игровое поле, двумерный массив, где вложенные масивы это строки по 9 элементов
  let playingField = [];
  for (var i = 0; i < arrSudoku.length; i += 9) {
    playingField.push(arrSudoku.slice(i, i + 9));
  }
  return playingField;
}

function solve() {
  const arr = read(5);
  const askArrSolved = [];
  for (let i = 0; i < arr.length; i += 1) {
    let etalon = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    askArrSolved[i] = arr[i]
      .map((el) => {
        if (el !== "-") {
          etalon.splice(etalon.indexOf(el), 1);
          return el;
        } else {
          return el;
        }
      })
      .map((el) => {
        if (el === "-") {
          let index = Math.floor(Math.random() * etalon.length);
          el = etalon[index];
          etalon.splice(index, 1);
          return el;
        } else {
          return el;
        }
      });
  }

  return askArrSolved;
}

/*

function isSolved() {
  
  /**

console.log(solve());
function isSolved() {
  /*

   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
//}

function prettyBoard() {
  /*
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
