function ex01_convert(exercise = 1) {
    let n = document.querySelector(`#ex0${exercise}n`).value.toLowerCase();
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    let resultText = '';

    if (n === '') {
        return;
    }

    n = Number.parseInt(n);

    resultText += `n_(10) = ${n}\n`;
    resultText += `n_(2) = ${n.toString(2)}\n`;
    resultText += `n_(16) = ${n.toString(16)}\n`;

    resultDiv.textContent = resultText;
}

function ex01_init(exercise = 1) {
    const resultDiv = document.querySelector(`#ex0${exercise}results`);
    resultDiv.textContent = ``;
}

function ex01_clear(exercise = 1) {
    document.querySelector(`#ex0${exercise}n`).value = '';
    ex01_init();
}

function ex02_gcd(exercise = 2) {
    let a = document.querySelector(`#ex0${exercise}a`).value.toLowerCase();
    let b = document.querySelector(`#ex0${exercise}b`).value.toLowerCase();
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    let resultText = '';

    if (a === '' || b === '') {
        return;
    }

    a = Number.parseInt(a);
    b = Number.parseInt(b);

    let result = math.xgcd(a, b);
    let gcd = result._data[0], u = result._data[1], v = result._data[2];

    resultText += `gcd = au + bv\n`;
    console.info(`gcd = au + vb`);
    resultText += `${gcd} = a * (${u}), b * (${v})`;
    console.info(`${gcd} = a * (${u}), b * (${v})\n`);

    resultDiv.textContent = resultText;
}

function ex02_init(exercise = 2) {
    const resultDiv = document.querySelector(`#ex0${exercise}results`);
    resultDiv.textContent = ``;
}

function ex02_clear(exercise = 2) {
    document.querySelector(`#ex0${exercise}a`).value = '';
    document.querySelector(`#ex0${exercise}b`).value = '';
    ex02_init();
}

const eratosthenes_sieve = (n) => {
    let limit = Math.sqrt(n);
    let isPrime = Array.from(Array(n), () => true);
    [isPrime[0], isPrime[1]] = [false, false]; // 0 and 1 are not prime
    for (let i = 2; i < limit; i++) {
        if (isPrime[i] === true)
            for (let j = i * i; j < n; j += i)
                isPrime[j] = false;
    }
    let primeNumbers = [];
    isPrime.forEach((value, index) => {
        if (value === true) primeNumbers.push(index);
    });
    // primeNumbers.splice(0, 2); // get rid of 0 and 1
    return primeNumbers;
};

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

const euler_totient = (n) => {
    let result = 1;
    for (let i = 2; i < n; i++) {
        if (math.gcd(i, n) === 1)
            result++;
    }
    return result;
}

const isPrime = (a) => {
    return math.isPrime(a);
}

function ex03_prime(exercise = 3) {
    let a = document.querySelector(`#ex0${exercise}a`).value.toLowerCase();
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    let resultText = '';

    if (a === '') {
        return;
    }

    a = Number.parseInt(a);

    if (isPrime(a)) {
        resultText += `${a} is Prime\n`;
        console.info(`${a} is Prime`);
    } else {
        resultText += `${a} is not Prime\n`;
        console.info(`${a} is not Prime`);
    }

    let primes = eratosthenes_sieve(a);
    resultText += `primes to a: ${primes.join(',')}\n`;
    console.info(`primes to a: ${primes.join(',')}`);

    let totient = euler_totient(a);
    resultText += `totient = ${totient}\n`;
    console.info(`totient = ${totient} `);

    resultDiv.textContent = resultText;
}

function ex03_init(exercise = 3) {
    const resultDiv = document.querySelector(`#ex0${exercise}results`);
    resultDiv.textContent = ``;
}

function ex03_clear(exercise = 3) {
    document.querySelector(`#ex0${exercise}a`).value = '';
    ex02_init();
}

const arrays = [[
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
]];

function rsa_get_letter_by_key(key) {
    key = Number.parseInt(key);
    const object = arrays[0].find(value => value.key === key);
    return object?.char;
    // console.error(`no letter for given key ${key}`);
}

function rsa_get_key_by_letter(letter) {
    letter = String(letter);
    const object = arrays[0].find(value => value.char === letter);
    return object?.key;
    // console.error(`no key for given letter ${letter}`);
}

