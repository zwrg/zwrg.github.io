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

function ord_calculate(exercise = 1) {
    const a = document.querySelector(`#ex0${exercise}a`).value.toLowerCase();
    const n = document.querySelector(`#ex0${exercise}n`).value.toLowerCase();
    const limit = Number.parseInt(document.querySelector(`#ex0${exercise}limit`).value.toLowerCase());
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    const aNumber = Number.parseInt(a);
    const nNumber = Number.parseInt(n);
    let resultText = '';

    let modulo = 1;
    let congruence_modulo = 1;
    resultText += `${a}^0 == ${1} (mod ${n}) = ${1}\n`;
    let i;
    const resultTextArray = [];
    for (i = 1; i < 1000000; i++) {
        congruence_modulo *= aNumber;
        modulo = congruence_modulo % nNumber;
        resultTextArray.push(`${aNumber}^${i} == ${congruence_modulo} (mod ${nNumber}) = ${modulo}\n`);
        congruence_modulo = modulo;
        if (modulo === 1) {
            console.log(`${aNumber}^${i} == ${congruence_modulo} (mod ${nNumber}) = ${modulo}`);
            break;
        }
    }
    if (i === 1000000) i = 'ERROR';
    resultText += resultTextArray.length < limit ? resultTextArray.join('') : `...\n` + resultTextArray.slice(resultTextArray.length - limit, resultTextArray.length).join('');
    resultText += `ord(${aNumber},${nNumber}) / ord_${nNumber}_(${aNumber}) = ${i}`;

    resultDiv.textContent = resultText;
}

function ord_init(exercise = 1) {
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    resultDiv.textContent = `a=11\nn=12`;
}

function ord_clear(exercise = 1) {
    document.querySelector(`#ex0${exercise}a`).value = '';
    document.querySelector(`#ex0${exercise}n`).value = '';
    ord_init();
}

function prm(a, n) {
    return ord(a, n) === euler_totient(n);
}

function prm_calculate(exercise = 2) {
    const a = document.querySelector(`#ex0${exercise}a`).value.toLowerCase();
    const n = document.querySelector(`#ex0${exercise}n`).value.toLowerCase();
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    const aNumber = Number.parseInt(a);
    const nNumber = Number.parseInt(n);
    let symbol = ''

    let check_ord = ord(aNumber, nNumber);
    let check_totient = euler_totient(nNumber);
    if (check_ord === check_totient) {
        symbol = '=';
    } else {
        symbol = '!=';
    }

    resultDiv.textContent = `ord(${aNumber},${nNumber}) / ord_${nNumber}_(${aNumber}) = ${check_ord}\n${symbol}\n${check_totient} = euler_totient(${nNumber})`;
}

function prm_init(exercise = 2) {
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    resultDiv.textContent = `a=7\nn=18`;
}

function prm_clear(exercise = 2) {
    document.querySelector(`#ex0${exercise}a`).value = '';
    document.querySelector(`#ex0${exercise}n`).value = '';
    prm_init();
}

function et_calculate(exercise = 3) {
    const n = document.querySelector(`#ex0${exercise}et`).value.toLowerCase();
    const resultDiv = document.querySelector(`#ex0${exercise}etresults`);

    const nNumber = Number.parseInt(n);

    let check_totient = euler_totient(nNumber);

    resultDiv.textContent = `euler_totient(${nNumber}) = ${check_totient}`;
}

function et_init(exercise = 3) {
    const resultDiv = document.querySelector(`#ex0${exercise}etresults`);
    resultDiv.textContent = `n=18`;
}

function et_clear(exercise = 3) {
    document.querySelector(`#ex0${exercise}et`).value = '';
    et_init();
}


function shanks_calculate(exercise = 4) {
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

function shanks_init(exercise = 4) {
    const resultDiv = document.querySelector(`#ex0${exercise}results`);

    resultDiv.textContent = `y=15\ng=37\nn=123`;
}

function shanks_clear(exercise = 4) {
    document.querySelector(`#ex0${exercise}y`).value = '';
    document.querySelector(`#ex0${exercise}g`).value = '';
    document.querySelector(`#ex0${exercise}n`).value = '';
    shanks_init();
}

ord_init();
prm_init();
et_init();
shanks_init();