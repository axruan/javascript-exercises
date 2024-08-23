const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    } 
    if (num1 % 1 != 0 || num2 % 1 != 0) {
        return "ERROR";
    }

    let sum = 0;
    const hi = num1 > num2 ? num1 : num2;
    const lo = num1 > num2 ? num2 : num1;
    
    for (let i = lo; i < hi + 1; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
