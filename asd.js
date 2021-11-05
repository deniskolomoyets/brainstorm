const m = [
    [1, 2, 3, 2, 7],
    [4, 5, 6, 8, 1],
    [7, 8, 9, 4, 5],
  ];


  const merge3 = (matrix) =>{ m.flatMap((row) =>
     row.slice(matrix[0].length, matrix[0].length + 3));
    return matrix;
}
  console.log(merge3(m));
//   function checkMatr(matrix){}
//   for (let i = 0; i <= matrix[0].length - 3; i++) {
//     const section = matrix.flatMap((row) => row.slice(i, i + 3));
//     console.log(section)}




const reduceShit = (matrix) =>{ 
    return matrix.reduce((acc, item, index) => {
    if(index[0].length + 3 >= matrix.length ) return acc;
    const section = matrix.flatMap((row) => row.slice(item, matrix[index + 1], matrix[index + 2]));
    return [...acc, section]
}, [])
}

console.log(result)