const arrays = [
    [
        {char: 'a', key: 1 - 1},
        {char: 'b', key: 2 - 1},
        {char: 'c', key: 3 - 1},
        {char: 'd', key: 4 - 1},
        {char: 'e', key: 5 - 1},
        {char: 'f', key: 6 - 1},
        {char: 'g', key: 7 - 1},
        {char: 'h', key: 8 - 1},
        {char: 'i', key: 9 - 1},
        {char: 'j', key: 10 - 1},
        {char: 'k', key: 11 - 1},
        {char: 'l', key: 12 - 1},
        {char: 'm', key: 13 - 1},
        {char: 'n', key: 14 - 1},
        {char: 'o', key: 15 - 1},
        {char: 'p', key: 16 - 1},
        {char: 'q', key: 17 - 1},
        {char: 'r', key: 18 - 1},
        {char: 's', key: 19 - 1},
        {char: 't', key: 20 - 1},
        {char: 'u', key: 21 - 1},
        {char: 'v', key: 22 - 1},
        {char: 'w', key: 23 - 1},
        {char: 'x', key: 24 - 1},
        {char: 'y', key: 25 - 1},
        {char: 'z', key: 26 - 1},
    ], [
        {char: 'a', key: 2},
        {char: 'b', key: 21},
        {char: 'c', key: 9},
        {char: 'd', key: 17},
        {char: 'e', key: 22},
        {char: 'f', key: 24},
        {char: 'g', key: 7},
        {char: 'h', key: 25},
        {char: 'i', key: 14},
        {char: 'j', key: 4},
        {char: 'k', key: 18},
        {char: 'l', key: 13},
        {char: 'm', key: 10},
        {char: 'n', key: 3},
        {char: 'o', key: 23},
        {char: 'p', key: 19},
        {char: 'q', key: 8},
        {char: 'r', key: 20},
        {char: 's', key: 15},
        {char: 't', key: 1},
        {char: 'u', key: 16},
        {char: 'v', key: 12},
        {char: 'w', key: 6},
        {char: 'x', key: 11},
        {char: 'y', key: 0},
        {char: 'z', key: 5},
    ]

]

function get_exponent_mod(base, exponent, mod) {
    if (base === 0) return 1;
    if (base < 1 || exponent < 0 || mod < 1) {
        return ("invalid");
    }
    let result = 1;
    while (exponent > 0) {
        if ((exponent % 2) === 1) {
            result = (result * base) % mod;
        }
        base = (base * base) % mod;
        exponent = Math.floor(exponent / 2);
    }
    return result;
}

function get_multiplication_mod(a, b, m) {
    let x;
    let c;
    let r;
    if (a >= m) a %= m;
    if (b >= m) b %= m;
    x = a;
    c = Math.floor(x * b / m);
    r = (a * b - c * m) % m;
    return r < 0 ? r + m : r;
}

function euler_totient(n) {
    let result = 1;
    let text = `totient(${n}): 2, `;
    for (let i = 2; i < n; i++) {
        if (math.gcd(i, n) === 1) {
            text += `${i}, `;
            result++;
        }
    }
    console.log(text);
    return result;
}

function numberToLetter(key, array) {
    key = Number.parseInt(key);
    const object = arrays[array].find(value => value.key === key);
    return object?.char;
    // console.error(`no letter for given key ${key}`);
}

function letterToNumber(letter, array) {
    letter = String(letter);
    const object = arrays[array].find(value => value.char === letter);
    return object?.key;
    // console.error(`no key for given letter ${letter}`);
}

function numberToLetterArrayExample(key) {
    return numberToLetter(key, 0);
}

function letterToNumberArrayExample(letter) {
    return letterToNumber(letter, 0)
}

function numberToLetterArrayHome(key) {
    return numberToLetter(key, 1);
}

function letterToNumberArrayHome(letter) {
    return letterToNumber(letter, 1)
}

