function readNumber() {
    let number = NaN;

    while (!isFinite(number)) {
        number = prompt('Введите число');
        if (number == null || number == '') {
            return null;
        }
        number = +number;
    }

    return number;
}

alert(`Число: ${readNumber()}`);