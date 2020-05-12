function pythagC() {
//establish vars
var a = document.getElementById("a").value;
var b = document.getElementById("b").value;

var c = sqrt(math.pow(a,2) * math.pow(b,2));
return c;

}

function pythagA() {
//establish vars
var a = document.getElementById("a").value;
var c = document.getElementById("c").value;

var b = sqrt(math.pow(c,2) / math.pow(a,2));
return b;


}

function pythagB() {
//establish vars
var b = document.getElementById("b").value;
var c = document.getElementById("c").value;

var a = sqrt(math.pow(c,2) / math.pow(b,2));
return a;


}
