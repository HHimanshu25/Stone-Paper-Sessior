// --- Game Variables ---
let userScore = 0;
let computerScore = 0;
let round = 1;
let totalRounds = 5;

// Emoji Mapping
const CHOICES = {1: '✊', 2: '✋', 3: '✌️'};

// DOM Elements
const roundDisplay = document.querySelector(".round-display");
const resultText = document.querySelector(".result-text");
const playerScoreEl = document.querySelector(".player-score");
const computerScoreEl = document.querySelector(".computer-score");
const resetBtn = document.querySelector(".reset-btn");
const playerPickEl = document.querySelector(".player-pick");
const computerPickEl = document.querySelector(".computer-pick");
const buttons = document.querySelectorAll(".choice");

updateRoundUI(); // Show first round UI


// --- Event: Player Clicks Choice ---
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        let playerChoice = Number(btn.dataset.value);
        playRound(playerChoice);
    });
});


// --- Play a Round ---
function playRound(playerChoice) {

    // Disable buttons while result shows
    disableButtons(true);

    let computerChoice = randomComputerPick();

    showPicks(playerChoice, computerChoice);

    setTimeout(() => {
        checkWinner(playerChoice, computerChoice);
        updateScoreUI();
        nextRound();
    }, 600);
}


// --- Computer Pick (Random) ---
function randomComputerPick() {
    return Math.floor(Math.random() * 3) + 1; // 1,2,3
}


// --- Show UI Choices ---
function showPicks(playerVal, compVal) {
    playerPickEl.innerText = CHOICES[playerVal];
    computerPickEl.innerText = CHOICES[compVal];

    playerPickEl.classList.add("pop");
    computerPickEl.classList.add("pop");

    setTimeout(() => {
        playerPickEl.classList.remove("pop");
        computerPickEl.classList.remove("pop");
    }, 300);
}


// --- Decide Winner ---
function checkWinner(player, computer) {

    if (player === computer) {
        resultText.innerText = "🤝 Tie!";
    }
    else if (
        (player === 1 && computer === 3) ||
        (player === 2 && computer === 1) ||
        (player === 3 && computer === 2)
    ) {
        resultText.innerText = "🔥 You Win!";
        userScore++;
    }
    else {
        resultText.innerText = "💀 Computer Wins!";
        computerScore++;
    }
}


// --- Move to Next Round or End Game ---
function nextRound() {
    round++;

    if (round > totalRounds) {
        endGame();
    } else {
        updateRoundUI();
        // Enable buttons again
        setTimeout(() => disableButtons(false), 500);
    }
}


// --- End Game Screen ---
function endGame() {
    disableButtons(true);

    if (userScore > computerScore)
        resultText.innerText = `🏆 You Won The Game! (${userScore} - ${computerScore})`;
    else if (computerScore > userScore)
        resultText.innerText = `💀 Computer Wins The Match! (${computerScore} - ${userScore})`;
    else
        resultText.innerText = `🤝 Match Draw (${userScore} - ${computerScore})`;
}


// --- Update UI Helpers ---
function updateScoreUI() {
    playerScoreEl.innerText = userScore;
    computerScoreEl.innerText = computerScore;
}

function updateRoundUI() {
    roundDisplay.innerText = `Round ${round} / ${totalRounds}`;
}


// --- Button Enable/Disable ---
function disableButtons(state) {
    buttons.forEach(btn => btn.disabled = state);
}


// --- Restart Game ---
resetBtn.addEventListener("click", resetGame);

function resetGame() {
    userScore = 0;
    computerScore = 0;
    round = 1;

    playerPickEl.innerText = "—";
    computerPickEl.innerText = "—";
    resultText.innerText = "Make your move!";

    updateScoreUI();
    updateRoundUI();
    disableButtons(false);
}



// // Button click detece
// // Random computer choice
// // Compare logic
// // Update score
// // Update round
// // End game after round finish
// let rand;
// let playe;
// let round = 1;
// let gameend = false;
// let chil = document.querySelector('.choices')
// chil.children[0].addEventListener('click', () => {
//     if (gameend) return;
//     document.querySelector(".player-pick").innerHTML = '✊'
//     playe = 1;
// })
// chil.children[1].addEventListener('click', () => {
//     if (gameend) return;
//     document.querySelector(".player-pick").innerHTML = '✋'
//     playe = 2
// })
// chil.children[2].addEventListener('click', () => {
//     if (gameend) return;
//     document.querySelector(".player-pick").innerHTML = '✌️'
//     playe = 3
// })
// document.querySelector('.choices').addEventListener('click', () => {
//     if (gameend) return
//     else {
//         rand = Math.floor(Math.random() * 3) + 1
//         let comp = document.querySelector('.computer-pick');
//         if (rand == 1)
//             comp.innerHTML = '✊'
//         else if (rand == 2)
//             comp.innerHTML = '✋'
//         else
//             comp.innerHTML = '✌️'
//         winner()
//     }
// })

// let playerScore = 0;
// let computerScore = 0;

// function winner() {
//     let result = document.querySelector(".result-text")
//     let player = "🔥 You Win!";
//     let computer = "💀 Computer Wins!";
//     let tie = "🤝 Tie!";
//     // let tt = round;

//     if ((playe === 1 && rand === 3) ||
//         (playe === 2 && rand === 1) ||
//         (playe === 3 && rand === 2)) {
//         result.innerHTML = player
//         ++playerScore;
//     }


//     else if ((rand == 1 && playe == 3) ||
//         (rand == 2 && playe == 1) ||
//         (rand == 3 && playe == 2)) {
//         result.innerHTML = computer
//         ++computerScore
//     }


//     else if ((rand == 1 && playe == 1) ||
//         (rand == 2 && playe == 2) ||
//         (rand == 3 && playe == 3)) {
//         result.innerHTML = tie
//     }

//     else
//         result.innerHTML = 'chutiye'

//     document.querySelector('.player-score').innerHTML = playerScore
//     document.querySelector('.computer-score').innerHTML = computerScore

//     if (round == 5) {

//         gameend = true;

//         if (playerScore > computerScore) {
//             result.innerHTML = `🏆 You Win the Match (${playerScore}-${computerScore})`;
//         }
//         else if (computerScore > playerScore) {
//             result.innerHTML = `💀 You Lose! (${computerScore}-${playerScore})`;
//         }
//         else {
//             result.innerHTML = "🤝 Match Draw!";
//         }

//     }
//     ++round
//     if (round < 6)
//         document.querySelector('.round-display').innerHTML = `Round ${round} / 5`


// }

// document.querySelector('.reset-btn').addEventListener('click', () => {
//     playerScore = document.querySelector('.player-score').innerHTML = 0;
//     computerScore = document.querySelector('.computer-score').innerHTML = 0;
//     document.querySelector('.round-display').innerHTML = 'Round 1 / 5';
//     round = 1;
//     document.querySelector('.result-text').innerHTML = 'Make your move!'
//     gameend = false;
// })


