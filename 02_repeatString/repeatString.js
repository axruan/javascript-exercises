const repeatString = function(string, repeat) {
    if (repeat < 0) {
        return "ERROR";
    }

    let repeatedString = string;

    for (let i = 1; i < repeat; i++) {
        repeatedString = repeatedString + string;
    }

    return repeat == 0 ? "" : repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
