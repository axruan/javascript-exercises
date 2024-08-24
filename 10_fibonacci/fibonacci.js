const fibonacci = function(n) {
    n = parseInt(n);
    let a = 0;
    let b = 1;
    let sum = 0;

    if (n === 0) {
        return a;
    } else if (n < 0) {
        return "OOPS";
    }

    for (let i = 2; i < n + 1; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
