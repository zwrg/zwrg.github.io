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

function getMultiplicationMod(a, b, m) {
    let x;
    let c;
    let r;
    if (a >= m) a %= m;
    if (b >= m) b %= m;
    x = a;
    c = x * b / m;
    r = (a * b - c * m) % m;
    return r < 0 ? r + m : r;
}

function isPrime(number) {
    return math.isPrime(number);
}

function euler_totient(n) {
    let result = 1;
    for (let i = 2; i < n; i++) {
        if (math.gcd(i, n) === 1)
            result++;
    }
    return result;
}

function rsa(exercise = 1, encrypt = true) {
    const p = document.querySelector(`#ex0${exercise}p`).value.toLowerCase();
    const q = document.querySelector(`#ex0${exercise}q`).value.toLowerCase();
    const e = document.querySelector(`#ex0${exercise}e`).value.toLowerCase();
    const text = document.querySelector(`#ex0${exercise}text`).value.toLowerCase();
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

    const textArray = text.split('');
    console.info(textArray.join(','));

    const textNumberArray = textArray.map(rsa_get_key_by_letter);
    console.info(textNumberArray.join(','));

    const cryptogram = encrypt ? textNumberArray.map(value => getExponentMod(value, e, n)) : textNumberArray.map(value => getExponentMod(value, d, n));
    console.info(cryptogram.join(','));

    const letterCryptogram = cryptogram.map(rsa_get_letter_by_key)
    console.info(letterCryptogram.join(','));
    if (letterCryptogram.some(value => value === undefined)) {
        console.warn(`cannot convert whole cryptogram to letter format`);
        resultDiv.textContent = cryptogram.join(',')
    } else {
        resultDiv.textContent = letterCryptogram.join(',')

    }
}

function rsa_encrypt(exercise = 1) {
    rsa(exercise, true);
}

function rsa_decrypt(exercise = 1) {
    rsa(exercise, false);
}

function rsa_clear() {
    rsa_init();
}

function eg(exercise = 2, encrypt = true) {
    const c1 = document.querySelector(`#ex0${exercise}c1`).value.toLowerCase();
    const c2 = document.querySelector(`#ex0${exercise}c2`).value.toLowerCase();
    const p = document.querySelector(`#ex0${exercise}p`).value.toLowerCase();
    const a = document.querySelector(`#ex0${exercise}a`).value.toLowerCase();
    const g = document.querySelector(`#ex0${exercise}g`).value.toLowerCase();
    const s = document.querySelector(`#ex0${exercise}s`).value.toLowerCase();
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    const c1Number = Number.parseInt(c1);
    const c2Number = Number.parseInt(c2);
    const pNumber = Number.parseInt(p);
    const sNumber = Number.parseInt(s);
    const aNumber = Number.parseInt(a);
    const gNumber = Number.parseInt(g);
    let m = getExponentMod(c1Number, pNumber - 1 - sNumber, pNumber);
    m *= c2Number % pNumber;
    m %= pNumber;
    console.info(`m=${m}`);

    resultDiv.textContent = m.toString();
}

function rsa_init(exercise = 1) {
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    resultDiv.textContent = `TEKST\nSLWAB`;
}

function eg_encrypt(exercise = 2) {
    eg(exercise, true);
}

function eg_decrypt(exercise = 2) {
    eg(exercise, false);
}

function eg_clear() {
    eg_init();
}

function eg_init(exercise = 2) {
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    resultDiv.textContent = `24\n37\n53\n30\n2`;
}

rsa_init();
eg_init();
