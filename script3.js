const array = [1, 3, 5, 4, 5, 7]

const func = array => {
    const resultArray = []
    const max = array.length - 3

    for (let index = 0; index <= max; index++){
        const [a, b, c] = array.slice(index, index + 3)
        const resultValue = (a > b && b < c || a < b && b > c) ? 1 : 0
        resultArray.push(resultValue)
    }
    return resultArray
}

func(array)


const compareNums = (a, b, c) => Number((b > a && b > c) || (b < a && b < c)) // стрелочная функция, которая принимает условия через конструктор Number??


const reduceShit = (list) => { // reduceshit - (переменная)ссылка на стрелочную функцию которая может принимать какие-то данные(list)
    return list.reduce((acc, value, index) => { // функция редьюсер
        if(index + 2 >= list.length) return acc; //если индекс + 2 больше или равен длине массива то вернуть пустой массив(???)
        const currentResult = compareNums(value, list[index + 1], list[index +2]); //compareNums - callback(??) принимающий текущий элемент массива + два последующих за ним
        return [...acc, currentResult]; // "раскладываем" массив в котором наши значения и переменную в которой принимаем массив?(ШТООО??)
    },[]) //(НАШ ACC???)initialValue - ставим пустой масив (чтобы туда ложить наши значения?)
    }
reduceShit([1, 3, 5, 4, 5, 7])


// acc - исходное значение, с которого начинаются вычисления, равно нулю
// value - текущий элемент массива
// index - ячейка массива

const m = [
    [1, 2, 3, 2, 7],
    [4, 5, 6, 8, 1],
    [7, 8, 9, 4, 5],
  ];
  const perfect = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  function checkMatr(matrix) {
    const start = matrix[0].length - 3;
    let result = [];
    for (let i = 0; i <= start; i++) {
      const section = matrix.flatMap((row) => row.slice(i, i + 3));
      if (perfect.every((el) => section.includes(el))) {
        result.push(true);
      } else {
        result.push(false);
      }
    }
    return result;
  }
  
  console.log(checkMatr(m));



const compareNums = (a, b, c) => Number((b > a && b > c) || (b < a && b < c)) // стрелочная функция, которая принимает условия через конструктор Number??

const reduceShit = (list) => { // reduceshit - (переменная)ссылка на стрелочную функцию которая может принимать какие-то данные(list)
    return list.reduce((acc, value, index) => { // функция редьюсер
        if(index + 2 >= list.length) return acc; //если индекс + 2 больше или равен длине массива то вернуть пустой массив(???)
        const currentResult = compareNums(value, list[index + 1], list[index +2]); //compareNums - callback(??) принимающий текущий элемент массива + два последующих за ним
        return [...acc, currentResult]; // "раскладываем" массив в котором наши значения и переменную в которой принимаем массив?(ШТООО??)
    },[]) //(НАШ ACC???)initialValue - ставим пустой масив (чтобы туда ложить наши значения?)
    }
reduceShit([1, 3, 5, 4, 5, 7])


