const fibonacci = function(term) {
let fib = [1, 1];
if (term < 0){ return "OOPS"}
term = parseInt(term);
if (term > 2) {
	for (let x=1; x <term; x++){
		let next = fib[x] + fib[x-1];
		fib.push(next);
	}
}return fib[term - 1];
};

// Do not edit below this line
module.exports = fibonacci;
