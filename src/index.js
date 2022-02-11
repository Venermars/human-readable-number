module.exports = function toReadable (number) {
    let stringNumber = String(number);
    let result = '';
    
    /* zero */
   if (stringNumber === '0') return 'zero';

    /* 999 - 100 (hundreds)*/
    if (stringNumber > 99) {
        stringNumber[0] === '9' ? result += 'nine hundred '
            : stringNumber[0] === '8' ? result += 'eight hundred '
            : stringNumber[0] === '7' ? result += 'seven hundred '
            : stringNumber[0] === '6' ? result += 'six hundred '
            : stringNumber[0] === '5' ? result += 'five hundred '
            : stringNumber[0] === '4' ? result += 'four hundred '
            : stringNumber[0] === '3' ? result += 'three hundred '
            : stringNumber[0] === '2' ? result += 'two hundred '
            : result += 'one hundred ';

        stringNumber = stringNumber.substring(1);
    }

    /* 19 - 10 */
    if (stringNumber <= 19 && stringNumber >= 10) {
        stringNumber === '19' ? result += 'nineteen'
            : stringNumber === '18' ? result += 'eighteen'
            : stringNumber === '17' ? result += 'seventeen'
            : stringNumber === '16' ? result += 'sixteen'
            : stringNumber === '15' ? result += 'fifteen'
            : stringNumber === '14' ? result += 'fourteen'
            : stringNumber === '13' ? result += 'thirteen'
            : stringNumber === '12' ? result += 'twelve'
            : stringNumber === '11' ? result += 'eleven'
            : stringNumber === '10' ? result += 'ten'
            : null;
        return result;
    }

    /* 99 - 20 (tenners) */
    if (stringNumber > 19) {
        stringNumber[0] === '9' ? result += 'ninety '
            : stringNumber[0] === '8' ? result += 'eighty '
            : stringNumber[0] === '7' ? result += 'seventy '
            : stringNumber[0] === '6' ? result += 'sixty '
            : stringNumber[0] === '5' ? result += 'fifty '
            : stringNumber[0] === '4' ? result += 'forty '
            : stringNumber[0] === '3' ? result += 'thirty '
            : stringNumber[0] === '2' ? result += 'twenty '
            : null;
    }

    stringNumber.length !== 1 ? stringNumber = stringNumber.substring(1) : null;
    
    /* 99 - 20 & 9 - 1 (units) */
    stringNumber === '9' ? result += 'nine'
        : stringNumber === '8' ? result += 'eight'
        : stringNumber === '7' ? result += 'seven'
        : stringNumber === '6' ? result += 'six'
        : stringNumber === '5' ? result += 'five'
        : stringNumber === '4' ? result += 'four'
        : stringNumber === '3' ? result += 'three'
        : stringNumber === '2' ? result += 'two'
        : stringNumber === '1' ? result += 'one'
        : null;
    
};
