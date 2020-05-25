//finds work done in joules 
fucntion work() {
//define vars
var force = document.getElementById("force");
var d = document.getElementById("d");
var q = document.setElementById("theta")
//work
var work = force * d * Math.cos(q);
return work;
}
