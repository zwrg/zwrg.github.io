const toDec = (numberString, system) => {
    numberString = numberString.toUpperCase();
    let value = 0;
    let base = 1;
    const length = numberString.length;
    let parsedNumericValue;
    for (let i = length - 1; i >= 0; i--) {
        parsedNumericValue = numberString[i];
        if (system === 16) {
            parsedNumericValue = hexToDecConversion(numberString[i]);
        }

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

const fromDec = (number, toSystem) => {
    let tmpNumber = number;
    const array = [];
    for (let i = 0; tmpNumber > 0; i++) {
        let modulo = tmpNumber % toSystem;
        if (toSystem == 16) {
            modulo = decToHexConversion(modulo);
        }
        array.push(modulo);
        tmpNumber = Math.floor(tmpNumber / toSystem);
    }
    return array.reverse().join('');
};
const validInput = (input, system) => {
    return systems[system].numbers.some((n) => n == input);
};
const hexToDecConversion = (hex) => {
    switch (hex) {
        case 'A':
            return 10;
        case 'B':
            return 11;
        case 'C':
            return 12;
        case 'D':
            return 13;
        case 'E':
            return 14;
        case 'F':
            return 15;
        default:
            return hex;
    }
};

const decToHexConversion = (dec) => {
    switch (dec) {
        case 10:
            return 'A';
        case 11:
            return 'B';
        case 12:
            return 'C';
        case 13:
            return 'D';
        case 14:
            return 'E';
        case 15:
            return 'F';
        default:
            return dec;
    }
};

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

const ex01 = () => {
    const number = document.querySelector('#ex01number').value;
    const system = document.querySelector('#ex01system').value;
    let results = '';
    const resultDiv = document.querySelector('#ex01results');

    const decimalNumber = systems[system].toDec(number);

    for (sys in systems) {
        results += `System(${systems[sys].base}) = ${systems[sys].fromDec(
            decimalNumber,
            systems[sys].base,
        )} \n`;
    }
    resultDiv.textContent = results;
};

const clearex01 = () => {
    document.querySelector('#ex01number').value = '';
    document.querySelector('#ex01system').value = 2;
    document.querySelector('#ex01results').textContent = '';
};

const gcdeuclid_extended = (a, b) => {
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
    return [old_t, old_s, old_r, iterations];
};

const ex02 = () => {
    const a = Number.parseInt(document.querySelector('#ex02euclid_a').value);
    const b = Number.parseInt(document.querySelector('#ex02euclid_b').value);
    let results = '';
    if (!a || !b) return;
    const resultDiv = document.querySelector('#ex02results');

    let [u, v, gcd, iterations] = gcdeuclid_extended(a, b);

    console.log('number of iterations =>', iterations);

    results += `nwd = ${gcd} \n\n`;
    results += `a = ${a} \n`;
    results += `t or u = ${u} \n\n`;
    results += `b = ${b} \n`;
    results += `s or v = ${v} \n\n`;
    results += `ux + vy = nwd(x,y) \n`;
    results += `${a} * (${v}) + ${b} * (${u}) = ${gcd} \n`;
    const inverseElement =
        gcd === 1
            ? `1/${b} = ${b}^-1 is congurent to ${u}(mod ${a}) \n`
            : 'no inverse element gcd != 1';

    results += inverseElement;
    resultDiv.textContent = results;
};

const clearex02 = () => {
    document.querySelector('#ex02euclid_a').value = '';
    document.querySelector('#ex02euclid_b').value = '';
    document.querySelector('#ex02results').textContent = '';
};
