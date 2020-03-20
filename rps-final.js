var rpsWords = ["rock", "paper", "scissors"];
var setWinner = [[0,1,1,"I"], [0,2,0,"You"], [1,0,0,"You"], [1,2,1,"I" ], [2,1,0,"you"], [2,0,1,"I"]];
var scoreKeeper = [0,0];
var winner = -1;
main ();

function main () {
	var outOf = parseInt(prompt("Best out of?"));
	for (var turn = 0; turn < outOf; turn ++) {
		var pChoice = userTurn();
		if (pChoice == "q") turn = outOf;
		else {
			var cChoice = cpuTurn();
			if (pChoice == cChoice) {
				alert("We both chose" + letter2Number(cChoice));
				turn--;
			}
			else {
				var winner = turnWinner(pChoice, cChoice);
				updateScore(winner);
			}
		}
	}
	gameWinner();
}

function userTurn() {
	var pChoice = prompt ("choose either r (rock), p (paper) or s (scissors):");
	turnNumber = letter2Number(pChoice);
	if (turNumber == - 1) {
		alert("Bad guess. Choose either r (Rock), p (Paper), s (scissors):");
		userTurn();
	}
	else return pChoice;
}

function letter2Number(turnLetter) {
	var turnNumber = -1;
	for (i = 0; i <rpsWords.length; i ++) {
		if (turnLetter == rpsWords[i][0]) turnNumber = i;
	}
	return turnNumber;
}

function cpuTurn () {
	var cChoice = Math.floor (Math.random () * 3);
	alert("I choose" + rpsWords[cChoice] [0] + ".")
	return cChoice;
}

function turnWinner(userTurn, cpuTurn) {
	for (var index = 0; index < setWinner.length; index ++) {
		if (userTurn == setWinner[index] [0] && cpuTurn == setWinner[index] [1]) {
			winner = setWinner[index] [2];
			alert ("You picked" + rpsWords[userTurn] + "and I picked" + rpsWords[cpuTurn] + ".");
			alert (setWinner[index][3] + "won!");
		}
	}
	return winner;
}

function updateScore (winner) {
	scoreKeeper[winner] = scoreKeeper[winner] +1;
}

function gameWinner() {
	alert("You won "+scoreKeeper[0]+" rounds, and I won "+scoreKeeper[1]+" rounds.");
	if (scoreKeeper[0] > scoreKeeper[1]) alert ("You win!");
	else alert ("I win!");
}
