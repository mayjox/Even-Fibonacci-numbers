const startTime = performance.now();

let arr = [1, 2];

let sum = 2;

while (arr) {
  if (arr[arr.length - 1] + arr[arr.length - 2] > 4000000) break;
  else arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  if (arr[arr.length - 1] % 2 == 0) sum = sum + arr[arr.length - 1];
}

// console.log(arr, arr.length)

console.log(
  `The sum of the even numbers in the fibonacci series not exceeding 4 million is ${sum}`
);

const endTime = performance.now();
