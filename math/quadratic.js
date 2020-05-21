//function
function quadratic() {
//declare variables a, b, c
var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
var c = document.getElementById("c").value;
  
//work
var ans1 = -b + (sqrt(math.pow(b, 2) - 4 * a * c) / 2 * a)
return ans1;
//var ans2 is the same except theres a minus instead of plus
var ans2 = -b - (sqrt(math.pow(b, 2) - 4 * a * c) / 2 * a)
return ans2;
}
