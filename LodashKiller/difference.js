
const arr1 = [1,2,3];
const arr2 = [2,3,4,5,6];

const difference = (a, b) => a.filter(item => !b.includes(item));
  
const result = difference(arr1, arr2);

console.log(result);