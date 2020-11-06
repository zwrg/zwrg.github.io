const arrays = [[
    {char: 'a', key: 'e'},
    {char: 'ą', key: 'q'},
    {char: 'b', key: 'ń'},
    {char: 'c', key: 'y'},
    {char: 'ć', key: 'j'},
    {char: 'd', key: 'r'},
    {char: 'e', key: 'ł'},
    {char: 'ę', key: 'ó'},
    {char: 'f', key: 'k'},
    {char: 'g', key: 'u'},
    {char: 'h', key: 'w'},
    {char: 'i', key: 'd'},
    {char: 'j', key: 'z'},
    {char: 'k', key: 'f'},
    {char: 'l', key: 'p'},
    {char: 'ł', key: 'ą'},
    {char: 'm', key: 'ż'},
    {char: 'n', key: 'ś'},
    {char: 'ń', key: 'ę'},
    {char: 'o', key: 't'},
    {char: 'ó', key: 'l'},
    {char: 'p', key: 'ź'},
    {char: 'q', key: 'i'},
    {char: 'r', key: 'n'},
    {char: 's', key: 'a'},
    {char: 'ś', key: 's'},
    {char: 't', key: 'c'},
    {char: 'u', key: 'ó'},
    {char: 'w', key: 'b'},
    {char: 'y', key: 'h'},
    {char: 'z', key: 'm'},
    {char: 'ż', key: 'ć'},
    {char: 'ź', key: 'g'},
    {char: ' ', key: ' '}
], [
    {char: 'a', key: 11},
    {char: 'ą', key: 20},
    {char: 'b', key: 27},
    {char: 'c', key: 9},
    {char: 'ć', key: 32},
    {char: 'd', key: 23},
    {char: 'e', key: 13},
    {char: 'ę', key: 28},
    {char: 'f', key: 16},
    {char: 'g', key: 3},
    {char: 'h', key: 31},
    {char: 'i', key: 19},
    {char: 'j', key: 8},
    {char: 'k', key: 24},
    {char: 'l', key: 30},
    {char: 'ł', key: 2},
    {char: 'm', key: 26},
    {char: 'n', key: 6},
    {char: 'ń', key: 4},
    {char: 'o', key: 25},
    {char: 'ó', key: 15},
    {char: 'p', key: 1},
    {char: 'q', key: 14},
    {char: 'r', key: 12},
    {char: 's', key: 18},
    {char: 'ś', key: 5},
    {char: 't', key: 21},
    {char: 'u', key: 7},
    {char: 'w', key: 17},
    {char: 'y', key: 0},
    {char: 'z', key: 22},
    {char: 'ż', key: 29},
    {char: 'ź', key: 10},
    {char: ' ', key: ' '}
], [
    {char: 'a', key: 0},
    {char: 'ą', key: 1},
    {char: 'b', key: 2},
    {char: 'c', key: 3},
    {char: 'ć', key: 4},
    {char: 'd', key: 5},
    {char: 'e', key: 6},
    {char: 'ę', key: 7},
    {char: 'f', key: 8},
    {char: 'g', key: 9},
    {char: 'h', key: 10},
    {char: 'i', key: 11},
    {char: 'j', key: 12},
    {char: 'k', key: 13},
    {char: 'l', key: 14},
    {char: 'ł', key: 15},
    {char: 'm', key: 16},
    {char: 'n', key: 17},
    {char: 'ń', key: 18},
    {char: 'o', key: 19},
    {char: 'ó', key: 20},
    {char: 'p', key: 21},
    {char: 'q', key: 22},
    {char: 'r', key: 23},
    {char: 's', key: 24},
    {char: 'ś', key: 25},
    {char: 't', key: 26},
    {char: 'u', key: 27},
    {char: 'w', key: 28},
    {char: 'y', key: 29},
    {char: 'z', key: 30},
    {char: 'ż', key: 31},
    {char: 'ź', key: 32},
    {char: ' ', key: ' '},
]
]

const EX03ARRAY = 1;

/*
LICZBA BITÓW
PREDYKCJA BIEŻĄCA

YWTMŁŚDŁBRŁAMYM
ĆEMREFTŚŚE
 */

/*
SPRZEDAJ SŁONINĘ
JUTRO TA GODZINA

LUMBLWNHLA
NHWĄJFIĄŻĘ
 */

/*
ZAKOPANE
MRĄGOWOJAD

COUFŚI
GRYŚYDY
 */

const letterIsInArrayEx01 = (letter, encode = true) => {
    return encode ? arrays[0].some(value => value.char === letter) : arrays[0].some(value => `${value.key}` === letter)
}

const letterIsInArrayEx02 = (letter) => {
    return arrays[1].some(value => value.char === letter);
}

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
    }

}

