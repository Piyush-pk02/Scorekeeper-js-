var p1 =document.querySelector("#p1");
var p2 =document.getElementById("p2");
var res=document.getElementById("reset");
var num=document.querySelector("input");
var p1Display =document.querySelector("#s1");
var wsd= document.querySelector("p span");
var p1score =0;
var p2Display =document.querySelector("#ss2");
var p2score =0;
var gameOver= false;
var win =5;

p1.addEventListener("click",function() {
	if(!gameOver){
		p1score++;
		if (p1score === win) {
			p1Display.classList.add("winner");
			gameOver = true;
		}
		p1Display.textContent = p1score;
	}
});

p2.addEventListener("click",function() {
	if(!gameOver){
		p2score++;
		if (p2score === win) {
			p2Display.classList.add("winner");
			gameOver = true;
		}
		p2Display.textContent = p2score;
	}
});

res.addEventListener("click",function(){
	reset();
});

function reset(){
	p1score = 0;
	p2score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver =false ;
}
num.addEventListener("change",function(){
    wsd.textContent = num.value;
    win= Number(num.value);
    reset();
});