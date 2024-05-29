class GetArray {
	constructor() {
		this._value = [];
	}

	get value() {
		return this._value;
	}

	set value(val) {
		this._value.push(val);
	}
}

const newArray = new GetArray();

const inputEl = document.getElementById("value");
const btnEl = document.getElementById("getValue");

function getValue() {
	let inputValue = +inputEl.value;

	newArray.value = inputValue;

	inputEl.value = "";

	const positiveNegative = comparePositiveNegativeNumber([...newArray.value]);
	console.log(positiveNegative);
}

btnEl.addEventListener("click", getValue);

// const arr = newArray.value;

//tinh tong cac so duong

function tinhTongSoDuong(arr) {
	const tong = arr.reduce((total, current) => {
		if (current > 0) {
			return total + current;
		}
	}, 0);

	return tong;
}

// dem cac so duong

function demSoDuong(arr) {
	count = 0;
	arr.forEach((val) => {
		if (val > 0) {
			count = count + 1;
		}
	});

	return count;
}

//tim so nho nhat
function timSoNhoNhat(arr) {
	let min = arr[0];
	console.log(min);
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}

	return min;
}

//tim so duong nho nhat
function timSoDuongNhoNhat(arr) {
	const positiveValues = arr.filter((val) => val > 0);

	let min = positiveValues[0];

	for (i = 0; i < positiveValues.length; i++) {
		if (positiveValues[i] < min) {
			min = positiveValues[i];
		}
	}

	return min;
}

//tim so chan cuoi cung
function timSoChanCuoiCung(arr) {
	const oddValues = arr.filter((val) => val % 2 === 0);

	const lastOddValues = oddValues[oddValues.length - 1];

	return oddValues.length === 0 ? -1 : lastOddValues;
}

// doi cho hai gia tri.
function swapTwoPositions(arr, x, y) {
	var tempt = arr[x];
	arr[x] = arr[y];
	arr[y] = tempt;

	return arr;
}

//sap xep mang theo gia tri tang dan.
function sortArray(arr) {
	arr.sort((a, b) => a - b);

	return arr;
}

//tim so nguyen to dau tien.

function findFirstPrimeNumber(arr) {
	var isPrime = true;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 2) return arr[i];
		for (var j = 2; j < arr[i]; j++) {
			if (arr[i] % j === 0) {
				isPrime = false;
				break;
			} else {
				isPrime = true;
				return arr[i];
			}
		}
	}
	if (!isPrime) return -1;
}

// tim xem trong mang co bao nhieu so nguyen

function checkInteger(arr) {
	var countInteger = 0;
	arr.forEach((item) => {
		if (Number.isInteger(item)) {
			countInteger++;
		}
	});
	return countInteger;
}

// so sanh so luong so nguyen duong va nguyen am

function comparePositiveNegativeNumber(arr) {
	var countPositive = 0;
	var countNegative = 0;
	arr.forEach((item) => {
		if (item < 0) {
			countNegative++;
		} else {
			countPositive++;
		}
	});
	return { countPositive, countNegative };
}
