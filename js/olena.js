const numbers = [1, 2, 3, 4, 5];

function sumOfNumbers(totalNum) {
  let sum = 0;

  for (let i = 0; i < totalNum.length; i++) {
    sum = sum + totalNum[i];
  }

  return sum;
}

console.log(sumOfNumbers([1, 2, 3, 4, 5]));
console.log(sumOfNumbers([100, 101, 200, 123]));
console.log(sumOfNumbers(numbers));