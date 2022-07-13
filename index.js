let homeScore = 0
let homeCounterEl = document.getElementById("home-counter")


function homePlus1 () {
    homeScore += 1
    homeCounterEl.textContent = homeScore
}
// homePlus1()

function homePlus2 () {
    homeScore += 2
    homeCounterEl.textContent = homeScore
}
// homePlus2()

function homePlus3 () {
    homeScore += 3
    homeCounterEl.textContent = homeScore
}
// homePlus3()

let guestScore = 0
let guestCounterEl = document.getElementById("guest-counter")

function guestPlus1 () {
    guestScore += 1
    guestCounterEl.textContent = guestScore
    // console.log(guestScore)
}

function guestPlus2 () {
    guestScore += 2
    guestCounterEl.textContent = guestScore
    // console.log(guestScore)
}

function guestPlus3 () {
    guestScore += 3
    guestCounterEl.textContent = guestScore
    // console.log(guestScore)
}

function newGame(){
    guestScore = 0
    guestCounterEl.textContent = guestScore
    homeScore = 0
    homeCounterEl.textContent = homeScore
}