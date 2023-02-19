function randomInteger(min, max) {
  let number = Math.random() * (max + 1 - min) + min;
  return Math.floor(number);
}

alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5