const numbers = [1, 2, 3, 4, 5];
const elseNum = [12, 16, 56, 83];


console.log(totalNum([23, 45, 56]));
console.log(totalNum([2, 2, 2, 2]));
console.log(totalNum([0.2, 0.8, 2, 4.8]));
function totalNum(arr) {
    let total = 0;

    for (let i = 0 ; i < arr.length; i++) {
        total = total + arr[i];
    }
    
    return total;
}

totalNum(numbers);
