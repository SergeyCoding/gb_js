'use strict';

/*
Дан объект numbers. 
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/

console.log('*** task 01');
{
  const numbers = {
    key1: 12,
    key2: 2,
    key3: 4,
    key4: 1,
    key5: -244,
    key6: 0,
    key7: 7,
  };

  for (const key in numbers) {
    if (numbers.hasOwnProperty(key) && numbers[key] >= 3) {
      console.log(numbers[key]);
    }
  }
}
