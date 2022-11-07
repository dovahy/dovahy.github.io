//const options = {
//	method: 'GET',
//	headers: {
//		'X-RapidAPI-Key': '21c15eb0f1mshd47017c6ee4cd2dp1db1d5jsnf098b3fb6bcd',
//		'X-RapidAPI-Host': 'steamcharts.p.rapidapi.com'
//	}
//};
//
//fetch('https://steamcharts.p.rapidapi.com/api/v1/games/tops', options)
//	.then(response => response.json())
//	.then(response => console.log(response))
//	.catch(err => console.error(err));

//fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=2' , {
//	method: 'GET'
//	
//})
//	.then(res => res.json())
//	.then(data => console.log(data))
//
//const deckID = () => {
//
//}

//async function fetchDeckID() {
//	try {
//		const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6', {
//			method: 'GET',
//			credentials: 'deck_id'
//		});
//		const deckID = await response.json();
//		return deckID;
//	} catch (error) {
//		console.error(error);
//	}
//}
//
//fetchDeckID()
//
//console.log(deckID);
//

document.querySelector('#search').addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
	return string.toLowerCase();
}

function getPokemon(e) {
	const name = document.querySelector('#pokemonName').value;
	const pokemonName = lowerCaseName(name);

	fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
		.then((response) => response.json())
		.then((data) => {
			document.querySelector(".pokemonDiv").innerHTML = 
			`
			<div>
                <img src="${data.sprites.other["official-artwork"].front_default}" alt="${capitalizeFirstLetter(data.name)}">
            </div>

            <div class="pokemonInfo">
                <h1>${capitalizeFirstLetter(data.name)}</h1>
                <p>Weight: ${data.weight} KG</p>
            </div>
			`;
		})
		.catch((error) => {
			console.log("Pokemon not found", error);
		});

	e.preventDefault();
}