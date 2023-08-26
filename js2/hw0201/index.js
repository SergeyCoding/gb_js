// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве,
//решение задание должно состоять из одной строки
console.log('*** task 01');
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
console.log('*** task 02');

function createCounter(countInit) {
  let counter = countInit;
  return {
    increment: () => ++counter,
    decrement: () => --counter,
  };
}

const { increment, decrement } = createCounter(5);
console.log(increment());
console.log(increment());
console.log(decrement());
console.log(increment());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название
// класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

console.log('*** demo in index03.html');
function findElementByClass(element, className) {
  if (element === null) {
    return null;
  }

  if (element.classList.contains(className)) {
    return element;
  }

  for (const node of element.childNodes) {
    if (node.nodeType === 1) {
      const el = findElementByClass(node, className);
      if (el !== null) {
        return el;
      }
    }
  }

  return null;
}

// Если не знакомы с DOM-деревом:

// 3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// // примеры вызова функции
// console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)
console.log('*** task 03');

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
console.log(factorial(0)); // выводит 1 (по определению факториала)
