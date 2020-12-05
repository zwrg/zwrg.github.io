IP = {
	1: 58,
	2: 50,
	3: 42,
	4: 34,
	5: 26,
	6: 18,
	7: 10,
	8: 2,
	9: 60,
	10: 52,
	11: 44,
	12: 36,
	13: 28,
	14: 20,
	15: 12,
	16: 4,
	17: 62,
	18: 54,
	19: 46,
	20: 38,
	21: 30,
	22: 22,
	23: 14,
	24: 6,
	25: 64,
	26: 56,
	27: 48,
	28: 40,
	29: 32,
	30: 24,
	31: 16,
	32: 8,
	33: 57,
	34: 49,
	35: 41,
	36: 33,
	37: 25,
	38: 17,
	39: 9,
	40: 1,
	41: 59,
	42: 51,
	43: 43,
	44: 35,
	45: 27,
	46: 19,
	47: 11,
	48: 3,
	49: 61,
	50: 53,
	51: 45,
	52: 37,
	53: 29,
	54: 21,
	55: 13,
	56: 5,
	57: 63,
	58: 55,
	59: 47,
	60: 39,
	61: 31,
	62: 23,
	63: 15,
	64: 7,
};

const C_SUB = {
	1: 57,
	2: 49,
	3: 41,
	4: 33,
	5: 25,
	6: 17,
	7: 9,
	8: 1,
	9: 58,
	10: 50,
	11: 42,
	12: 34,
	13: 26,
	14: 18,
	15: 10,
	16: 2,
	17: 59,
	18: 51,
	19: 43,
	20: 35,
	21: 27,
	22: 19,
	23: 11,
	24: 3,
	25: 60,
	26: 52,
	27: 44,
	28: 36,
};

const D_SUB = {
	1: 63,
	2: 55,
	3: 47,
	4: 39,
	5: 31,
	6: 23,
	7: 15,
	8: 7,
	9: 62,
	10: 54,
	11: 46,
	12: 38,
	13: 30,
	14: 22,
	15: 14,
	16: 6,
	17: 61,
	18: 53,
	19: 45,
	20: 37,
	21: 29,
	22: 21,
	23: 13,
	24: 5,
	25: 28,
	26: 20,
	27: 12,
	28: 4,
};

PC2 = {
	1: 14,
	2: 17,
	3: 11,
	4: 24,
	5: 1,
	6: 5,
	7: 3,
	8: 28,
	9: 15,
	10: 6,
	11: 21,
	12: 10,
	13: 23,
	14: 19,
	15: 12,
	16: 4,
	17: 26,
	18: 8,
	19: 16,
	20: 7,
	21: 27,
	22: 20,
	23: 13,
	24: 2,
	25: 41,
	26: 52,
	27: 31,
	28: 37,
	29: 47,
	30: 55,
	31: 30,
	32: 40,
	33: 51,
	34: 45,
	35: 33,
	36: 48,
	37: 44,
	38: 49,
	39: 39,
	40: 56,
	41: 34,
	42: 53,
	43: 46,
	44: 42,
	45: 50,
	46: 36,
	48: 29,
	48: 32,
};

const E_SUB = {
	1: 32,
	2: 1,
	3: 2,
	4: 3,
	5: 4,
	6: 5,
	7: 4,
	8: 5,
	9: 6,
	10: 7,
	11: 8,
	12: 9,
	13: 8,
	14: 9,
	15: 10,
	16: 11,
	17: 12,
	18: 13,
	19: 12,
	20: 13,
	21: 14,
	22: 15,
	23: 16,
	24: 17,
	25: 16,
	26: 17,
	27: 18,
	28: 19,
	29: 20,
	30: 21,
	31: 20,
	32: 21,
	33: 22,
	34: 23,
	35: 24,
	36: 25,
	37: 24,
	38: 25,
	39: 26,
	40: 27,
	41: 28,
	42: 29,
	43: 28,
	44: 29,
	45: 30,
	46: 31,
	47: 32,
	48: 1,
};

