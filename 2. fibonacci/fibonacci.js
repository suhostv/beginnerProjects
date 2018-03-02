let N = +prompt("Enter N of Fibonacci sequence");

var prePrev = 1;
var pre = 1;
var next;

if (N <= 0) {
    document.write("Wrong number");
} else {

    if (N === 1 || N === 2) {
        document.write("N (1st method) = " + 1 + "<br>");
    } else {
        for (let i = 2; i < N; i++) {
            next = prePrev + pre;
            prePrev = pre;
            pre = next;
        }
        document.write("N (1st method) = " + next + "<br>");
    }

    var array = [1, 1];

    for (let i = 2; i < N; i++) {
        var next1 = array[i - 1] + array[i - 2];
        array.push(next1);
    }
    document.write("N (2nd method) = " + array[N - 1] + "<br>");

    var f = 0;

    function fib(n) {
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return 1;
        } else {
            return fib(n - 1) + fib(n - 2);
        }
    }
    document.write("N (3rd method) = " + fib(N) + "<br>");
}