const x = [
	['Hello', 'world'],
	['Brad', 'came', 'to', 'dinner', 'width', 'us'],
	['He',  'loves', 'tacos']
];

const toString = (arr) => arr.reduce((acc, word, index) =>{
	if(index >= arr.length - 1) return acc + arr[arr.length - 1];
	return acc + word + ' ';
}, '')



console.log(toString(x));
/////////////////////////////////////////////////////////////////////////////////

const func = (arr) => arr.map((value) => value.join(' ')).join(' ');

console.log(func(x));


/////////////////////////////////////////////////////////////////////////////////
const x = [
	['Hello', 'world'],
	['Brad', 'came', 'to', 'dinner', 'width', 'us'],
	['He',  'loves', 'tacos']
];

const func = (arr) => arr.map((value) => value + ' ').join(' ');

/////////////////////////////////////////////////////////////////////////////////

const x = [
	['Hello', 'world'],
	['Brad', 'came', 'to', 'dinner', 'width', 'us'],
	['He',  'loves', 'tacos']
];

const func = (arr) => {
	const resultArr = arr.map((value) => '"*' + value.join(' ') + '*"' + '\n');
	return ' ' + resultArr.join(' ');
}
console.log(func(x));






