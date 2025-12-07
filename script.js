let rand;
let playe;
let round = 1;
let gameend = false;
let chil = document.querySelector('.choices')
chil.children[0].addEventListener('click', () => {
    if (gameend) return;
    document.querySelector(".player-pick").innerHTML = '✊'
    playe = 1;
})
chil.children[1].addEventListener('click', () => {
    if (gameend) return;
    document.querySelector(".player-pick").innerHTML = '✋'
    playe = 2
})
chil.children[2].addEventListener('click', () => {
    if (gameend) return;
    document.querySelector(".player-pick").innerHTML = '✌️'
    playe = 3
})
document.querySelector('.choices').addEventListener('click', () => {
    if (gameend) return
    else {
        rand = Math.floor(Math.random() * 3) + 1
        let comp = document.querySelector('.computer-pick');
        if (rand == 1)
            comp.innerHTML = '✊'
        else if (rand == 2)
            comp.innerHTML = '✋'
        else
            comp.innerHTML = '✌️'
        winner()
    }
})

let playerScore = 0;
let computerScore = 0;

function winner() {
    let result = document.querySelector(".result-text")
    let player = "🔥 You Win!";
    let computer = "💀 Computer Wins!";
    let tie = "🤝 Tie!";
    // let tt = round;

    if ((playe === 1 && rand === 3) ||
        (playe === 2 && rand === 1) ||
        (playe === 3 && rand === 2)) {
        result.innerHTML = player
        ++playerScore;
    }


    else if ((rand == 1 && playe == 3) ||
        (rand == 2 && playe == 1) ||
        (rand == 3 && playe == 2)) {
        result.innerHTML = computer
        ++computerScore
    }


    else if ((rand == 1 && playe == 1) ||
        (rand == 2 && playe == 2) ||
        (rand == 3 && playe == 3)) {
        result.innerHTML = tie
    }

    else
        result.innerHTML = 'chutiye'

    document.querySelector('.player-score').innerHTML = playerScore
    document.querySelector('.computer-score').innerHTML = computerScore

    if (round == 5) {

        gameend = true;

        if (playerScore > computerScore) {
            result.innerHTML = `🏆 You Win the Match (${playerScore}-${computerScore})`;
        }
        else if (computerScore > playerScore) {
            result.innerHTML = `💀 You Lose! (${computerScore}-${playerScore})`;
        }
        else {
            result.innerHTML = "🤝 Match Draw!";
        }

    }
    ++round
    if (round < 6)
        document.querySelector('.round-display').innerHTML = `Round ${round} / 5`


}

document.querySelector('.reset-btn').addEventListener('click', () => {
    playerScore = document.querySelector('.player-score').innerHTML = 0;
    computerScore = document.querySelector('.computer-score').innerHTML = 0;
    document.querySelector('.round-display').innerHTML = 'Round 1 / 5';
    round = 1;
    document.querySelector('.result-text').innerHTML = 'Make your move!'
    gameend = false;
})


