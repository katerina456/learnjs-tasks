it("Возводит x в степень n", function() {
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result);

  result *= x;
  assert.equal(pow(x, 2), result);

  result *= x;
  assert.equal(pow(x, 3), result);
});

/* В одном it содержится 3 теста. Если один из них выдаст ошибку, 
то придется искать какой из них отработал не так как ожидалось. 
Логичнее разбить весть код на 3 отдкльных it
 */