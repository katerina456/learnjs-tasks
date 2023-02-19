alert( extractCurrencyValue('$120') === 120 ); // true

function extractCurrencyValue(str) {
    let number = +str.slice(1);
    return number;
}