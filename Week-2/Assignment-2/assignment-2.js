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

class numCalculation {
    constructor(operator, num1, num2){
        this.op = operator;
        this.n1 = num1;
        this.n2 = num2;
    }
}

var ObjAdd = new numCalculation("+", 2, 3);
var ObjMinus = new numCalculation("-", 2, 3);
var ObjDivide = new numCalculation("/", 2, 3);

console.log(calculate(ObjAdd));
console.log(calculate(ObjMinus));
console.log(calculate(ObjDivide));