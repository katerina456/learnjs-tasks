let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)

function filterRange(arr, a, b) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            newArray.push(arr[i]);
        }
    }
    
    return newArray;
}