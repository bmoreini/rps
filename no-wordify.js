// RPS

/* Initialize Globals */
var turnValues = ["r","p","s","q"];
var winArray = [["r","p","I"],["r","s","you"],["p","s","I"],["p","r","you"],["s","r","I"],["s","p","you"]];
var playerScore = 0, cpuScore = 0,choice = 0,turns = "",winner = 0,player=0, cpu = 0;

while(player != "q"){
  player = playerTurn();
  cpu = cpuTurn();
  if(player!=cpu){
    turns = player.toString() + cpu.toString();
    if(player == "q") alert("Nice playin' with ya!");
    else if (turnValues.includes(player)){
      alert("Turns = "+turns);
      winner = winFinder(turns);
      if(winner=="I"){
        cpuScore++;
        alert(winner+" won!");
      }
      else {
        playerScore++;
        alert(winner+" won!");
      }
      alert("Score Now:   Me: "+cpuScore+"   You: "+playerScore);
    }
    else {
      alert("You hit enter by mistake. You probably wanted to quit.");
      player = "q";
    }
  }
  else{
    alert("I picked "+player+" also. Let's try again.");
  }
}

function playerTurn(){
  choice = prompt("RPS! r, p, s or q[uit]");
  return choice;
}

function cpuTurn(){
  var cNum = Math.floor(Math.random()*3);
  let cpu = turnValues[cNum];
  return cpu;
}

function winFinder(turns){
  let x = 0;
  while(winArray[x][0] + winArray[x][1]!=turns){
      x++;
  }
  return winArray[x][2];
}
