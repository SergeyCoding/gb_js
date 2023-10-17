"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books.
2. Реализуйте геттер allBooks, который возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

console.log("###Задание 1");

class Library {
  #books = new Set();

  /**
   *
   * @param {[string]} books
   */
  constructor(books) {
    if (!Array.isArray(books)) {
      throw new Error("Ожидался начальный список книг (массив) в качестве аргумента");
    }
    books.forEach((x) => this.#books.add(x));
    if (this.#books.size !== books.length) {
      throw new Error("Начальный список книг содержит дубликаты");
    }
  }

  /**
   * @returns {[string]}
   */
  get allBooks() {
    return Array.from(this.#books);
  }

  /**
   *
   * @param {string} title
   */
  addBook(title) {
    if (this.hasBook(title)) {
      throw new Error("Книга с таким названием уже существует в списке");
    }

    this.#books.add(title);
  }

  /**
   *
   * @param {string} title
   */
  removeBook(title) {
    if (!this.hasBook(title)) {
      throw new Error("книги с таким названием нет в списке");
    }
    this.#books.delete(title);
  }

  /**
   *
   * @param {string} title
   * @returns {boolean}
   */
  hasBook(title) {
    return this.#books.has(title);
  }
}
