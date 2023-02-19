function getMaxSubSum(array) {
    let sumMax = array[0];

    for (let i = 0; i < array.length; i++) {
        let sum = 0;
        for (let j = i; j < array.length; j++) {
          sum += array[j];
          sumMax = Math.max(sumMax, sum);
        }
    }

    return sumMax;
}

console.log(getMaxSubSum([-1, 2, 3, -9])) // 5 (сумма выделенных элементов)
console.log(getMaxSubSum([2, -1, 2, 3, -9])) // 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])) // 11
console.log(getMaxSubSum([-2, -1, 1, 2])) // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])) // 100
console.log(getMaxSubSum([1, 2, 3])) // 6 (берём все)