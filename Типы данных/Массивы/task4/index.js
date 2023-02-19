function sumInput(array) {
    let number = 0;
    let sum = 0;

    while (isFinite(number)) {
        number = prompt('Введите число');
        if (number == null || number == '' || !isFinite(number)) {
            return sum;
        }
        number = +number;
        sum += number;
        array.push(number);
    }

    return sum;
}

let array = [];
console.log(sumInput(array))