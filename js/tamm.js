var isTouchWall = false; //若鼠标碰墙，则为1，否则为0
var isThroughStart = false; //若鼠标通过S，则为1，否则为0
var isCheat1 = false; //判断鼠标在地图通道里的路径
var isCheat2 = false;
var isCheat3 = false;
var isCheat4 = false;
var isCheat5 = false;

function outMaze() {
	//clear();
}

function intoWall(){  
	document.getElementById('attention_words').innerHTML = "You Lose";
	clear();
}  

function outWall(){
	document.getElementById('attention_words').innerHTML = "";		
}

function throughS(){
	isThroughStart = true;
}

function throughE(){
	if (isThroughStart&&isCheat1&&isCheat2&isCheat3&&isCheat4&&isCheat5) {
		document.getElementById('attention_words').innerHTML = "You Win";		
	} else {
		document.getElementById('attention_words').innerHTML = "Dont't cheat, you should start from the 'S' and move to the 'E' inside the maze!";			
	}

	clear();
}

function outE(){
	document.getElementById('attention_words').innerHTML = "";		
}

function through1() {
	isCheat1 = true;
}
function through2() {
	isCheat2 = true;
}
function through3() {
	isCheat3 = true;
}
function through4() {
	isCheat4 = true;
}
function through5() {
	isCheat5 = true;
}

function clear() { //把数值清空
	isTouchWall = false; 
	isThroughStart = false; 
	isCheat1 = false; 
	isCheat2 = false;
	isCheat3 = false;
	isCheat4 = false;
	isCheat5 = false;
}



