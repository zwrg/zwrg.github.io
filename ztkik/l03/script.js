const arrays = [[
    {char: 'a', key: 3},
    {char: 'b', key: 15},
    {char: 'c', key: 20},
    {char: 'd', key: 8},
    {char: 'e', key: 16},
    {char: 'f', key: 22},
    {char: 'g', key: 1},
    {char: 'h', key: 18},
    {char: 'i', key: 11},
    {char: 'j', key: 6},
    {char: 'k', key: 23},
    {char: 'l', key: 13},
    {char: 'm', key: 4},
    {char: 'n', key: 2},
    {char: 'o', key: 21},
    {char: 'p', key: 12},
    {char: 'q', key: 19},
    {char: 'r', key: 7},
    {char: 's', key: 24},
    {char: 't', key: 14},
    {char: 'u', key: 5},
    {char: 'v', key: 25},
    {char: 'w', key: 9},
    {char: 'x', key: 17},
    {char: 'y', key: 0},
    {char: 'z', key: 10},
], [
    {char: 'a', key: 10},
    {char: 'ą', key: 13},
    {char: 'b', key: 3},
    {char: 'c', key: 25},
    {char: 'ć', key: 16},
    {char: 'd', key: 31},
    {char: 'e', key: 7},
    {char: 'ę', key: 29},
    {char: 'f', key: 18},
    {char: 'g', key: 14},
    {char: 'h', key: 2},
    {char: 'i', key: 22},
    {char: 'j', key: 21},
    {char: 'k', key: 11},
    {char: 'l', key: 5},
    {char: 'ł', key: 19},
    {char: 'm', key: 26},
    {char: 'n', key: 32},
    {char: 'ń', key: 15},
    {char: 'o', key: 28},
    {char: 'ó', key: 1},
    {char: 'p', key: 24},
    {char: 'q', key: 17},
    {char: 'r', key: 30},
    {char: 's', key: 8},
    {char: 'ś', key: 9},
    {char: 't', key: 4},
    {char: 'u', key: 27},
    {char: 'w', key: 20},
    {char: 'y', key: 23},
    {char: 'z', key: 12},
    {char: 'ż', key: 0},
    {char: 'ź', key: 6},
],
];

const systems = {
    2: {
        base: 2,
        fromDec: (number) => fromDec(number, 2),
        toDec: (number) => toDec(number, 2),
        numbers: [0, 1],
    },
    3: {
        base: 3,
        fromDec: (number) => fromDec(number, 3),
        toDec: (number) => toDec(number, 3),
        numbers: [0, 1, 2],
    },
    8: {
        base: 8,
        fromDec: (number) => fromDec(number, 8),
        toDec: (number) => toDec(number, 8),
        numbers: [0, 1, 2, 3, 4, 5, 6, 7],
    },
    10: {
        base: 10,
        fromDec: (number) => fromDec(number, 10),
        toDec: (number) => toDec(number, 10),
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    },
    16: {
        base: 16,
        fromDec: (number) => fromDec(number, 16),
        toDec: (number) => toDec(number, 16),
        numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'],
    },
};

const validInput = (input, system) => systems[system].numbers.some((n) => n == input);

/*
TEORIA
LICZBA

00011 11011 00001 01101 00100 0000
*/

const operation = (encode, exercise) => {
    switch (exercise) {
        case 1:
            ex01(encode, exercise);
            break;
        case 2:
            ex02(encode, exercise);
            break;
        case 3:
            ex03(encode, exercise);
            break;
        case 4:
            ex03(encode, exercise);
            break;
    }
};

const toDec = (numberString, system = 2) => {
    numberString = numberString.toUpperCase();
    let value = 0;
    let base = 1;
    const {length} = numberString;
    let parsedNumericValue;
    for (let i = length - 1; i >= 0; i--) {
        parsedNumericValue = numberString[i];
        if (validInput(numberString[i], system)) {
            value += parsedNumericValue * base;
            base *= system;
        } else {
            console.warn(
                `not valid character ${numberString[i]}, for system ${system}`,
            );
            alert(
                `invalid input for number conversion // ${numberString}(${system})`,
            );
            return;
        }
    }
    return value;
};

const fromDec = (number, toSystem = 2) => {
    let tmpNumber = number;
    const array = [];
    for (let i = 0; tmpNumber > 0; i++) {
        const modulo = tmpNumber % toSystem;
        array.push(modulo);
        tmpNumber = Math.floor(tmpNumber / toSystem);
    }
    if (array.length === 0) return '0';
    return array.reverse().join('');
};

