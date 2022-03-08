const palindromes = function (palindromes) {
	let clean = "";
	let palindome = palindromes.toLowerCase();
	let regex = /[a-z]/
	for (char of palindome) {
		 if (regex.test(char) ) {
			clean += char;
		 }
	} for (let i=0; i <clean.length; i++){
		let j = clean.length - i - 1;
		if (clean[i] != clean[j]) { return false}
	} return true;
};

// Do not edit below this line
module.exports = palindromes;
