function pow(x,n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *=x;
  }
  return result;
}

pow(3, 2) // 9
console.log(pow(3, 2));

pow(3, 3) // 27
console.log(pow(3, 3));

pow(1, 100) // 1
console.log(pow(1, 100));

let number = +prompt('Введите число?', 1);
let stepen = +prompt('Введите степень?', 1);

if (Number.isInteger(stepen)) {
  alert(pow(number, stepen));
} else {
  alert('Срепень числа должна быть целой');
}
