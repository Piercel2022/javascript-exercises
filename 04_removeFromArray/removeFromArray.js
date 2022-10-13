const removeFromArray = function(arr, value) {
    return arr.filter(function(geeks){
        return geeks != value;
    });
};

// Do not edit below this line
module.exports = removeFromArray;
