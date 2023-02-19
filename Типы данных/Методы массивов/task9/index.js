let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [ vasya, petya, masha ];

sortByAge(arr);

// теперь: [vasya, masha, petya]
alert(arr[0].name); // Вася
alert(arr[1].name); // Маша
alert(arr[2].name); // Петя

function sortByAge(users) {
  users.sort(mySort);
}

function mySort(a, b) {
  if (a.age > b.age) return 1;
  if (a.age == b.age) return 0;
  if (a.age < b.age) return -1;
}
