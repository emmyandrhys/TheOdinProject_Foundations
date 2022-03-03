const reverseString = function(string) {
var reversed="";
for(let stringLength=string.length; stringLength>0; stringLength--){
reversed+=string[stringLength-1];
}
return reversed;
};

// Do not edit below this line
module.exports = reverseString;