const arrayEx01KeyToLetter = (key) => arrays[0].find((value) => value.key === key)?.char;

const arrayEx01LetterToKey = (letter) => arrays[0].find((value) => value.char === letter)?.key;

const arrayEx02KeyToLetter = (key) => arrays[1].find((value) => value.key === key)?.char;

const arrayEx02LetterToKey = (letter) => arrays[1].find((value) => value.char === letter)?.key;

const printVectorAndFixToN = (array, N = 5) => {
    const f = (s) => {
        if (s !== ' ' && s !== '') {
            while (s.length < N) {
                s = `0${s}`;
            }
        }
        return s;
    };
    return array.map((v) => f(v));
};

const convertNumericArrayToLettersString = (array) => {
    const returnValue = [];
    for (let i = 0; i < array.length; i++) {
        const letter = arrayEx01KeyToLetter(array[i]);
        if (letter) {
            returnValue.push(letter);
        } else {
            return `Cannot convert to letters. Reason - array has value = ${array[i]}`;
        }
    }
    return returnValue.join('');
};

const ex01 = (encode, exercise = 1) => {
    const text = document.querySelector(`#ex0${exercise}text`).value.toLowerCase();
    const key = document.querySelector(`#ex0${exercise}key`).value.toLowerCase();
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    const textArray = encode ? text.replace(' ', '').split('') : text.split(' ');
    const keyArray = key.replace(' ', '').split('');
    const binaryTextArray = [];
    const binaryKeyArray = [];
    const resultArray = [];

    const binaryTextArrayToDecode = textArray;

    if (encode) {
        if (textArray.length !== keyArray.length) {
            console.warn('text.length != key.length');
        } else {
            for (let i = 0; i < textArray.length; i++) {
                binaryTextArray.push(fromDec(arrayEx01LetterToKey(textArray[i])));
                binaryTextArray.push(' ');
                binaryKeyArray.push(fromDec(arrayEx01LetterToKey(keyArray[i])));
                binaryKeyArray.push(' ');

                resultArray.push(arrayEx01LetterToKey(textArray[i]) ^ arrayEx01LetterToKey(keyArray[i]));
            }
            resultArray.forEach(fromDec);
            const binaryResultArray = resultArray.map((v, i, a) => fromDec(v));

            resultDiv.textContent = `${printVectorAndFixToN(binaryTextArray, 5).join('')}
${printVectorAndFixToN(binaryKeyArray, 5).join('')}
${printVectorAndFixToN(binaryResultArray, 5).join(' ')}
Kryptogram: ${convertNumericArrayToLettersString(resultArray)}`;
        }
    } else {
        if (binaryTextArrayToDecode.some((value) => value.split('').some((number) => number !== '0' && number !== '1'))) {
            console.warn('not good binary number to decode');
            return;
        }
        const binaryTextArray = binaryTextArrayToDecode.map((v) => toDec(v, 2));
        const binaryKeyArray = keyArray.map(arrayEx01LetterToKey);
        const binaryTextResult = [];
        const binaryKeyResult = [];
        if (binaryTextArray.length !== binaryKeyArray.length) {
            console.warn('text.length != key.length');
            return;
        }
        for (let i = 0; i < textArray.length; i++) {
            binaryTextResult.push(fromDec(binaryTextArray[i]));
            binaryTextResult.push(' ');
            binaryKeyResult.push(fromDec(binaryKeyArray[i]));
            binaryKeyResult.push(' ');

            resultArray.push(binaryTextArray[i] ^ binaryKeyArray[i]);
        }

        resultDiv.textContent = `${printVectorAndFixToN(binaryTextResult, 5).join('')}
${printVectorAndFixToN(binaryKeyResult, 5).join('')}
${printVectorAndFixToN(resultArray.map(fromDec), 5).join(' ')}
Kryptogram: ${convertNumericArrayToLettersString(resultArray)}`;
    }
};

const ex02 = (encode, exercise = 2) => {
    const text = document.querySelector(`#ex0${exercise}text`).value.toLowerCase();
    const key = document.querySelector(`#ex0${exercise}key`).value.toLowerCase();
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    const textKeys = text.split('').map(arrayEx02LetterToKey);
    const keyKeys = key.split('').map(arrayEx02LetterToKey);
    const result = [];

    for (let i = 0, j = 0; i < textKeys.length; i++, j++) {
        if (j === keyKeys.length) j = 0;
        result.push(math.mod(encode ? textKeys[i] + keyKeys[j] : textKeys[i] - keyKeys[j], arrays[exercise - 1].length));
    }

    resultDiv.textContent = `${text}
${textKeys.join(' ')}
${key}
${keyKeys.join(' ')}
${result.map(arrayEx02KeyToLetter).join(' ')}
${result.join(' ')}
`;
};

