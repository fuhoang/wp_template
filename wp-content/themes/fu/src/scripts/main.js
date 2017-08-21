var test = 'this is a test';
var str = "The best things in life are free";
var patt = new RegExp("e");
var res = patt.test(str);
document.getElementById("demo").innerHTML = "Hello Dolly.";


if (new Date().getHours() < 18) {
    document.getElementById("demo").innerHTML = "Good day!";
}
