"use strict";

/*
###Задание 2
Вы управляете рестораном, в котором работают разные повара, специализирующиеся 
на определенных блюдах. Клиенты приходят и делают заказы на разные блюда.

Необходимо создать систему управления этими заказами, которая позволит:

Отслеживать, какой повар готовит какое блюдо.
Записывать, какие блюда заказал каждый клиент.
Используйте коллекции Map для хранения блюд и их поваров, а также для хранения
заказов каждого клиента. В качестве ключей для поваров и клиентов используйте 
объекты.

Повара и их специализации:
Виктор - специализация: Пицца.
Ольга - специализация: Суши.
Дмитрий - специализация: Десерты.

Блюда и их повара:
Пицца "Маргарита" - повар: Виктор.
Пицца "Пепперони" - повар: Виктор.
Суши "Филадельфия" - повар: Ольга.
Суши "Калифорния" - повар: Ольга.
Тирамису - повар: Дмитрий.
Чизкейк - повар: Дмитрий.

Заказы:
Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
Клиент Ирина заказала: Чизкейк.
*/

console.log("\n###Задание 2");

const cooks = new Map();
cooks.set("Виктор", "Пицца");
cooks.set("Ольга", "Суши");
cooks.set("Дмитрий", "Десерты");

console.log(cooks);

const food = new Map();
food.set("Пицца", new Set(['Пицца "Маргарита"', 'Пицца "Пепперони"']));
food.set("Суши", new Set(['Суши "Филадельфия"', 'Суши "Калифорния"']));
food.set("Десерты", new Set(["Тирамису", "Чизкейк"]));
console.log(food);

const orders = [];
orders.push({ orderId: 1, client: "Алексей", order: new Set(['Пицца "Пепперони"', "Тирамису"]) });
orders.push({ orderId: 2, client: "Мария", order: new Set(['Суши "Калифорния"', 'Пиццу "Маргарита"']) });
orders.push({ orderId: 3, client: "Ирина", order: new Set(["Чизкейк"]) });
console.log(orders);

function makeOrder(client, food) {}

function tasksForCooks() {}
