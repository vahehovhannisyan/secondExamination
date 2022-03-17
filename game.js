
let gameStatus = document.querySelector('.game-status');

let gameActive = true;
let currentPlayer = "X";
let gameState = [" ", " ", " ", " ", " ", " ", " ", " ", " "];


let winConditions = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function changeGameState( index) {

    gameState[index] = currentPlayer;
    checkGameResult();

};

function changePlayer() {

    if(currentPlayer == "X") {
        currentPlayer = "O";
    }else{
        currentPlayer="X";
    }
       
};

function checkGameResult() {

    let winner = false;

    for (let i = 0; i <= 7; i++) {

        const winCondition = winConditions[i];

        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if (a == " " || b == " " || c == " ") {
            continue;
        };

        if (a === b && b === c) {
            winner = true;
            break;
        };
    }

    if (winner) {

        gameStatus.innerHTML += `Player ${currentPlayer} has won`;
        gameActive = false;
        return;
       
    }

    
    if(!gameState.includes(" ")){

        gameStatus.innerHTML += `Game ended in a draw`;
       
    }

    changePlayer();
}

function clickInput(e) {
  
    let clickedInputIndex = e.target.getAttribute('data-index');
    
    if (gameState[clickedInputIndex] !== " " || !gameActive) {
        return;
    }

    e.target.value = currentPlayer;

    changeGameState(clickedInputIndex);
    
}

function restartGame() {

    gameActive = true;
    currentPlayer = "X";
    gameState = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
    gameStatus.innerHTML = " ";
    document.querySelectorAll('.all').forEach((all) => all.value = " ");

}


document.querySelectorAll('.all').forEach((each) => each.addEventListener('click', clickInput));
document.querySelector('.restart').addEventListener('click', restartGame);

