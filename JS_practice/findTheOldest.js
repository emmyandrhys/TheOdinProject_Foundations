const findTheOldest = function(people) {
let year = new Date().getFullYear();
for (person of people) {
	if (person.yearOfDeath) { }
	else (person.yearOfDeath = year)
}
var sorted = people.sort((a,b)=> (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth) ? 1: -1, 0)
return sorted[0]
};
// Do not edit below this line
module.exports = findTheOldest;
