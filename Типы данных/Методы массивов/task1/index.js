console.log(camelize("background-color")) // 'backgroundColor';
console.log(camelize("list-style-image")) // 'listStyleImage';
console.log(camelize("-webkit-transition")) // 'WebkitTransition';

function camelize(str) {
    let array = str.split('-');
    let start = str[0] == '-' ? 0 : 1;

    for (let i = start; i < array.length; i++) {
        array[i] = array[i].slice(0,1).toUpperCase() + array[i].slice(1);
    }
    
    let newStr = array.join('');
    return newStr;
}