let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let maxSum = 0;
    let userName = '';

    if (!salaries) return null;
    for(let [name, sum] of Object.entries(salaries)) {
        if(maxSum < sum) {
            maxSum = sum;
            userName = name;
        }
    }

    return userName;
}

alert(topSalary(salaries));