function getExponentMod(base, exponent, mod) {
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

function rsa(exercise = 1, encrypt = true) {
    const p = document.querySelector(`#ex0${exercise}p`).value.toLowerCase();
    const q = document.querySelector(`#ex0${exercise}q`).value.toLowerCase();
    const e = document.querySelector(`#ex0${exercise}e`).value.toLowerCase();
    const m = document.querySelector(`#ex0${exercise}m`).value.toLowerCase();
    const c = document.querySelector(`#ex0${exercise}c`).value.toLowerCase();
    const resultDiv = document.querySelector(`#ex0${exercise}results`);


    if (!(isPrime(p) && isPrime(q))) {
        console.error(`p or q is not prime number`);
        return;
    }

    const n = p * q;
    console.info(`n=${n}`);

    if (n < e) {
        console.error(`n<e`);
        return;
    }

    const euler = euler_totient(n);
    console.info(`euler_totient=${euler}`);

    const gcd = e > euler ? math.xgcd(e, euler)._data : math.xgcd(euler, e)._data;
    if (gcd[0] !== 1) {
        console.error(`gcd (${euler},${e}) != 1`);
        return;
    }
    console.info(`gcd (${euler},${e}) = ${gcd}`);

    const d = gcd[2];
    console.info(`d=${d}`)

    console.info(`n=${n},e=${e},d=${d}`)

    const textArray = m.split('');
    console.info(textArray.join(','));

    const textNumberArray = textArray.map(rsa_get_key_by_letter);
    console.info(textNumberArray.join(','));

    const cryptogram = textNumberArray.map(value => getExponentMod(value, e, n));
    const message = textNumberArray.map(value => getExponentMod(value, d, n))
    console.info(cryptogram.join(','));
    console.info(message.join(','));

    const letterCryptogram = cryptogram.map(rsa_get_letter_by_key)
    const letterMessage = message.map(rsa_get_letter_by_key)

    console.info(letterCryptogram.join(','));
    console.info(letterMessage.join(','));

    if (letterCryptogram.some(value => value === undefined)) {
        console.warn(`cannot convert whole cryptogram to letter format`);
        resultDiv.textContent += cryptogram.join(',') + '\n';
    } else {
        resultDiv.textContent += letterCryptogram.join(',') + '\n';

    }
    if (letterMessage.some(value => value === undefined)) {
        console.warn(`cannot convert whole cryptogram to letter format`);
        resultDiv.textContent += message.join(',') + '\n';
    } else {
        resultDiv.textContent += letterMessage.join(',') + '\n';

    }
}

function ex04_rsa_encrypt(exercise = 4) {
    rsa(exercise, true);
}

function ex04_init(exercise = 4) {
    const resultDiv = document.querySelector(`#ex0${exercise}results`);
    resultDiv.textContent = ``;
}

function ex04_clear(exercise = 4) {
    document.querySelector(`#ex0${exercise}p`).value = '';
    document.querySelector(`#ex0${exercise}q`).value = '';
    document.querySelector(`#ex0${exercise}e`).value = '';
    document.querySelector(`#ex0${exercise}m`).value = '';
    ex02_init();
}

function ord(a, n) {
    let modulo = 1;
    let congruence_modulo = 1;
    let i;
    for (i = 1; i < 1000000; i++) {
        congruence_modulo *= a;
        modulo = congruence_modulo % n;
        congruence_modulo = modulo;
        if (modulo === 1) {
            console.log(`ord_${n}_(${a}) = ${i}`);
            break;
        }
    }
    if (i === 1000000) i = 'ERROR';
    return i;
}

function prm(a, n) {
    return ord(a, n) === euler_totient(n);
}

function ex06_shanks(exercise = 6) {
    const y = Number.parseInt(document.querySelector(`#ex0${exercise}y`).value.toLowerCase());
    const g = Number.parseInt(document.querySelector(`#ex0${exercise}g`).value.toLowerCase());
    const n = Number.parseInt(document.querySelector(`#ex0${exercise}n`).value.toLowerCase());
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    let resultText = '';

    const is_prm = prm(g, n);
    if (math.gcd(y, n) !== 1 || math.gcd(g, n) !== 1) {
        console.warn(`is not primitive root modulo n`);
        resultText += `g is not primitive root modulo n\n`;
        resultText += `gcd(y,n) = gcd(${y},${n}) = ${math.gcd(y, n)}\n`;
        resultText += `gcd(g,n) = gcd(${g},${n}) = ${math.gcd(g, n)}`;
        resultDiv.textContent = resultText;
        return
    }

    const k = Math.floor(Math.sqrt(n));
    console.log(`K=sqrt(${n}) = ${k}`);
    resultText += `K=sqrt(${n}) = ${k}\n`;

    const S = [];
    for (let t = 0; t <= k - 1; t++) {
        S.push({power: get_multiplication_mod(y, g ** t, n), t})
    }
    S.sort((a, b) => a.power - b.power);
    console.dir(S);
    resultText += `S={${S.map(s => `(${s.power},${s.t})`).join(' ')}}\n`;

    const T = []
    for (let m = 1; m <= k; m++) {
        T.push({power: get_exponent_mod(g, k * m, n), km: k * m})
    }
    T.sort((a, b) => a.power - b.power);
    console.dir(T);
    resultText += `T={${T.map(t => `(${t.power},${t.km})`).join(' ')}}\n`;


    for (let i = 0; i < S.length; i++) {
        for (let j = 0; j < T.length; j++) {
            if (S[i].power === T[j].power) {
                console.log(T[j].km - S[i].t);
                resultText += `X=${T[j].km} - ${S[i].t} = ${T[j].km - S[i].t}\n`;
                resultText += `X=${T[j].km - S[i].t} (mod ${n - 1})`;
                resultDiv.textContent = resultText;
                return;
            }
        }
    }

    resultText += `No matches found in step 4 of Shanks algorithm (“baby-step, giant-step")`;
    resultDiv.textContent = resultText;
}

function ex06_init(exercise = 6) {
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    resultDiv.textContent = ``;
}

function ex06_clear(exercise = 6) {
    document.querySelector(`#ex0${exercise}y`).value = '';
    document.querySelector(`#ex0${exercise}g`).value = '';
    document.querySelector(`#ex0${exercise}n`).value = '';
    ex06_init();
}

const vigener_array = [
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
];

const arrayEx02KeyToLetter = (key) =>vigener_array.find((value) => value.key === key)?.char;

const arrayEx02LetterToKey = (letter) => vigener_array.find((value) => value.char === letter)?.key;

function ex08_vigener(encode, exercise = 8) {
    const text = document.querySelector(`#ex0${exercise}text`).value.toLowerCase();
    const key = document.querySelector(`#ex0${exercise}key`).value.toLowerCase();
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    const textKeys = text.split('').map(arrayEx02LetterToKey);
    const keyKeys = key.split('').map(arrayEx02LetterToKey);
    const result = [];

    for (let i = 0, j = 0; i < textKeys.length; i++, j++) {
        if (j === keyKeys.length) j = 0;
        result.push(math.mod(encode ? textKeys[i] + keyKeys[j] : textKeys[i] - keyKeys[j], vigener_array.length));
    }

    resultDiv.textContent = `${text}
${textKeys.join(' ')}
${key}
${keyKeys.join(' ')}
${result.map(arrayEx02KeyToLetter).join(' ')}
${result.join(' ')}
`;
}

function ex08_init(){
    updateTable(8);
}

const updateTable = (exercise) => {
    const table = document.querySelector(`#ex0${exercise}table`);
    let formattedTable = '<table><tr>';
    formattedTable += vigener_array.map((value) => {
        if (value.char !== ' ') return `<td>${value.char}</td>`;
    }).join('').toUpperCase();
    formattedTable += '</tr><tr>';
    formattedTable += vigener_array.map((value) => {
        if (value.key !== ' ') return `<td>${value.key}</td>`;
    }).join('').toUpperCase();
    formattedTable += '</tr></table>';
    table.innerHTML = formattedTable;
};

const clearResults = (exercise) => {
    document.querySelector(`#ex0${exercise}text`).value = '';
    document.querySelector(`#ex0${exercise}key`).value = '';
    document.querySelector(`#ex0${exercise}results`).textContent = '';
};

ex01_init();
ex02_init();
ex03_init();
ex04_init();
ex06_init();
ex08_init();