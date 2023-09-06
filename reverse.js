let arr = [1, 2, 3, 4, 5];

const reverse1 = (arr) => {
  let newArr = arr.reverse();
};
const reverse2 = (arr) => {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  console.log(newArr);
};
const reverse3 = (arr) => {
  let i = 0;
  let n = arr.length - 1;
  let j = n;
  let newArr = [];

  for (i, j; i <= n, j >= 0; i++, j--) {
    // let temp = arr[i];
    // arr[i] = arr[j];
    // arr[j] = temp;
    newArr[i] = arr[j];
  }
  console.log(newArr);
};

const reverse4 = (arr) => {
  let i = 0;
  let n = arr.length - 1;
  let j = n;
  for (; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  console.log(arr);
};

// console.log(arr);
// reverse1(arr);
// console.log(arr);
// reverse2(arr);

reverse4(arr);
console.log(arr);
