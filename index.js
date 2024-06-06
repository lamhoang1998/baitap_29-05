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
const btnSum = document.getElementById("sum");
const arrayResultEl = document.getElementById("array-result");
const sumResultEl = document.getElementById("sum-result");

function getValue() {
	let inputValue = +inputEl.value;
	if (!Number.isInteger(inputValue)) {
		alert("you should give an integer value");
	}

	newArray.value = inputValue;
	let result = JSON.stringify(newArray.value);
	inputEl.value = "";
	arrayResultEl.innerHTML = `Current Array: ${result}`;
}

btnEl.addEventListener("click", getValue);

// const arr = newArray.value;

//tinh tong cac so duong

function tinhTongSoDuong(arr) {
	console.log(arr);
	const tong = arr.reduce((total, current) => {
		return current >= 0 ? total + current : total;
	}, 0);
	console.log(tong);
	return tong;
}

btnSum.addEventListener("click", () => {
	const sum = tinhTongSoDuong([...newArray.value]);
	console.log(sum);
	sumResultEl.innerHTML = `Sum: ${sum} `;
});
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

const btnCountPositive = document.getElementById("count-positive");
const countPositiveEL = document.getElementById("count-positive-result");
btnCountPositive.addEventListener("click", () => {
	const positiveNumbers = demSoDuong([...newArray.value]);
	countPositiveEL.innerHTML = `The number for positive integers: ${positiveNumbers}`;
});

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

const btnSmallestValue = document.getElementById("smallest-value");
const smallestNumberValue = document.getElementById("smallest-value-result");
btnSmallestValue.addEventListener("click", () => {
	const smallestValue = timSoNhoNhat([...newArray.value]);
	smallestNumberValue.innerHTML = ` The smallest value in the array: ${smallestValue}`;
});

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

const btnSmallestPositive = document.getElementById("smallest-positive-value");
const smallestPositiveNumberResult = document.getElementById(
	"smallest-positive-result"
);
btnSmallestPositive.addEventListener("click", () => {
	const smallestPositive = timSoDuongNhoNhat([...newArray.value]);
	smallestPositiveNumberResult.innerHTML = `The smallest positive value in the array: ${smallestPositive}`;
});

//tim so chan cuoi cung
function timSoChanCuoiCung(arr) {
	const oddValues = arr.filter((val) => val % 2 === 0);

	const lastOddValues = oddValues[oddValues.length - 1];

	return oddValues.length === 0 ? -1 : lastOddValues;
}

const btnLastEven = document.getElementById("last-even-number");
const lastEvenResult = document.getElementById("even-number-result");
btnLastEven.addEventListener("click", () => {
	const lastEven = timSoChanCuoiCung([...newArray.value]);
	lastEvenResult.innerHTML = `The last even number in the array: ${lastEven}`;
});

// doi cho hai gia tri.
function swapTwoPositions(arr, x, y) {
	var tempt = arr[x];
	arr[x] = arr[y];
	arr[y] = tempt;

	return arr;
}

const firstIndexInputEl = document.getElementById("first-index");
const secondIndexInputEl = document.getElementById("second-index");
const btnSwap = document.getElementById("swap-btn");
const swapResult = document.getElementById("swap-result");

btnSwap.addEventListener("click", () => {
	const firstIndex = +firstIndexInputEl.value;
	const secondIndex = +secondIndexInputEl.value;
	const swapArray = swapTwoPositions(
		[...newArray.value],
		firstIndex,
		secondIndex
	);
	let result = JSON.stringify(swapArray);
	firstIndexInputEl.value = "";
	secondIndexInputEl.value = "";
	swapResult.innerHTML = `The array after swaping: ${result}`;
});

//sap xep mang theo gia tri tang dan.
function sortArray(arr) {
	arr.sort((a, b) => a - b);

	return arr;
}

const btnSorting = document.getElementById("sorting-btn");
const sortingResult = document.getElementById("sorting-result");
btnSorting.addEventListener("click", () => {
	let sortedArray = JSON.stringify(sortArray([...newArray.value]));
	sortingResult.innerHTML = `The array after sorting: ${sortedArray}`;
});

//tim so nguyen to dau tien.

function findFirstPrimeNumber(arr) {
	var isPrime = true;
	var firstPrime = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] === 2) return arr[i];
		else {
			for (var j = 2; j < arr[i]; j++) {
				if (arr[i] % j === 0) {
					isPrime = false;
					break;
				} else {
					isPrime = true;
					firstPrime = arr[i];
				}
			}
		}
	}
	if (isPrime) return firstPrime;
	else return -1;
}

const btnPrimeNumber = document.getElementById("prime-number-value");
const primeNumberResult = document.getElementById("prime-number-result");
btnPrimeNumber.addEventListener("click", () => {
	const firstPrimeNumber = findFirstPrimeNumber([...newArray.value]);
	primeNumberResult.innerHTML = `The first prime number in the array: ${firstPrimeNumber}`;
});

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

const wholeArray = new GetArray();
const wholeArrayInput = document.getElementById("whole-numbers");
const btnWhole = document.getElementById("get-whole-numbers");
const wholeNumberResult = document.getElementById("whole-number-result");
const btnCountInteger = document.getElementById("count-integer-numbers");
const integerResult = document.getElementById("integer-numbers-result");

btnWhole.addEventListener("click", () => {
	const wholeNumber = +wholeArrayInput.value;
	wholeArray.value = wholeNumber;

	let result = JSON.stringify(wholeArray.value);
	wholeArrayInput.value = "";
	wholeNumberResult.innerHTML = `Current whole number: ${result}`;
});

btnCountInteger.addEventListener("click", () => {
	const integer = checkInteger([...wholeArray.value]);
	integerResult.innerHTML = `The number of integer values in the whole number array: ${integer}`;
});
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

const btnCompare = document.getElementById("compare-integer");
const compareResult = document.getElementById("compare-result");

btnCompare.addEventListener("click", () => {
	const positiveNegativeInteger = comparePositiveNegativeNumber([
		...newArray.value,
	]);
	if (
		positiveNegativeInteger.countPositive >
		positiveNegativeInteger.countNegative
	)
		compareResult.innerHTML = `After compare: The number for positive integer ${positiveNegativeInteger.countPositive} is bigger than the number of negative integer ${positiveNegativeInteger.countNegative}`;
	else
		compareResult.innerHTML = `After compare: The number for negative integer ${positiveNegativeInteger.countNegative} is bigger than the number of negative integer ${positiveNegativeInteger.countPositive}`;
});
