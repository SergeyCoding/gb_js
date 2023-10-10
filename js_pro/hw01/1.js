"use strict";

/*
###Задание 1
Создайте обычный объект "Музыкальная коллекция", который можно итерировать. 
Каждая итерация должна возвращать следующий альбом из коллекции. Коллекция 
альбомов - это массив внутри нашего объекта (создать несколько альбомов самому).
Каждый альбом имеет следующую структуру:
{
  title: "Название альбома",
  artist: "Исполнитель",
  year: "Год выпуска"
}
Используйте цикл for...of для перебора альбомов в музыкальной коллекции и 
вывода их в консоль в формате:
"Название альбома - Исполнитель (Год выпуска)"
*/

// const album = {
//   title: "Название альбома",
//   artist: "Исполнитель",
//   year: "Год выпуска",
// };

console.log("###Задание 1");

const MusicCollection = {
  albums: [],
  [Symbol.iterator]: function () {
    let current = 0;
    return {
      next: () => {
        if (current >= this.albums.length) {
          return { done: true };
        }

        return { value: this.albums[current++], done: false };
      },
    };
  },
};

MusicCollection.albums.push({ title: "title 001", artist: "artist 001", year: "2005" });
MusicCollection.albums.push({ title: "title 002", artist: "artist 002", year: "2007" });
MusicCollection.albums.push({ title: "title 003", artist: "artist 003", year: "2009" });
MusicCollection.albums.push({ title: "title 004", artist: "artist 004", year: "2011" });
MusicCollection.albums.push({ title: "title 005", artist: "artist 005", year: "2013" });
MusicCollection.albums.push({ title: "title 006", artist: "artist 006", year: "2015" });
MusicCollection.albums.push({ title: "title 007", artist: "artist 007", year: "2017" });

console.log(MusicCollection);

for (const album of MusicCollection) {
  console.log(album);
}
