const removeFromArray = function(array, ...index) {
    return array.filter(val => !index.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
