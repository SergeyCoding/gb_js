'use strict';

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

console.log('\n###Задание 2');

class Restaurant {
  orders = new Map();

  constructor(cooks, food) {
    this.cooks = cooks;
    this.food = food;
  }

  /**
   * Сделать заказ
   * @param {{client:string}} client
   * @param {[string]} food
   */
  makeOrder(client, ...food) {
    if (this.orders.has(client)) {
      this.orders[client].push(food);
    } else {
      this.orders.set(client, food);
    }
  }

  /**
   * блюда, заказанные клиентом
   * @param {{client:string}} client
   * @returns {[string]}
   */
  getOrder(client) {
    if (this.orders.has(client)) {
      return this.orders.get(client);
    } else {
      return [];
    }
  }

  /**
   * какой повар готовит какое блюдо.
   */
  getTasksForCooks(cook) {
    const result = [];

    for (const order of this.orders.values()) {
      for (let i = 0; i < order.length; i++) {
        const spec = this.food.get(order[i]);
        if (cook.specialization === spec) {
          result.push(order[i]);
        }
      }
    }

    return result;
  }
}

const cooks = [
  { name: 'Виктор', specialization: 'Пицца' },
  { name: 'Ольга', specialization: 'Суши' },
  { name: 'Дмитрий', specialization: 'Десерты' },
];

const food = new Map();
food.set('Пицца "Маргарита"', 'Пицца');
food.set('Пицца "Пепперони"', 'Пицца');
food.set('Суши "Филадельфия"', 'Суши');
food.set('Суши "Калифорния"', 'Суши');
food.set('Тирамису', 'Десерты');
food.set('Чизкейк', 'Десерты');

const rest = new Restaurant(cooks, food);

const clients = [{ client: 'Алексей' }, { client: 'Мария' }, { client: 'Ирина' }];

rest.makeOrder(clients[0], 'Пицца "Пепперони"', 'Тирамису');
rest.makeOrder(clients[1], 'Суши "Калифорния"', 'Пицца "Маргарита"');
rest.makeOrder(clients[2], 'Чизкейк');

// console.log(rest);

console.log('\nКлиенты');
for (const client of clients) {
  console.log(`Заказ ${client.client}: ${rest.getOrder(client)}`);
}

console.log('\nПовара');

for (const cook of cooks) {
  console.log(`Повар ${cook.name} готовит: ${rest.getTasksForCooks(cook)}`);
}
