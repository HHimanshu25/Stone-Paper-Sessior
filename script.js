let main1 = document.querySelector('.select1')
let main2 = document.querySelector('.select2')

window.addEventListener('load', () => {
    for (let i = 1; i <= 3; i++) {
        main1.children[`${i - 1}`].classList.toggle(`item${i}`)
    }
    
})

main1.querySelector('.item1').addEventListener('click', () => {
    main1.children[1].classList.toggle(`item2`)
    main1.children[2].classList.toggle(`item3`)
    game()
})
main1.querySelector('.item2').addEventListener('click', () => {
    main1.children[2].classList.toggle(`item3`)
    main1.children[0].classList.toggle(`item1`)
    game()
})
main1.querySelector('.item3').addEventListener('click', () => {
    main1.children[0].classList.toggle(`item1`)
    main1.children[1].classList.toggle(`item2`)
    game()

})
let random
function game() {
    random = Math.floor(Math.random() * (3)) + 1;

    if (random == 1) {
        main2.children[0].classList.toggle('item1')
    }
    else if (random == 2) {
        main2.children[1].classList.toggle('item2')
    }
    else if (random == 3) {
        main2.children[2].classList.toggle('item3')
    }
}
function reload() {
    for (let i = 1; i <= 3; i++) {
        if (main1.children[`${i - 1}`].classList.toggle(`item${i}`))
            main1.children[`${i - 1}`].classList.toggle(`item${i}`)

        if (!main2.children[`${i - 1}`].classList.toggle(`item${i}`))
            main2.children[`${i - 1}`].classList.toggle(`item${i}`)

        document.querySelector('.result').innerText = " "

    }
}
async function winning(win) {
    let winner = Number(win)    
   
    let result = document.querySelector('.result')

    await new Promise(resolve => setTimeout(resolve, 500))
    if (random == 1 && winner == 3) {
        result.innerText = "Computer is winner"

    }
    else if (random == 2 && winner == 1) {
        result.innerText = "Computer is winner"
    }

    else if (random == 3 && winner == 2) {
        result.innerText = "Computer is winner"
    }

    else if (random == 3 && winner == 1) {
        result.innerText = "Computer is winner"
    }

    else if (random == 1 && winner == 2) {

        result.innerText = "Player is winner"
    }

    else if (random == 2 && winner == 3) {

        result.innerText = "Player is winner"
    }

    else if (random == 3 && winner == 2) {

        result.innerText = "Player is winner"
    }

    else if (random == 2 && winner == 2) {

        result.innerText ="Match is tie"
    }

    else if (random == 3 && winner == 3) {

        result.innerText ="Match is tie"
    }

    else if (random == 1 && winner == 1) {

        result.innerText ="Match is tie"
    }
    await new Promise(res => setTimeout(res, 1000))
    reload()
}



