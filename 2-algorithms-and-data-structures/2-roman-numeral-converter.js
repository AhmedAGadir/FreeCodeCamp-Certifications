// https://www.math.nmsu.edu/~pmorandi/math111f01/RomanNumerals.html

const NUM_LETTERS = [['I', 'V'], ['X', 'L'], ['C', 'D'], 'M'];

function splitNum(num) {
    let digits = num.toString().split('');
    let arr = [];
    let n = 0;
    for (let i = digits.length - 1; i >= 0 ; i--) {
        arr.push((digits[i] * Math.pow(10, n)).toString())
        n++;
    }
    return arr
}

function convertToRoman(num) {
    let arr = splitNum(num);
    let result = [];
    let x;
    for (let i = 0; i < arr.length; i++) {
        x = '';
        if (arr[i] == 0) continue;
        if (arr[i][0] == 9) {
            x = NUM_LETTERS[i][0] + NUM_LETTERS[i+1][0];
            result.unshift(x);
            continue;
        } else if (arr[i][0] == 4) {
            x = NUM_LETTERS[i][0] + NUM_LETTERS[i][1];
            result.unshift(x);
            continue;
        } 
        if (arr[i][0] >= 5) {
            x += NUM_LETTERS[i][1];
            arr[i] -= 5 * Math.pow(10, i);
        }
        for (let j = 0; j < (arr[i]).toString()[0]; j++) {
            x += NUM_LETTERS[i][0]
        }
        result.unshift(x);
    }
    return result.join('');
}

console.log(convertToRoman(2)) // should return "II".
console.log(convertToRoman(3)) // should return "III".
console.log(convertToRoman(4)) // should return "IV".
console.log(convertToRoman(5)) // should return "V".
console.log(convertToRoman(9)) // should return "IX".
console.log(convertToRoman(12)) // should return "XII".
console.log(convertToRoman(16)) // should return "XVI".
console.log(convertToRoman(29)) // should return "XXIX".
console.log(convertToRoman(44)) // should return "XLIV".
console.log(convertToRoman(45)) // should return "XLV"
console.log(convertToRoman(68)) // should return "LXVIII"
console.log(convertToRoman(83)) // should return "LXXXIII"
console.log(convertToRoman(97)) // should return "XCVII"
console.log(convertToRoman(99)) // should return "XCIX"
console.log(convertToRoman(400)) // should return "CD"
console.log(convertToRoman(500)) // should return "D"
console.log(convertToRoman(501)) // should return "DI" 
console.log(convertToRoman(649)) // should return "DCXLIX" 
console.log(convertToRoman(798)) // should return "DCCXCVIII" 
console.log(convertToRoman(891)) // should return "DCCCXCI" 
console.log(convertToRoman(1000)) // should return "M" 
console.log(convertToRoman(1004)) // should return "MIV" 
console.log(convertToRoman(1006)) // should return "MVI" 
console.log(convertToRoman(1023)) // should return "MXXIII" 
console.log(convertToRoman(2014)) // should return "MMXIV" 
console.log(convertToRoman(3999)) // should return "MMMCMXCIX"













/* ================= MESSY VERSION ================= */

/* function splitNum(num) {
    let str = num.toString().split('');
    let arr = [];
    let n = 0;
    let val;
    for (let i = str.length - 1; i >= 0 ; i--) {
        arr.push((str[i] * Math.pow(10, n)).toString())
        n++;
    }
    return arr
}

const NUM_LETTERS = [['I', 'V'], ['X', 'L'], ['C', 'D'], 'M'];

function convertToRoman(num) {
    let arr = splitNum(num);
    console.log('arr is ', arr)
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        console.log('current num is ', arr[i])
        console.log('typeof arr[i] is ', typeof arr[i])
        console.log('arr[i][0] is ', arr[i][0])
        let x = '';
        if (arr[i] == 0) continue;
        if (arr[i][0] == 9) {
            console.log('equal to 9 * 10^i')
            x = NUM_LETTERS[i][0] + NUM_LETTERS[i+1][0];
            console.log('x is ', x);
            result.unshift(x);
            continue;
        } else if (arr[i][0] == 4) {
            console.log('equal to 4 * 10^i')
            x = NUM_LETTERS[i][0] + NUM_LETTERS[i][1];
            console.log('x is ', x);
            result.unshift(x);
            continue;
        } 

        if (arr[i][0] >= 5) {
            console.log('more than or equal to five * 10^i')
            x += NUM_LETTERS[i][1];
            arr[i] -= 5 * Math.pow(10, i);
        }

        console.log('arr[i] is now ', arr[i])
        console.log('arr[i][0] is now ', (arr[i]).toString()[0], typeof (arr[i]).toString()[0])

        for (let j = 0; j < (arr[i]).toString()[0]; j++) {
            console.log('(now) less than five * 10^i')
            x += NUM_LETTERS[i][0]
        }

        console.log('x iss ', x)
        result.unshift(x);

    }
    console.log(result)
    console.log(result.join(''))
    
    return result.join('');
}

convertToRoman(36); */