S_BOX = {
	1: [
		[14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 9],
		[0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8],
		[4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0],
		[15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13],
	],
	2: [
		[15, 1, 8, 14, 6, 11, 3, 4, 9, 7, 2, 13, 12, 0, 5, 10],
		[3, 13, 4, 7, 15, 2, 8, 14, 12, 0, 1, 10, 6, 9, 11, 5],
		[0, 14, 7, 11, 10, 4, 13, 1, 5, 8, 12, 6, 9, 3, 2, 15],
		[13, 8, 10, 1, 3, 15, 4, 2, 11, 6, 7, 12, 0, 5, 14, 9],
	],
	3: [
		[10, 0, 9, 14, 6, 3, 15, 5, 1, 13, 12, 7, 11, 4, 2, 4],
		[13, 7, 0, 9, 3, 4, 6, 10, 2, 8, 5, 14, 12, 11, 15, 1],
		[13, 6, 4, 9, 8, 15, 3, 0, 11, 1, 2, 12, 5, 10, 14, 7],
		[1, 10, 13, 0, 6, 9, 8, 7, 4, 15, 14, 3, 11, 5, 2, 12],
	],
	4: [
		[7, 13, 14, 3, 0, 6, 9, 10, 1, 2, 8, 5, 11, 12, 4, 5],
		[13, 8, 11, 5, 6, 15, 0, 3, 4, 7, 2, 12, 1, 10, 14, 9],
		[10, 6, 9, 0, 12, 11, 7, 13, 15, 1, 3, 14, 5, 2, 8, 4],
		[3, 15, 0, 6, 10, 1, 13, 8, 9, 4, 5, 11, 12, 7, 2, 14],
	],
	5: [
		[2, 12, 4, 1, 7, 10, 11, 6, 8, 5, 3, 15, 13, 0, 14, 9],
		[14, 11, 2, 12, 4, 7, 13, 1, 5, 0, 15, 10, 3, 9, 8, 6],
		[4, 2, 1, 11, 10, 13, 7, 8, 15, 9, 12, 5, 6, 3, 0, 14],
		[11, 8, 12, 7, 1, 14, 2, 13, 6, 15, 0, 9, 10, 4, 5, 3],
	],
	6: [
		[12, 1, 10, 15, 9, 2, 6, 8, 0, 13, 3, 4, 14, 7, 5, 11],
		[10, 15, 4, 2, 7, 12, 9, 5, 6, 1, 13, 14, 0, 11, 3, 8],
		[9, 14, 15, 5, 2, 8, 12, 3, 7, 0, 4, 10, 1, 13, 11, 6],
		[4, 3, 2, 12, 9, 5, 15, 10, 11, 14, 1, 7, 6, 0, 8, 13],
	],
	7: [
		[4, 11, 2, 14, 15, 0, 8, 13, 3, 12, 9, 7, 5, 10, 6, 1],
		[13, 0, 11, 7, 4, 9, 1, 10, 14, 3, 5, 12, 2, 15, 8, 6],
		[1, 4, 11, 13, 12, 3, 7, 14, 10, 15, 6, 8, 0, 5, 9, 2],
		[6, 11, 13, 8, 1, 4, 10, 7, 9, 5, 0, 15, 14, 2, 3, 12],
	],
	8: [
		[13, 2, 8, 4, 6, 15, 11, 1, 10, 9, 3, 14, 5, 0, 12, 7],
		[1, 15, 13, 8, 10, 3, 7, 4, 12, 5, 6, 11, 0, 14, 9, 2],
		[7, 11, 4, 1, 9, 12, 14, 2, 0, 6, 10, 13, 15, 3, 5, 8],
		[2, 1, 14, 7, 4, 10, 8, 13, 15, 12, 9, 0, 3, 5, 6, 11],
	],
};

const P_SUB = {
	1: 16,
	2: 7,
	3: 20,
	4: 21,
	5: 29,
	6: 12,
	7: 28,
	8: 17,
	9: 1,
	10: 15,
	11: 23,
	12: 26,
	13: 5,
	14: 18,
	15: 31,
	16: 10,
	17: 2,
	18: 8,
	19: 24,
	20: 14,
	21: 32,
	22: 27,
	23: 3,
	24: 9,
	25: 19,
	26: 13,
	27: 30,
	28: 6,
	29: 22,
	30: 11,
	31: 4,
	32: 25,
};

const ROUND_KEYS = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];

const IP_SIZE = 64;
const ROUND_KEYS_SIZE = 16;
const C_SIZE = 28,
	D_SIZE = 28;
const PC2_SIZE = 48;
const E_SUB_SIZE = 48;
const P_SUB_SIZE = 32;

function log_with_format(string, spacing = 4) {
	let i = spacing;
	while (i < string.length) {
		string = string.slice(0, i) + ',' + string.slice(i, string.length);
		i += spacing + 1;
	}
	return string;
}

