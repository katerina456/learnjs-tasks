let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10

function Calculator(arr) {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {
        let split = str.split(' '),
        a = +split[0],
        operator = split[1],
        b = +split[2]
    
        if (!this.methods[operator] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[operator](a, b);
    }
    
    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8