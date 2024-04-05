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

function solve(num) {
  const arr = read(num);
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
    return true;
  } else {
    solve(num);
  }
}

function isSolved() {}
  


// console.log(isSolved());
function prettyBoard() {
  /*
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}

module.exports = {
  isSolved
};