function des_decode(exercise = 1) {
	const k = document.querySelector(`#ex0${exercise}k`).value.toLowerCase();
	const m = document.querySelector(`#ex0${exercise}m`).value.toLowerCase();
	const c = document.querySelector(`#ex0${exercise}c`).value.toLowerCase();
	const resultDiv = document.querySelector(`#ex0${exercise}results`);

	let resultText = '';

	if (k === '' || m === '' || c === '') {
		return;
	}

	let binary_string_c = c
		.trim()
		.split('')
		.map((value) => Number.parseInt(value, 16).toString(2).padStart(4, '0'));

	console.log(`c:        ${c.toUpperCase().split('').join('    ')}`);
	console.log(`binary c: ${binary_string_c.join(' ')}`);

	resultText += `c:         ${c.toUpperCase().split('').join('   ')}\n`;
	resultText += `binary c:  ${binary_string_c.join('')}\n`;

	binary_string_c = binary_string_c.join('');
	let binary_string_lr = [];
	for (let i = 1; i <= IP_SIZE; i++) {
		binary_string_lr[i - 1] = binary_string_c[IP[i] - 1];
		// console.error(IP[i] + '=>' + binary_string_c[IP[i] - 1]);
	}

	console.log(`LR matrix: ${binary_string_lr.join('')}`);
	resultText += `LR matrix: ${binary_string_lr.join('')}\n`;

	let L = binary_string_lr.slice(0, IP_SIZE / 2);
	let R = binary_string_lr.slice(IP_SIZE / 2, binary_string_lr.length);

	console.log(`L: ${L.join('')}`);
	resultText += `L: ${L.join('')}\n`;
	console.log(`R: ${R.join('')}`);
	resultText += `R: ${R.join('')}\n`;

	console.log(`round keys: ${ROUND_KEYS.join(',')}`);
	resultText += `round keys: ${ROUND_KEYS.join(',')}\n`;

	let binary_string_k = k
		.trim()
		.split('')
		.map((value) => Number.parseInt(value, 16).toString(2).padStart(4, '0'));

	console.log(`k:        ${k.toUpperCase().split('').join('    ')}`);
	console.log(`binary k: ${binary_string_k.join(' ')}`);

	resultText += `k:         ${k.toUpperCase().split('').join('   ')}\n`;
	resultText += `binary k:  ${binary_string_k.join('')}\n`;

	binary_string_k = binary_string_k.join('');

	let C = [];
	let D = [];

	for (let i = 1; i <= C_SIZE; i++) {
		C[i - 1] = binary_string_k[C_SUB[i] - 1];
		D[i - 1] = binary_string_k[D_SUB[i] - 1];
	}

	console.log(`C: ${C.join('')}`);
	resultText += `C: ${C.join('')}\n`;
	console.log(`D: ${D.join('')}`);
	resultText += `D: ${D.join('')}\n`;

	resultText += `Key for round 16 is << of 28 so it is the same number\n  C0 = C16 and D0 = D16\n`;

	let CD = C.join('') + D.join('');
	let k_array = [];

	for (let i = 1; i <= PC2_SIZE; i++) {
		k_array[i - 1] = CD[PC2[i] - 1];
	}

	console.log(`key: ${k_array.join('')}`);
	resultText += `key: ${k_array.join('')}\n`;

	let E_R = [];
	for (let i = 1; i <= E_SUB_SIZE; i++) {
		E_R[i - 1] = R[E_SUB[i] - 1];
	}

	console.log(`E(R): ${E_R.join('')}`);
	resultText += `E(R): ${E_R.join('')}\n`;

	let E_R_XOR_K = [];
	for (let i = 0; i < E_SUB_SIZE; i++) {
		E_R_XOR_K[i] = (
			Number.parseInt(k_array[i]) ^ Number.parseInt(E_R[i])
		).toString();
	}

	console.log(`E(R) ^ K: ${E_R_XOR_K.join('')}`);
	resultText += `E(R) ^ K: ${E_R_XOR_K.join('')}\n`;

	let B = [];
	for (let i = 0; i < E_SUB_SIZE / 6; i++) {
		B[i] = E_R_XOR_K.slice(i * 6, (i + 1) * 6).join('');
	}

	console.log(`B: ${B.join(',')}`);
	resultText += `B: ${B.join(',')}\n`;

	let fkR = [];
	for (let i = 1; i <= B.length; i++) {
		const row = Number.parseInt(B[i - 1][0] + B[i - 1][6 - 1], 2);
		const col = Number.parseInt(B[i - 1].slice(1, 5), 2);
		console.log(`B[${i - 1}]: S[${row}][${col}]`);
		resultText += `B[${i - 1}]:S[${row}][${col}]\n`;
		fkR[i - 1] = S_BOX[i][row][col].toString(2).padStart(4, '0');
	}

	console.log(`fkR: ${fkR.join(',')}`);
	resultText += `fkR: ${fkR.join(',')}\n`;

	fkR = fkR.join('').split('');

	let fkR_P = [];
	for (let i = 1; i <= fkR.length; i++) {
		fkR_P[i - 1] = fkR[P_SUB[i] - 1];
	}

	console.log(`fkR_P: ${log_with_format(fkR_P.join(''))}`);
	resultText += `fkR_P: ${log_with_format(fkR_P.join(''))}\n`;

	let L15 = R;
	let R15 = [];
	for (let i = 0; i < L.length; i++) {
		R15[i] = (Number.parseInt(L[i]) ^ Number.parseInt(fkR_P[i], 2)).toString(
			10,
		);
	}

	console.log(`L15: ${log_with_format(L15.join(''))}`);
	resultText += `L15: ${log_with_format(L15.join(''))}\n`;

	console.log(`L15: ${Number.parseInt(L15.join(''), 2).toString(16)}`);
	resultText += `L15: ${Number.parseInt(L15.join(''), 2).toString(16)}\n`;

	console.log(`R15: ${log_with_format(R15.join(''))}`);
	resultText += `R15: ${log_with_format(R15.join(''))}\n`;

	console.log(`R15: ${Number.parseInt(R15.join(''), 2).toString(16)}`);
	resultText += `R15: ${Number.parseInt(R15.join(''), 2).toString(16)}\n`;

	resultDiv.textContent = resultText;
}

