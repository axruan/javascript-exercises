const palindromes = function (str) {
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase(); 
    const mid = str.length % 2 === 0 ? str.length / 2 : Math.floor(str.length) + 1
    
    for (let i = 0; i < mid; i++) {
      if (str.charAt(i) !== str.charAt(str.length - 1 - i)) {
        return false;
      }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
