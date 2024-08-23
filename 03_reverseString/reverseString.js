const reverseString = function(s) {
    const charArray = s.split('');
    let string = '';

    for (let i = charArray.length - 1; i > -1; i--) {
        string += charArray[i];
    }

    return s == null ? '' : string;

};

// Do not edit below this line
module.exports = reverseString;
