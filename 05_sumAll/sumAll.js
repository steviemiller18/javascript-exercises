const sumAll = function(int1, int2) {
    if (int1 < 0 || int2 < 0) return 'ERROR';
    if (!Number.isInteger(int1) || !Number.isInteger(int2)) return 'ERROR';
    let sum = 0;
    let min;
    let max;
    if (int1 < int2) {
        min = int1;
        max = int2;
    }
    else {
        min = int2;
        max = int1;
    }
    for (let i = min; i <= max; i ++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
