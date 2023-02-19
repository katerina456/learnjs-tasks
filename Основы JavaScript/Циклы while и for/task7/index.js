let number = +prompt('Введите число');

for (let i = 2; i <= number; i++) {
    let flag = true;
    if (i === 2) {continue;}
    for (let n = 2; n < i; n++) {
        if (i % n === 0) {
            flag = false;
            continue;
        }
    } 
    if (flag) {
        alert(i);
    }
}