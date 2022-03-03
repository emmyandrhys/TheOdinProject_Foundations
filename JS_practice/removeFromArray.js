const removeFromArray = function (array, ...items) {
    for (let i=array.length-1;i>=0; --i) {
    for(let n=0; n<items.length;n++){
    if(items[n]===array[i
    ]){
    console.log("match");
    array.splice(i,1)
    console.log(i);
    console.log(array);}
    }
    }
    
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;
