const reverseString = function(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
};

// Do not edit below this line
module.exports = reverseString;