const ex01 = (encode, exercise = 1) => {
    const text = document.querySelector(`#ex0${exercise}text`).value.toLowerCase();
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    const textArray = text.split('');
    const resultArray = [];
    if (textArray.every(value => letterIsInArrayEx01(value, encode))) {
        textArray.forEach(letter => {
            const swapLetter = arrays[exercise - 1].find(value => (encode ? value.char : `${value.key}`) === letter)
            resultArray.push((encode ? swapLetter.key : swapLetter.char));
        })
    } else {
        alert('text not in array');
        console.warn('text not in array');
    }

    resultDiv.textContent = resultArray.join('').toUpperCase();
}

const gcd_extended_invert_a = (a, b) => {
    let iterations = 0;
    /*quotients definition*/
    let s = 0,
        old_s = 1;
    let t = 1,
        old_t = 0;
    let r = b,
        old_r = a;
    while (r !== 0) {
        iterations++;
        let quotient = Math.floor(old_r / r);

        [old_r, r] = [r, old_r - quotient * r];
        [old_s, s] = [s, old_s - quotient * s];
        [old_t, t] = [t, old_t - quotient * t];
    }
    /*
     old_s, old_t - Bezout coefficients
     old_r - greatest common divisor
     t, s - quotients by gcd
    */
    return old_t;
};

function calculate_modulo(exercise, letterValue) {
    const a = Number.parseInt(document.querySelector(`#ex0${exercise}a`).value);
    const b = Number.parseInt(document.querySelector(`#ex0${exercise}b`).value);
    const l = Number.parseInt(document.querySelector(`#ex0${exercise}l`).value);
    return (a * letterValue + b) % l;
}

function calculate_invert_modulo(exercise, letterValue) {
    const a = Number.parseInt(document.querySelector(`#ex0${exercise}a`).value);
    const b = Number.parseInt(document.querySelector(`#ex0${exercise}b`).value);
    const l = Number.parseInt(document.querySelector(`#ex0${exercise}l`).value);
    let invert = gcd_extended_invert_a(l, a);
    while (invert <= 0) {
        invert += l;
    }
    return (invert * (letterValue - b)) % l;
}


function encodeLetter(exercise, letter) {
    const letterObject = arrays[exercise - 1].find(value => value.char === letter);
    const letterValue = letterObject.key;
    const encodedValue = calculate_modulo(exercise, letterValue);
    return arrays[exercise - 1].find(value => value.key === encodedValue)?.char;
}

function decodeLetter(exercise, letter) {
    const letterObject = arrays[exercise - 1].find(value => value.char === letter);
    const letterValue = letterObject.key;
    const decodedValue = calculate_invert_modulo(exercise, letterValue);
    return arrays[exercise - 1].find(value => value.key === decodedValue)?.char;

}

const ex02 = (encode, exercise = 2) => {
    const text = document.querySelector(`#ex0${exercise}text`).value.toLowerCase();
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    const textArray = text.split('');
    const resultArray = [];
    if (textArray.every(value => letterIsInArrayEx02(value))) {
        textArray.forEach(letter => {
            const codedLetter = encode ? encodeLetter(exercise, letter) : decodeLetter(exercise, letter);
            resultArray.push(codedLetter);
        })
    } else {
        alert('text not in array');
        console.warn('text not in array');
    }

    resultDiv.textContent = resultArray.join('').toUpperCase();
}

function calculate_encoded_vector(letterValueVector) {
    const a = Number.parseInt(document.querySelector(`#ex03a`).value);
    const b = Number.parseInt(document.querySelector(`#ex03b`).value);
    const c = Number.parseInt(document.querySelector(`#ex03c`).value);
    const d = Number.parseInt(document.querySelector(`#ex03d`).value);
    const e = Number.parseInt(document.querySelector(`#ex03e`).value);
    const f = Number.parseInt(document.querySelector(`#ex03f`).value);
    const l = Number.parseInt(document.querySelector(`#ex03l`).value);

    const matrix = [[a, b], [c, d]];
    const sumVector = [e, f];

    let resultVector = multiplyMatrixVector(matrix, letterValueVector);
    resultVector = addVectors(resultVector, sumVector);
    resultVector = math.mod(resultVector, l);
    resultVector = convertNumberVectorToLetterVector(resultVector);
    return resultVector;
}

function calculate_decoded_vector(letterValueVector) {
    const a = Number.parseInt(document.querySelector(`#ex03a`).value);
    const b = Number.parseInt(document.querySelector(`#ex03b`).value);
    const c = Number.parseInt(document.querySelector(`#ex03c`).value);
    const d = Number.parseInt(document.querySelector(`#ex03d`).value);
    const e = Number.parseInt(document.querySelector(`#ex03e`).value);
    const f = Number.parseInt(document.querySelector(`#ex03f`).value);
    const l = Number.parseInt(document.querySelector(`#ex03l`).value);

    const matrix = [[a, b], [c, d]];

    const inverseMatrix = math.inv(matrix);
    const modInverseMatrix = math.mod(inverseMatrix, l);
    const subVector = [e, f];

    let resultVector = subtractVectors(letterValueVector, subVector);
    resultVector = multiplyMatrixVector(modInverseMatrix, math.mod(resultVector, l));
    resultVector = convertNumberVectorToLetterVector(math.mod(resultVector, l));
    return resultVector;
}