const ex03 = (transposed, exercise = 3) => {
    const ROUND_PRECISION = 4;

    const rows = document.querySelector(`#ex0${exercise}rows`).value.toLowerCase();
    const cols = document.querySelector(`#ex0${exercise}cols`).value.toLowerCase();
    const numbers = document.querySelector(`#ex0${exercise}numbers`).value.toLowerCase();
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    const numberRows = parseInt(rows);
    const numberCols = parseInt(cols);
    const numberArray = numbers.split(' ').map(parseFloat);

    /**
     "p(a1,b1)"    "p(a2,b1)"    "p(a3,b1)"
     "p(a1,b2)"    "p(a2,b2)"    "p(a3,b2)"
     "p(a1,b3)"    "p(a2,b3)"    "p(a3,b3)"
     */

    function calculateSumInRow(matrix, row) {
        let sum = 0;
        const columnSize = matrix[row].length
        for (let j = 0; j < columnSize; j++) {
            sum += matrix[row][j];
        }
        return sum;
    }

    function calculateSumInColumn(matrix, column) {
        let sum = 0;
        const rowSize = matrix.length
        for (let i = 0; i < rowSize; i++) {
            sum += matrix[i][column];
        }
        return sum;
    }

    function calculateP_(matrix, calculateRows) {
        const max = calculateRows ? numberRows : numberCols;
        const p = new Array(max).fill(0);
        const calculateFunction = calculateRows ? calculateSumInRow : calculateSumInColumn;
        for (let i = 0; i < max; i++) {
            p[i] = calculateFunction(matrix, i);
        }
        return p;
    }

    function calculateMinusNLog2N(n) {
        return math.round(-n * math.log(n, 2), ROUND_PRECISION);
    }

    function calc(M) {
        let resultText = '';

        const pa = math.round(calculateP_(M, false), 2);
        const pb = math.round(calculateP_(M, true), 2);

        console.log(`pa: ${pa}`);
        console.log(`pb: ${pb}`);
        resultText += `pa: ${pa}\nb: ${pb}\n`;

        const pa_log = pa.map((value) => math.round(-value * math.log(value, 2), ROUND_PRECISION));
        const pb_log = pb.map((value) => math.round(-value * math.log(value, 2), ROUND_PRECISION));

        console.log(`pa_log: ${pa_log}`);
        console.log(`pb_log: ${pb_log}`);
        resultText += `pa_log: ${pa_log}\npb_log: ${pb_log}\n`;

        const entropy_a = pa_log.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
        const entropy_b = pb_log.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

        console.log(`entropy_a: ${entropy_a}`);
        console.log(`entropy_b: ${entropy_b}`);
        resultText += `entropy_a: ${entropy_a}\nentropy_b: ${entropy_b}\n`;

        const p_a_b = new Array(numberRows).fill(0).map(() => new Array(numberCols).fill(0));
        const p_b_a = new Array(numberRows).fill(0).map(() => new Array(numberCols).fill(0));
        for (let i = 0; i < numberRows; i++) {
            for (let j = 0; j < numberCols; j++) {
                p_a_b[i][j] = math.round(M[i][j] / pb[i], ROUND_PRECISION);
                p_b_a[i][j] = math.round(M[i][j] / pa[j], ROUND_PRECISION);
            }
        }
        console.log(`p_a_b: ${p_a_b}`);
        console.table(p_a_b);
        console.log(`p_b_a: ${p_b_a}`);
        console.table(p_b_a);
        resultText += `p_a_b: ${p_a_b}\np_b_a: ${p_b_a}\n`;

        const p_a_b_log = new Array(numberRows).fill(0).map(() => new Array(numberRows).fill(0));
        for (let i = 0; i < numberRows; i++) {
            for (let j = 0; j < numberCols; j++) {
                p_a_b_log[i][j] = calculateMinusNLog2N(p_a_b[i][j]);
            }
        }

        console.log(`p_a_b_log: ${p_a_b_log}`);
        resultText += `p_a_b_log: ${p_a_b_log}\n`;

        const p_b_a_log = new Array(numberRows).fill(0).map(() => new Array(numberRows).fill(0));
        for (let i = 0; i < numberRows; i++) {
            for (let j = 0; j < numberCols; j++) {
                p_b_a_log[i][j] = calculateMinusNLog2N(p_b_a[i][j]);
            }
        }

        console.log(`p_b_a_log: ${p_b_a_log}`);
        resultText += `p_b_a_log: ${p_b_a_log}\n`;

        const p_a_b_log_flatten = math.round(p_a_b_log.map((value) => value.filter((value) => !Number.isNaN(value))).map((value) => value.reduce((p, c) => p + c), 0), ROUND_PRECISION);
        const p_b_a_log_flatten = math.round(p_b_a_log.map((value) => value.filter((value) => !Number.isNaN(value))).map((value) => value.reduce((p, c) => p + c), 0), ROUND_PRECISION);

        console.log(`p_a_b_log_flatten: ${p_a_b_log_flatten}`);
        console.log(`p_b_a_log_flatten: ${p_b_a_log_flatten}`);
        resultText += `p_b_a_log_flatten: ${p_b_a_log_flatten}\np_b_a_log_flatten: ${p_b_a_log_flatten}\n`;

        const entropy_pa_b = p_a_b_log_flatten.flat(1);
        const entropy_pb_a = p_b_a_log_flatten.flat(1);
        const entropy_ab = math.round(entropy_pa_b.map((value, index) => pb[index] * value).reduce((p, c) => p + c, 0), ROUND_PRECISION);
        const entropy_ba = math.round(entropy_pb_a.map((value, index) => pa[index] * value).reduce((p, c) => p + c, 0), ROUND_PRECISION);

        console.log(`E(A|B): ${entropy_ab}`);
        console.log(`E(B|A): ${entropy_ba}`);
        resultText += `E(A|B): ${entropy_ab}\nE(B|A): ${entropy_ba}\n`;

        if (entropy_a + entropy_ab !== entropy_b + entropy_ba) {
            console.error(`Entropies does not sum up: ${entropy_a + entropy_ab} !== ${entropy_b + entropy_ba}`);
            resultText += `Entropies does not sum up: ${entropy_a + entropy_ab} !== ${entropy_b + entropy_ba}`;
        }

        return resultText;
    }

    const translateMatrix = new Array(numberRows).fill(0).map(() => new Array(numberCols).fill(0));
    for (let i = 0; i < numberRows; i++) {
        for (let j = 0; j < numberCols; j++) {
            translateMatrix[i][j] = `p(a${j + 1},b${i + 1})`;
        }
    }
    let resultText = ''
    console.table(translateMatrix);
    if (transposed) {
        const matrix = [];
        while (numberArray.length) matrix.push(numberArray.splice(0, numberCols));
        const transposedMatrix = math.transpose(matrix);
        console.table(transposedMatrix);
        resultText = calc(transposedMatrix);
    } else {
        const matrix = [];
        while (numberArray.length) matrix.push(numberArray.splice(0, numberCols));
        console.table(matrix);
        resultText = calc(matrix);
    }
    resultDiv.textContent = resultText;
};

