// localStorage.setItem('name', 'Aleksey');
// localStorage.setItem('lastname', 'Sidorov');
// localStorage.setItem('email', 'test@email.ru');

// localStorage.removeItem('name');

// const email = localStorage.getItem('email');
// console.log(email);

// // localStorage.user = { name: 'Aleksey' };
// localStorage.user = JSON.stringify({ name: 'Aleksey' });

// const user = JSON.parse(localStorage.user);
// console.log(user);

// localStorage.clear();

// Асинхронщина

// const myPromise = new Promise((resolve, reject) => {
// 	// Асинхронный код
// });

// console.log(myPromise);

// myPromise
// 	.then((value) => {
// 		// действие в случае выполнения промиса
// 	})
// 	.catch((error) => {
// 		// Действия в случае отклонения промиса
// 	});

// Пример

const url = 'https://jsonplaceholder.typicode.comusers';

// fetch(url)
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))
// 	.catch((error) => console.error('Что-то пошло не так'));

// упрощение

// const getData = (url) =>
// 	new Promise((resolve, reject) => {
// 		fetch(url)
// 			.then((response) => response.json())
// 			.then((data) => resolve(data))
// 			.catch((error) => reject(error));
// 	});

// console.log(getData('https://jsonplaceholder.typicode.com/posts'));

// getData('https://jsonplaceholder.typicode.com/posts')
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log('Что-то пошло не так'));

// async-await

const getData2 = async (url) => {
	const res = await fetch(url);
	const data = await res.json();
	return data;
};

try {
	const data = await getData2(url);
	console.log(data);
} catch (error) {
	console.log('Что-то пошло не так');
}