function knapsack_encode(exercise = 1) {
    const v = document.querySelector(`#ex0${exercise}v`).value.toLowerCase();
    const i = document.querySelector(`#ex0${exercise}i`).value.toLowerCase();
    const isHomeArray = document.querySelector(`#isHomeArray`).checked;
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    if (v === '' || i === '') {
        return;
    }

    let resultText = ''

    const vArray = v.replace(' ', '').split(',').filter(value => value !== '').map(value => Number.parseInt(value));
    const iArray = i.replace(' ', '').split('');

    console.info(`vArray=[${vArray.join(',')}]`)
    resultText += `vArray=[${vArray.join(',')}]\n`;
    console.info(`iArray=[${iArray.join(',')}]`)
    resultText += `iArray=[${iArray.join(',')}]\n`;

    const min = vArray.reduce((previousValue, currentValue) => previousValue + currentValue);
    const max = 2 * min;
    // const p = Math.floor(Math.random() * (max - min + 1) + min + 1);
    const p = isHomeArray ? 80 : 61;
    console.info(`min=${min}, max=${max}, p=${p}`)
    resultText += `p=${p}\n`;
    // const b = Math.floor(Math.random() * (min - 1) + 1);
    const b = isHomeArray ? 17 : 17;
    console.info(`min=${1}, max=${min}, b=${b}`)
    resultText += `b=${b}\n`;

    const t = vArray.map(value => (value * b) % p);
    console.info(`t=[${t.join(',')}]`)
    resultText += `t=[${t.join(',')}]\n`;

    let iArrayBits = iArray
        .map(value => letterToNumber(value, isHomeArray ? 1 : 0))
    console.info(`iArrayBits=[${iArrayBits.join(',')}]`)
    resultText += `iArrayBits=[${iArrayBits.join(',')}]\n`;

    iArrayBits = iArrayBits.map(value => value.toString(2));
    console.info(`iArrayBits=[${iArrayBits.join(',')}]`)
    resultText += `iArrayBits=[${iArrayBits.join(',')}]\n`;


    const iArrayBitsEncrypted = iArrayBits.map(value => {
        const valueArray = value.split('').reverse().map(x => Number.parseInt(x));
        const valueArrayEncoded = valueArray.map((vv, i) => vv * t[i])
        return valueArrayEncoded.reduce((previousValue, currentValue) => previousValue + currentValue)
    });

    console.info(`iArrayBitsEncrypted=[${iArrayBitsEncrypted.join(',')}]`)
    resultText += `iArrayBitsEncrypted=[${iArrayBitsEncrypted.join(',')}]`;

    resultDiv.textContent = resultText;
}

function knapsack_decode(exercise = 2) {
    const V = document.querySelector(`#ex0${exercise}V`).value.toLowerCase();
    const v = document.querySelector(`#ex0${exercise}vec`).value.toLowerCase();
    const isHomeArray = document.querySelector(`#isHomeArray`).checked;
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    if (V === '' || v === '') {
        return;
    }

    let resultText = '';

    let tempV = Number.parseInt(V);
    const vArray = v.replace(' ', '').split(',').filter(value => value !== '').map(value => Number.parseInt(value));

    console.info(`V=${tempV}`)
    resultText += `V=${tempV}\n`;
    console.info(`vArray=[${vArray.join(',')}]`)
    resultText += `vArray=[${vArray.join(',')}]\n`;

    // if (tempV > vArray.reduce((previousValue, currentValue) => previousValue + currentValue)) {
    //     console.warn(`Cannot decrypt with that key, ${tempV}>${vArray.reduce((previousValue, currentValue) => previousValue + currentValue)} which is sum of v`);
    //     resultText += `Cannot decrypt with that V, ${tempV}>${vArray.reduce((previousValue, currentValue) => previousValue + currentValue)} which is sum of v\n`;
    //     resultDiv.textContent = resultText;
    //     return;
    // }

    const i = [];

    for (let j = 0; j < vArray.length; j++) {
        if (tempV > vArray[vArray.length - 1 - j]) {
            i[j] = 1
        } else {
            if (j === vArray.length - 1 && tempV >= vArray[vArray.length - 1 - j]) {
                i[j] = 1;
            } else {
                i[j] = 0;
            }
        }
        console.info(`tempV_${j-1}=${tempV}`);
        tempV = tempV - i[j] * vArray[vArray.length - 1 - j];
        // console.info(`tempV_${j}=${tempV}`);

    }

    console.info(`i=[${i.join(',')}]`)
    resultText += `i=[${i.join(',')}]\n`;

    const iNumber = Number.parseInt(i.join(''), 2);
    const iLetter = numberToLetter(iNumber, isHomeArray ? 1 : 0);

    console.info(`i=${i.join('')}=${iNumber}=${iLetter}`);
    resultText += `i=${i.join('')}=${iNumber}=${iLetter}\n`;

    resultDiv.textContent = resultText;
}

function knapsack_init(exercise = 1) {
    const resultDiv = document.querySelector(`#ex0${exercise}results`);
    resultDiv.textContent = `v=4,5,10,20,40\ni1=CZEKAMY\ni2=TUTAJ`;
}

function knapsack_clear(exercise = 1) {
    document.querySelector(`#ex0${exercise}v`).value = '';
    document.querySelector(`#ex0${exercise}i`).value = '';
    knapsack_init();
}

function knapsack2_init(exercise = 2) {
    const resultDiv = document.querySelector(`#ex0${exercise}results`);
    resultDiv.textContent = `v=2,5,8,16,33\nV=78`;
}

function knapsack2_clear(exercise = 2) {
    document.querySelector(`#ex0${exercise}V`).value = '';
    document.querySelector(`#ex0${exercise}vec`).value = '';
    knapsack2_init();
}


knapsack_init();
knapsack2_init();