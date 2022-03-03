const ftoc = function(temp) {
return (Math.round((temp - 32)*50/9)/10)
};

const ctof = function(temp) {
return (Math.round((temp*18)+320)/10)

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
