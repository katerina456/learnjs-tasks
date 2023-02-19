function unique(arr) {
  let newArr = [];
  arr.forEach(element => {
    if (!newArr.includes(element)) {
      newArr.push(element);
    }
  });
  return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O