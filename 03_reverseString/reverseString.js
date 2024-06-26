const reverseString = function(string) {
    length = string.length;
    let newString = "";
    for (let i = 0; i <= length; i ++) {
        newString += string.substr(length-i, 1);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
