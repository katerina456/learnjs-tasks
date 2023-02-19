/* function A() { ... }
function B() { ... }

let a = new A();
let b = new B();

alert( a == b ); // true */

//Да, возможно если обе функции возвращают один и тот же объект

let user = {
  name: 'Ann'
};

function A() { return user; }
function B() { return user; }

alert( new A() == new B() ); // true