function encodeVector(vector) {
    const letterObjectVector = vector.map(value => arrays[EX03ARRAY].find(letter => letter.char === value));
    const letterValueVector = letterObjectVector.map(value => value.key);
    return calculate_encoded_vector(letterValueVector);
}

function decodeVector(vector) {
    const letterObjectVector = vector.map(value => arrays[EX03ARRAY].find(letter => letter.char === value));
    const letterValueVector = letterObjectVector.map(value => value.key);
    return calculate_decoded_vector(letterValueVector);
}

function negativeModulo(number, modulo) {
    while (number < 0) {
        number += modulo;
    }
}

const ex03 = (encode, exercise = 3) => {
    const text = document.querySelector(`#ex0${exercise}text`).value.toLowerCase();
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    const textArray = text.split('');
    const resultArray = [];
    if (textArray.every(value => letterIsInArrayEx02(value))) {
        if (textArray.length % 2 !== 0) {
            textArray.push('a');
        }
        for (let i = 0; i < textArray.length; i += 2) {
            if (encode) {
                const vector = [textArray[i], textArray[i + 1]];
                const encodedVector = encodeVector(vector);
                resultArray.push(encodedVector.join(''));
            } else {
                const vector = [textArray[i], textArray[i + 1]];
                const decodedVector = decodeVector(vector);
                resultArray.push(decodedVector.join(''));
            }
        }
    } else {
        alert('text not in array');
        console.warn('text not in array');
    }

    resultDiv.textContent = resultArray.join('').toUpperCase();
}

function convertNumberVectorToLetterVector(numberVector) {
    return numberVector.map(value => arrays[EX03ARRAY].find(letter => letter.key === value)?.char);
}

function moduloVector(vector, modulo) {
    return vector.map(value => value >= 0 ? value % modulo : negativeModulo(value, modulo));
}

function addVectors(vector1, vector2) {
    const result = [];
    if (vector1.length !== vector2.length) console.error('different vectors lengths');
    else {
        for (let i = 0; i < vector1.length; i++) {
            result.push(vector1[i] + vector2[i]);
        }
    }
    return result;
}

function subtractVectors(vector1, vector2) {
    const result = [];
    if (vector1.length !== vector2.length) console.error('different vectors lengths');
    else {
        for (let i = 0; i < vector1.length; i++) {
            result.push(vector1[i] - vector2[i]);
        }
    }
    return result;
}

function multiplyMatrixVector(matrix, vector) {
    const result = [];
    let sum = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i].length !== vector.length) console.error('different matrix.row | vector length');
            else {
                sum += matrix[i][j] * vector[j];
            }
        }
        result.push(sum);
        sum = 0;
    }
    return result;
}

const clearResults = (exercise) => {
    document.querySelector(`#ex0${exercise}text`).value = '';
    document.querySelector(`#ex0${exercise}results`).textContent = '';

    if (exercise === 2) {
        document.querySelector(`#ex0${exercise}a`).value = '';
        document.querySelector(`#ex0${exercise}b`).value = '';
        document.querySelector(`#ex0${exercise}l`).value = '';

    }
}

const updateTable = (exercise) => {
    const table = document.querySelector(`#ex0${exercise}table`);
    let formattedTable = '<table><tr>';
    formattedTable += arrays[exercise - 1].map(value => {
        if (value.char !== ' ')
            return `<td>${value.char}</td>`;
    }).join('').toUpperCase();
    formattedTable += '</tr><tr>';
    formattedTable += arrays[exercise - 1].map(value => {
        if (value.key !== ' ')
            return `<td>${value.key}</td>`;
    }).join('').toUpperCase();
    formattedTable += '</tr></table>';
    table.innerHTML = formattedTable;

};

const initialPre = (exercise) => {
    switch (exercise) {
        case 1:
            document.querySelector(`#ex0${exercise}results`).textContent = `LICZBA BITÓW
PREDYKCJA BIEŻĄCA

YWTMŁŚDŁBRŁAMYM
ĆEMREFTŚŚE`;
            break;
        case 2:
            document.querySelector(`#ex0${exercise}results`).textContent = `SPRZEDAJ SŁONINĘ
JUTRO TA GODZINA

LUMBLWNHLA
NHWĄJFIĄŻĘ`;
            break;
        case 3:
            document.querySelector(`#ex0${exercise}results`).textContent = `ZAKOPANE
MRĄGOWOJAD

COUFŚI
GRŚYDY`;
            break;
    }
}


updateTable(1);
initialPre(1);
updateTable(2);
initialPre(2);
initialPre(3);

/*
*/



