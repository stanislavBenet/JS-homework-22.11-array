// 1) Знайти середнє арифметичне значення усіх переданих аргументів, якщо аргументів не має - повертати null

// function middleValueArray() {
//   let summ = 0;
//   if (arguments.length > 0) {
//     for (let i = 0; i < arguments.length; i++) {
//       summ += arguments[i];
//     }
//     return summ / arguments.length;
//   }
//   return null;
// }

// middleValueArray();

// // 2) Замінити усі максимальні значення в масиві на значення 0

// function changeAllMaxElementToNull(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === max) {
//       arr[i] = 0;
//     }
//   }
//   return arr;
// }
let middleval = 0;
let array1 = [2, 4, 5, 11, 25, 11, 25, 1, 2, 4, 5, 25];
let middle = array1.reduce(middleval);