function des2_encode(exercise = 2) {
	const k = document.querySelector(`#ex0${exercise}k`).value.toLowerCase();
	const m = document.querySelector(`#ex0${exercise}m`).value.toLowerCase();
	const resultDiv = document.querySelector(`#ex0${exercise}results`);

	let resultText = '';

	if (k === '' || m === '') {
		return;
	}
	let binary_string_m = m
		.trim()
		.split('')
		.map((value) => Number.parseInt(value, 16).toString(2).padStart(4, '0'));

	console.log(`m:        ${m.toUpperCase().split('').join('    ')}`);
	console.log(`binary m: ${binary_string_m.join(' ')}`);

	resultText += `m:         ${m.toUpperCase().split('').join('   ')}\n`;
	resultText += `binary m:  ${binary_string_m.join('')}\n`;

	binary_string_m = binary_string_m.join('');
	let binary_string_lr = [];
	for (let i = 1; i <= IP_SIZE; i++) {
		binary_string_lr[i - 1] = binary_string_m[IP[i] - 1];
	}

	console.log(`LR matrix: ${binary_string_lr.join('')}`);
	resultText += `LR matrix: ${binary_string_lr.join('')}\n`;

	let L = binary_string_lr.slice(0, IP_SIZE / 2);
	let R = binary_string_lr.slice(IP_SIZE / 2, binary_string_lr.length);

	console.log(`L: ${L.join('')}`);
	resultText += `L: ${L.join('')}\n`;
	console.log(`R: ${R.join('')}`);
	resultText += `R: ${R.join('')}\n`;

	console.log(`round keys: ${ROUND_KEYS.join(',')}`);
	resultText += `round keys: ${ROUND_KEYS.join(',')}\n`;

	let binary_string_k = k
		.trim()
		.split('')
		.map((value) => Number.parseInt(value, 16).toString(2).padStart(4, '0'));

	console.log(`k:        ${k.toUpperCase().split('').join('    ')}`);
	console.log(`binary k: ${binary_string_k.join(' ')}`);

	resultText += `k:         ${k.toUpperCase().split('').join('   ')}\n`;
	resultText += `binary k:  ${binary_string_k.join('')}\n`;

	binary_string_k = binary_string_k.join('');

	let C = [];
	let D = [];

	for (let i = 1; i <= C_SIZE; i++) {
		C[i - 1] = binary_string_k[C_SUB[i] - 1];
		D[i - 1] = binary_string_k[D_SUB[i] - 1];
	}

	console.log(`C: ${C.join('')}`);
	resultText += `C: ${C.join('')}\n`;
	console.log(`D: ${D.join('')}`);
	resultText += `D: ${D.join('')}\n`;

	resultText += `Key for round 1 so is << of 1 \n`;

	const C_l = (
		(Number.parseInt(C.join(''), 2) << 1) |
		(Number.parseInt(C.join(''), 2) >> (C_SIZE - 1))
	)
		.toString(2)
		.slice(this.length - C_SIZE);
	const D_l = (
		(Number.parseInt(D.join(''), 2) << 1) |
		(Number.parseInt(D.join(''), 2) >> (C_SIZE - 1))
	)
		.toString(2)
		.slice(this.length - C_SIZE);

	console.log(`C_l: ${C_l}`);
	resultText += `C_l: ${C_l}\n`;

	console.log(`D_l: ${D_l}`);
	resultText += `D_l: ${D_l}\n`;

	let CD = C_l + D_l;
	let k_array = [];

	for (let i = 1; i <= PC2_SIZE; i++) {
		k_array[i - 1] = CD[PC2[i] - 1];
	}

	console.log(`key: ${k_array.join('')}`);
	resultText += `key: ${k_array.join('')}\n`;

	let E_R = [];
	for (let i = 1; i <= E_SUB_SIZE; i++) {
		E_R[i - 1] = R[E_SUB[i] - 1];
	}

	console.log(`E(R): ${E_R.join('')}`);
	resultText += `E(R): ${E_R.join('')}\n`;

	let E_R_XOR_K = [];
	for (let i = 0; i < E_SUB_SIZE; i++) {
		E_R_XOR_K[i] = (
			Number.parseInt(k_array[i]) ^ Number.parseInt(E_R[i])
		).toString();
	}

	console.log(`E(R) ^ K: ${E_R_XOR_K.join('')}`);
	resultText += `E(R) ^ K: ${E_R_XOR_K.join('')}\n`;

	let B = [];
	for (let i = 0; i < E_SUB_SIZE / 6; i++) {
		B[i] = E_R_XOR_K.slice(i * 6, (i + 1) * 6).join('');
	}

	console.log(`B: ${B.join(',')}`);
	resultText += `B: ${B.join(',')}\n`;

	let fkR = [];
	for (let i = 1; i <= B.length; i++) {
		const row = Number.parseInt(B[i - 1][0] + B[i - 1][6 - 1], 2);
		const col = Number.parseInt(B[i - 1].slice(1, 5), 2);
		console.log(`B[${i - 1}]: S[${row}][${col}]`);
		resultText += `B[${i - 1}]:S[${row}][${col}]\n`;
		fkR[i - 1] = S_BOX[i][row][col].toString(2).padStart(4, '0');
	}

	console.log(`fkR: ${fkR.join(',')}`);
	resultText += `fkR: ${fkR.join(',')}\n`;

	fkR = fkR.join('').split('');

	let fkR_P = [];
	for (let i = 1; i <= fkR.length; i++) {
		fkR_P[i - 1] = fkR[P_SUB[i] - 1];
	}

	console.log(`fkR_P: ${log_with_format(fkR_P.join(''))}`);
	resultText += `fkR_P: ${log_with_format(fkR_P.join(''))}\n`;

	let L1 = R;
	let R1 = [];
	for (let i = 0; i < L.length; i++) {
		R1[i] = (Number.parseInt(L[i]) ^ Number.parseInt(fkR_P[i], 2)).toString(10);
	}

	console.log(`L1: ${log_with_format(L1.join(''))}`);
	resultText += `L1: ${log_with_format(L1.join(''))}\n`;

	console.log(`L1: ${Number.parseInt(L1.join(''), 2).toString(16)}`);
	resultText += `L1: ${Number.parseInt(L1.join(''), 2).toString(16)}\n`;

	console.log(`R1: ${log_with_format(R1.join(''))}`);
	resultText += `R1: ${log_with_format(R1.join(''))}\n`;

	console.log(`R1: ${Number.parseInt(R1.join(''), 2).toString(16)}`);
	resultText += `R1: ${Number.parseInt(R1.join(''), 2).toString(16)}\n`;

	resultDiv.textContent = resultText;
}

function des_init(exercise = 1) {
	const resultDiv = document.querySelector(`#ex0${exercise}results`);
	resultDiv.textContent = `k=133457799BBCDFF1\nm=01234567789ABCDEF\nc=85E813540F0AB405`;
}

function des_clear(exercise = 1) {
	document.querySelector(`#ex0${exercise}k`).value = '';
	document.querySelector(`#ex0${exercise}m`).value = '';
	document.querySelector(`#ex0${exercise}c`).value = '';
	des_init();
}

function des2_init(exercise = 2) {
	const resultDiv = document.querySelector(`#ex0${exercise}results`);
	resultDiv.textContent = `k=1A624C89520DEC46\nm=AB01CD23E4F56789`;
}

function des2_clear(exercise = 2) {
	document.querySelector(`#ex0${exercise}k`).value = '';
	document.querySelector(`#ex0${exercise}m`).value = '';
	des2_init();
}

des_init();
des2_init();
