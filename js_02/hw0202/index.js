// Домашнее задание

// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  displayInfo() {
    console.log(
      `название: ${this.title}, автор: ${this.author}, количество страниц: ${this.pages} с.`
    );
  }
}

const b = new Book('Война и мир', 'Толстой Л.Н.', '400');
b.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

// // Пример использования класса
// const student1 = new Student(""John Smith"", 16, ""10th grade"");
// student1.displayInfo();
// // Вывод:
// // Name: John Smith
// // Age: 16
// // Grade: 10th grade

// const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
// student2.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Age: 17
// // Grade: 11th grade"
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  displayInfo() {
    console.log('Name: ', this.name);
    console.log('Age: ', this.age);
    console.log('Grade: ', this.grade);
  }
}
const student1 = new Student('John Smith', 16, '10th grade');
student1.displayInfo();
console.log();
const student2 = new Student('Jane Doe', 17, '11th grade');
student2.displayInfo();

// Необязательные задачи

// 1
// Создать класс "Телефонная книга" с методами для добавления, удаления и поиска контактов по имени или номеру телефона.

// // Пример использования
// let phonebook = new Phonebook();
// phonebook.addContact("Иванов", "123-45-67");
// phonebook.addContact("Петров", "987-65-43");
// console.log(phonebook.findContactByName("Иванов")); // { name: "Иванов", phone: "123-45-67" }
// console.log(phonebook.findContactByPhone("987-65-43")); // { name: "Петров", phone: "987-65-43" }
// phonebook.deleteContact("Иванов");
// console.log(phonebook.contacts); // [{ name: "Петров", phone: "987-65-43" }]

class Phonebook {
  contacts = [];

  addContact(name, phone) {
    this.contacts.push({ name, phone });
  }

  findContactByName(name) {
    return this.contacts.find((x) => x.name === name);
  }

  findContactByPhone(phone) {
    return this.contacts.find((x) => x.phone === phone);
  }

  deleteContact(name) {
    const pos = this.contacts.reduce(
      (p, c, i) => (p >= 0 ? p : c.name === name ? i : -1),
      -1
    );
    if (pos >= 0) {
      this.contacts.splice(pos, 1);
    }
  }
}

let phonebook = new Phonebook();
phonebook.addContact('Иванов', '123-45-67');
phonebook.addContact('Петров', '987-65-43');
console.log(phonebook.findContactByName('Иванов')); // { name: "Иванов", phone: "123-45-67" }
console.log(phonebook.findContactByPhone('987-65-43')); // { name: "Петров", phone: "987-65-43" }
phonebook.deleteContact('Иванов');
console.log(phonebook.contacts); // [{ name: "Петров", phone: "987-65-43" }]

// 2
// Это расширенная версия задачи с банком, которую мы решлали на семинаре:

// Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов.
// Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета,
// снятия денег со счета и проверки баланса.

// Пример работы:

// const bank = new Bank("Мой Банк");

// const client1 = new Client("Иван", 25);
// const client2 = new Client("Мария", 30);

// bank.addClient(client1);
// bank.addClient(client2);

// bank.openAccount(client1, 1000);
// bank.openAccount(client2, 500);

// bank.deposit(123456789, 200);
// bank.withdraw(987654321, 100);
// bank.checkBalance(123456789);
// bank.checkBalance(987654321);

class Bank {
  clients = [];
  accounts = {};
  constructor(name) {
    this.name = name;
  }

  addClient(client) {
    this.clients.push(client);
  }

  openAccount(client, account, sum) {
    this.accounts[account] = { client, sum };
  }

  deposit(account, sum) {
    this.accounts[account].sum += sum;
  }

  withdraw(account, sum) {
    if (this.accounts[account].sum < sum) {
      console.log('Ошибка. Недостаточно средств');
      return;
    }
    this.accounts[account].sum -= sum;
  }

  checkBalance(account) {
    console.log(`Account: ${account}, Balance:`, this.accounts[account].sum);
  }
}

class Client {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const bank = new Bank('Мой Банк');

const client1 = new Client('Иван', 25);
const client2 = new Client('Мария', 30);

bank.addClient(client1);
bank.addClient(client2);

bank.openAccount(client1, 123456789, 1000);
bank.openAccount(client2, 987654321, 500);

bank.deposit(123456789, 200);
bank.withdraw(987654321, 100);
bank.checkBalance(123456789);
bank.checkBalance(987654321);
