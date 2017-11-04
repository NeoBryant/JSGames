
var score = 0; //玩家的得分
var time = 30; //玩家的剩余时间
var status = 0; //0->Game Over，1->Playing
var RecentClick = document.getElementsByClassName("botton"); //botton的集合
var next = -1; //下一个地鼠出现的botton

function RandomGenerator() { //得到一个0-59的随机数
    var Rand = Math.random();
    return (0 + Math.round(Rand * 59));
}

function control() {
	if (status == 0) {
		status = 1;
		document.getElementById("inputStatus").value = "Playing";
		next = RandomGenerator();
		RecentClick[next].checked = true;
		settime(document.getElementById("inputTime"));

		var child = document.getElementsByClassName("botton");
		for (var i = 0; i < child.length; i++) {
		    var a = child[i];
		    a.index = i;//给每个className为child的元素添加index属性;
		}
	} else if (status == 1){
		endGame();
	}
}

function settime(val) { //倒计时
	if (status == 1) {
		if (time == -1) { 
			endGame();
		} else { 
			val.setAttribute("disabled", true); 
			val.value= time; 
			time--; 
			setTimeout(function() { 
			settime(val) 
			},1000) 	
		} 
	}
} 

function process(bot) {
	if (status == 1) {
		if (next == bot.index) {
			++score;
		} else {
			--score;
		}
		document.getElementById("inputScore").value = score;
		next = RandomGenerator();
		RecentClick[next].checked = true;
	} else {
		alert("请点击‘Start Game|Stop Game’开始游戏");
	}
}


function endGame() {
	var words = "\n成绩不错，但不要骄傲哦\n";
	if (score <= 0) {
		words = "\n还需要继续努力哦\n";
	}
	status = 0;	
	confirm("游戏结束\n您的得分是"+score+"分"+words);

	score = 0;
	time = 30;
    document.getElementById("inputScore").value = score;
    document.getElementById("inputTime").value = time;	
 	document.getElementById("inputStatus").value = "Game Over";
   	RecentClick[next].checked = false;
   	next = -1;
}





