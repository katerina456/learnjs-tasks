let user = {
    name: 'John',
    age: 30
};
  
alert( count(user) ); // 2

function count(obj) {
    let number = 0;
    for (let key of Object.keys(obj)) {
        number++;
    }
    return number;
}
