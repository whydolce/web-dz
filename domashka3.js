let num1 = 15;
let num2 = 12;
let oper = "*";

if (oper == "*") {
    function multi(x, y) {
        return x * y;
    }
    console.log(multi(num1, num2));
}

if (oper == "/") {
    function div(x, y) {
        return x / y;
    }
    console.log(div(num1, num2));
}

if (oper == "-") {
    function sub(x, y) {
        return x - y;
    }
    console.log(sub(num1, num2));
}

if (oper == "+") {
    function add(x, y) {
        return x + y;
    }
    console.log(add(num1, num2));
}
