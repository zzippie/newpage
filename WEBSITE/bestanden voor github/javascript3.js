var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradiant() {
	body.style.background =
	"linear-gradiant(to right, " 
	+ color1.value 
	+","
	+ color2.value
	+")";	
}
color1.addEventListener("input", setGradiant());

color2.addEventListener("input", function());	