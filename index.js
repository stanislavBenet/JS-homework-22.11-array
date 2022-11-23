// 1) Знайти середнє арифметичне значення усіх переданих аргументів, якщо аргументів не має - повертати null

function averageArray() {
  let summ = 0;
  if (arguments.length > 0) {
    for (let i = 0; i < arguments.length; i++) {
      summ += arguments[i];
    }
    return summ / arguments.length;
  }
  return null;
}

console.log(averageArray(1, 2, 4, 5, 6, 7, 3, 4));

// 2) Замінити усі максимальні значення в масиві на значення 0

function changeAllMaxElementToZero(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      arr[i] = 0;
    }
  }
  return arr;
}
const array = [2,4,5,6,7,8,8,8,8,0,7,8,8]
console.log(changeAllMaxElementToZero(array));