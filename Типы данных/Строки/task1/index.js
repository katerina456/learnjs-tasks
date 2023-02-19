alert(ucFirst("вася")) // "Вася";

function ucFirst(str) {
    if (str.length == 0) return str;
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr;
}