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
  for (let i = 0; i < arrSudoku.length; i += 9) {
    playingField.push(arrSudoku.slice(i, i + 9));
  }
  return playingField;
}

function solve() {
  /*
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved(num) {
  let arrSlove = solve(num);

  let newArrSlove = [];
  for (let el of arrSlove) {
    for (let i = 0; i < el.length; i += 3) {
      newArrSlove.push(el.slice(i, i + 3));
    }
  }

  let resultHorizon;
  for (let i = 0; i <= 3; i += 3) {
    if (
      newArrSlove[i].join("") !== newArrSlove[i + 1].join("") &&
      newArrSlove[i].join("") !== newArrSlove[i + 2].join("") &&
      newArrSlove[i + 1].join("") !== newArrSlove[i + 2].join("")
    ) {
      resultHorizon = true;
    } else {
      resultHorizon = false;
    }
  }

  let resultVertical;
  for (let i = 0; i <= 3; i += 1) {
    if (
      newArrSlove[i].join("") !== newArrSlove[i + 3].join("") &&
      newArrSlove[i].join("") !== newArrSlove[i + 6].join("") &&
      newArrSlove[i + 3].join("") !== newArrSlove[i + 9].join("")
    ) {
      resultVertical = true;
    } else {
      resultVertical = false;
    }
  }

  if (resultVertical && resultHorizon) {
    return arrSlove;
  } else {
    solve(num);
  }
  //   for (let i = 0; i < newArrSlove.length; i += 3) {
  //     if (
  //       newArrSlove[i].join("") !== newArrSlove[i + 1].join("") &&
  //       newArrSlove[i].join("") !== newArrSlove[i + 2].join("") &&
  //       newArrSlove[i + 1].join("") !== newArrSlove[i + 2].join("")
  //     ) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  // }

  //playngField - игровое поле, двумерный массив, где вложенные масивы это строки по 9 элементов
  // let playingField = [];
  // for (let i = 0; i < arrSudoku.length; i += 9) {
  //   playingField.push(arrSudoku.slice(i, i + 9));
  // }

  //проверка по горизонтали
  // for (let el of arrSlove) {
  //   let filter = [...new Set(el)];
  //   console.log(filter);
  //   if (filter.join("") === el.join("")) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}
isSolved();
/*
 * Принимает игровое поле в том формате, в котором его вернули из функции solve.
 * Возвращает булевое значение — решено это игровое поле или нет.
 */

// console.log(isSolved());
function prettyBoard() {
  /*
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
