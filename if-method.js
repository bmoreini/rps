main();

function main(){
  while(choice!="q"){
    rpsFair();
    alert("Score: Player Score: "+myScore+", Cpu Score: "+cpuScore);
  }
  alert("You Successfully Quit the Game. Goodbye!");
}

function rpsFair(){
  choice = prompt("Let's Play RPS! Enter r, p, or s. Enter q to stop");
  cpu = Math.floor(Math.random()*3)+1;
  if((choice!="r") && (choice!="p") && (choice!="s") && (choice!="q")){
    alert("Enter r, p, or s, or q to end.");
  }
  if(choice=="r"){
    choice = 1;
  } else {
    if(choice=="p"){
      choice = 2;
    } else {
      if(choice=="s"){
        choice = 3;
      }
    }
  }
  if(choice==cpu){
    alert("Tie, try again!");
  } else {
    if((choice==1) && (cpu==2)){
      // If Choice = Rock and Cpu = Paper
      alert("I chose Paper, I Win!");
      cpuScore++;
    } else {
      if((choice==3) && (cpu==1)){
        // If Choice = Scissors and Cpu = Rock
        alert("I chose Rock, I Win!");
        cpuScore++;
      } else {
        if((choice==2) && (cpu==3)){
          // If Choice = Paper and Cpu = Scissors
          alert("I chose Scissors, I Win!");
          cpuScore++;
        } else {
          if((choice==2) && (cpu==1)){
            // If Choice = Paper and Cpu = Rock
            alert("You chose Paper, You Win!");
            myScore++;
          } else {
            if((choice==1) && (cpu==3)){
              // If Choice = Rock and Cpu = Scissors
              alert("You chose Rock, You Win!");
              myScore++;
            } else {
              if((choice==3) && (cpu==2)){
                // If Choice = Scissors and Cpu = Paper
                alert("You chose Scissors, You Win!");
                myScore++;
              }
            }
          }
        }
      }
    }
  } 
}
