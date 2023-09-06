/* https://api.nasa.gov/ */

async function myAsync(url) {
	const response = await fetch(url);
	const json = await response.json();
	return json;
}
const body = document.querySelector('body');
const url = 'https://api.nasa.gov/planetary/apod?api_key=VG7hcoFMcSvGDhlJh3ylikHVk7Q8Q4Op8ZFDomGN&count=10';

try {
	const myData = await myAsync(url);
	console.log(myData);
	myData.forEach((el) => {
		body.insertAdjacentHTML(
			'beforeend',
			`
				<figure>
					<img src="${el.url}" />
					<figcaption>${el.explanation}</figcaption>
				</figure>
  		`
		);
	});
} catch (error) {
	console.log(error.message);
}
