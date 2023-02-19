let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");

let index = Math.floor((styles.length - 1) / 2);
styles[index] = 'Классика';

alert( styles.shift() );

styles.unshift('Регги');
styles.unshift('Рэп');

console.log(styles);