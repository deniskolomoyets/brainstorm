const scores = [
    [3, 7],
    [4, 1],
    [4, 4],
    [3, 5],
    [4, 5],
    [3, 2],
    [4, 3],
    [6, 5],
];

export default (scores) => {
  let result = 0;
  for (const score of scores) {
    result += Math.sign(score[0] - score[1]);
  }

  if (result > 0) {
    return 'canada';
  }
  if (result < 0) {
    return 'ussr';
  }

  return null;
};



// const func = scores.reduce( function(acc, value, index){
//    return [...acc, value[0] - value[1]];
// },[]);
// const end = func.
// console.log(numArray);
// const result = reverseArr.reduce( function(acc, element){
//     return acc - element
//   });

//  console.log(result);
