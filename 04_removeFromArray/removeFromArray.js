const removeFromArray = function(arr, ...args) {
    newArr = [];
    for(const element of arr){
        if(!args.includes(element)){
            newArr.push(element);
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
