// plik scripts.js
	var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
	var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
	var allNames = femaleNames.concat(femaleNames,maleNames);
	var newName ='Marian'
	
	if (allNames.indexOf(newName) === -1) {
		var addName = allNames.push('Marian');
	}
	console.log(allNames);