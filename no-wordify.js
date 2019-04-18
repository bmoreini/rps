// RPS by Wyatt LaBerge

var turnValues = ["q","r","p","s"];
var winArray = [["r","p","I"],["r","s","you"],["p","s","I"],["p","r","you"],["s","r","I"],["s","p","you"]];
var playerScore = 0;
var cpuScore = 0;
var choice = 0;

while(choice != "q"){
  var player = playerTurn();
  var cpu = cpuTurn();
  if(player!=cpu){
    var turns = player + cpu;
    var winner = winFinder(turns);
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
  else{
    alert("I picked "+player+" also. Let's try again.");
  }
}

function playerTurn(){
  choice = prompt("RPS! r, p, s or q[uit]");
  return choice;
}

function cpuTurn(){
  var cNum = Math.floor(Math.random()*3)+1;
  let cpuWord = turnValues[cNum];
  return cpuWord;
}

function winFinder(turns){
  let x = 0;
  //turns = "rs";
  while(winArray[x][0] + winArray[x][1]!=turns){
      x++;
  }
  return winArray[x][2];
}
