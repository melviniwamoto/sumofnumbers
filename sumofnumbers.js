const sumFor = (arr) => {
  let retval = 0;
  for (let i = 0; i < arr.length; i++) {
    retval += arr[i];
  }
  return retval;
};
const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(sumFor(test));

const sumWhi = (arr) => {
  let i = 0;
  let retval = 0;
  while (i < arr.length) {
    retval += arr[i];
    i++;
  }
  return retval;
};
console.log(sumWhi(test));

const sumRec = (arr, ind) => {
  if (ind === arr.length - 1) {
    return arr[ind];
  }
  return arr[ind] + sumRec(arr, ind + 1);
};
console.log(sumRec(test, 0));

const redFunc = (memo, elem) => memo + elem;
const sumUnd = (arr) => _.reduce(arr, redFunc);
console.log(sumUnd(test));
