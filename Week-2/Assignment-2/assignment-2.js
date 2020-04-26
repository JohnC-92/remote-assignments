// Assignment 2

function calculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if(args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    return result;
}

// Method 1
class numCalculation {
    constructor(operator, num1, num2){
        this.op = operator;
        this.n1 = num1;
        this.n2 = num2;
    }
}

var objAdd = new numCalculation("+", 2, 3);
var objMinus = new numCalculation("-", 2, 3);
var objDivide = new numCalculation("/", 2, 3);

console.log(calculate(objAdd));
console.log(calculate(objMinus));
console.log(calculate(objDivide));

// Method 2
var numAdd = {
    op: '+',
    n1: 2,
    n2: 3,
}

console.log(calculate(numAdd));

// Method 3

var objAdd2 = new function() {
    this.op = '+';
    this.n1 = 2;
    this.n2 = 3;
}

console.log(calculate(objAdd2));
