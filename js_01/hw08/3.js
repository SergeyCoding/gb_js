"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/
console.log("task3");
{

  const arr = [];

  for (let i = 0; i < 5; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  console.log("task 3");
  console.log("Random array:");
  console.log(arr);
  console.log("Sum:");
  console.log(arr.reduce((a, x) => a + x, 0));
  console.log("Min:");
  console.log(arr.reduce((a, x) => Math.min(a, x), Infinity));

  console.log("Indexes with value=3:");
  //console.log(arr.map((v, i) => (v === 3 ? i : NaN)).filter((v) => Number.isFinite(v)));
  const b = arr.reduce((a, v, i) => v === 3 ? [...a, i] : a, []);
  console.log(b);
}
