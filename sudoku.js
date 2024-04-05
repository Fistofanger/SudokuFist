function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
}

function solve() {
  const arr = [
    ["1", "-", "5"],
    ["8", "-", "2"],
    ["-", "-", "-"],
  ];
  let etalon = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const test = arr.join(",").split(",");
  const askArrSolved = test
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
  console.log(askArrSolved);

  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

solve();
function isSolved() {
  let etalon = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
  ];
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