const clearResults = (exercise) => {
    document.querySelector(`#ex0${exercise}text`).value = '';
    document.querySelector(`#ex0${exercise}results`).textContent = '';
};

const updateTable = (exercise) => {
    const table = document.querySelector(`#ex0${exercise}table`);
    let formattedTable = '<table><tr>';
    formattedTable += arrays[exercise - 1].map((value) => {
        if (value.char !== ' ') return `<td>${value.char}</td>`;
    }).join('').toUpperCase();
    formattedTable += '</tr><tr>';
    formattedTable += arrays[exercise - 1].map((value) => {
        if (value.key !== ' ') return `<td>${value.key}</td>`;
    }).join('').toUpperCase();
    formattedTable += '</tr></table>';
    table.innerHTML = formattedTable;
};

const initialPre = (exercise) => {
    switch (exercise) {
        case 1:
            document.querySelector(`#ex0${exercise}results`).textContent = `TEORIA
LICZBA

00011 11011 00001 01101 00100 0000`;
            break;
        case 2:
            document.querySelector(`#ex0${exercise}results`).textContent = `OBŁUDA
JAZDA ZIMĄ W GÓRACH

WLGCAQUCMNEGHĘŹSNEF`;
            break;
        case 3:
            document.querySelector(`#ex0${exercise}results`).textContent = '';
            break;
        case 4:
            document.querySelector(`#ex0${exercise}results`).textContent = '';
            break;
    }
};

updateTable(1);
initialPre(1);
updateTable(2);
initialPre(2);
// initialPre(3);
