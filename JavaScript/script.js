lancerJeu();

function lancerJeu() {
	// let monMot = prompt("gime:")
	// console.log("you gave:" + monMot);
	let	compteur = 0;
	let monMot = document.getElementById("motUser")
	console.log(monMot)
	
	let validerMot = document.getElementById("validerMot")
	validerMot.addEventListener("click", () => {
		validateEntry(++compteur);
	});
	console.log(validerMot)
	
	let zoneScore = document.querySelector(".zoneScore span")
	console.log(zoneScore)
	
	monMot.addEventListener('keypress', (event) => {
		if (event.key === 'Enter') {
			validateEntry(++compteur);
		}
	})
	
	document.addEventListener('click', (event) => {
		console.log(event.clientX, event.clientY)
	})
}

function validateEntry(compteur) {
	
	let monMot = document.getElementById("motUser")
	let validerMot = document.getElementById("validerMot")
	let zoneScore = document.querySelector(".zoneScore span")

	console.log("pushed button or pressed enter " + compteur + " times, mot=" + monMot.value)
	zoneScore.innerText = compteur;
	if (compteur >= 5) {
		validerMot.disabled = true;
		monMot.disabled = true;
	}
	monMot.value = "";
}

const form = document.querySelector('form');
form.addEventListener("submit", (event) => {
	event.preventDefault();
});