/* Code by Eli */

var turnValues=["q","r","p","s"], turnWords = [["q","quit"],["r","rock"],["p","paper"],["s","scissors"]], winArray=[["r","p","I"],["r","s","You"],["p","s","I"],["p","r","You"],["s","r","I"],["s","p","you"]];
var cpuScore = 0, playerScore = 0, choice = 0, x = 0, playerTurn = "", cpuNum = 0, cpuTurn = "", turns = "", player = "", cpu = "";

main();

function main(){
	while (playerTurn !="q"){
		playerTurn = prompt("RPS! r, p, s, or q[uit].");
		if (playerTurn == "q") {}
		else {
			cpuNum = Math.floor(Math.random()*3)+1;
			cpuTurn=turnValues[cpuNum];
			alert("You picked "+wordify(playerTurn)+"\nI picked "+wordify(cpuTurn));
			if (playerTurn == cpuTurn) alert("Do-over!");
		else {
			x = 0;
			turns = playerTurn + cpuTurn;
			while (winArray[x][0]+winArray[x][1] != turns){
				x++;
			}
			winner = winArray[x][2];
			if (winner == "I") cpuScore++;
			else playerScore++;
			alert(winner+" won! \nScore now: \nMe: "+cpuScore+"\nYou: "+playerScore);
			}
		}
	}
}

function wordify(turn){
  x = 0;
  while (turn != turnWords[x][0]){
    x++;
  }
  turn = turnWords[x][1];
  return turn;
}
