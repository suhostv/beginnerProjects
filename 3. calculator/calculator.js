window.onload = function() {
    var num = "";
    var firstNum = "";
    var secondNum = "";
    var sign;
    var getNum = document.getElementById("null");
    getNum.onclick = function() {
        var num1 = document.getElementById("input");
        num1.value = num + "0";
        num += "0";
    }

    var getNum = document.getElementById("one");
    getNum.onclick = function() {
        var num1 = document.getElementById("input");
        num1.value = num + "1";
        num += "1";
    }

    var getNum = document.getElementById("two");
    getNum.onclick = function() {
        var num1 = document.getElementById("input");
        num1.value = num + "2";
        num += "2";
    }

    var getNum = document.getElementById("three");
    getNum.onclick = function() {
        var num1 = document.getElementById("input");
        num1.value = num + "3";
        num += "3";
    }

    var getNum = document.getElementById("four");
    getNum.onclick = function() {
        var num1 = document.getElementById("input");
        num1.value = num + "4";
        num += "4";
    }

    var getNum = document.getElementById("five");
    getNum.onclick = function() {
        var num1 = document.getElementById("input");
        num1.value = num + "5";
        num += "5";
    }

    var getNum = document.getElementById("six");
    getNum.onclick = function() {
        var num1 = document.getElementById("input");
        num1.value = num + "6";
        num += "6";
    }

    var getNum = document.getElementById("seven");
    getNum.onclick = function() {
        var num1 = document.getElementById("input");
        num1.value = num + "7";
        num += "7";
    }

    var getNum = document.getElementById("eight");
    getNum.onclick = function() {
        var num1 = document.getElementById("input");
        num1.value = num + "8";
        num += "8";
    }

    var getNum = document.getElementById("nine");
    getNum.onclick = function() {
        var num1 = document.getElementById("input");
        num1.value = num + "9";
        num += "9";
    }

    var pressPlus = document.getElementById("plus");
    pressPlus.onclick = function() {
        if (num === "") {
            alert("Input first number for equasion");
            return;
        }
        firstNum = parseInt(num, 10);
        sign = "+";
        num = "";
        var num1 = document.getElementById("input");
        num1.value = "";
    }
    var pressMinus = document.getElementById("minus");
    pressMinus.onclick = function() {
        if (num === "") {
            alert("Input first number for equasion");
            return;
        }
        firstNum = parseInt(num, 10);
        sign = "-";
        num = "";
        var num1 = document.getElementById("input");
        num1.value = "";
    }
    var pressMult = document.getElementById("multiply");
    pressMult.onclick = function() {
        if (num === "") {
            alert("Input first number for equasion");
            return;
        }
        firstNum = parseInt(num, 10);
        sign = "*";
        num = "";
        var num1 = document.getElementById("input");
        num1.value = "";
    }
    var pressDivide = document.getElementById("divide");
    pressDivide.onclick = function() {
        if (num === "") {
            alert("Input first number for equasion");
            return;
        }
        firstNum = parseInt(num, 10);
        sign = "/";
        num = "";
        var num1 = document.getElementById("input");
        num1.value = "";
    }

    var pressEq = document.getElementById("eq");
    pressEq.onclick = function() {
        secondNum = num;
        if (firstNum === "") {
            alert("Choose sign for equasion");
            return;
        }
        if (num === "" && firstNum === "") {
            alert("Input first number for equasion");
            return;
        }
        if (secondNum === "") {
            alert("Input second number for equasion");
            return;
        } else {
            secondNum = parseInt(num, 10);
            switch (sign) {
                case "+":
                    var res = firstNum + secondNum;
                    var num1 = document.getElementById("input");
                    num1.value = res;
                    break;

                case "-":
                    var res = firstNum - secondNum;
                    var num1 = document.getElementById("input");
                    num1.value = res;
                    break;

                case "*":
                    var res = firstNum * secondNum;
                    var num1 = document.getElementById("input");
                    num1.value = res;
                    break;

                case "/":
                    if (secondNum === 0) {
                        alert("You can not divide on 0")
                    } else {
                        var res = firstNum / secondNum;
                        var num1 = document.getElementById("input");
                        num1.value = res;
                    }
                    break;
            }
            res = firstNum = secondNum = num = "";
        }
    }
    var pressClear = document.getElementById("clear");
    pressClear.onclick = function() {
        document.getElementById("input").value = "";
        res = firstNum = secondNum = num = "";
    }
}