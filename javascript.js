var a = +prompt("Enter first cofficient");
var b = +prompt("Enter second cofficient");
var c = +prompt("Enter third cofficient");
var x, y, d;

function getDescr(a, b, c) {
    d = Math.sqrt(Math.pow(b, 2) - 4 * a * c);
    return d;
}

function countResults(a, b, c, d) {
    x = (d - b) / (2 * a);
    y = (-d - b) / (2 * a);
    document.write("First result = " + x + "</br>");
    document.write("Second result = " + y + "</br>");
}
getDescr(a, b, c);
countResults(a, b, c, d);