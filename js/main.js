// HOME score
let homePointsEl = document.getElementById("homepoints-el")
let guestPointsEl = document.getElementById("guestpoints-el")
let homePoints = 0
let guestPoints = 0


function add1Point() {
    homePoints = homePoints + 1
    homePointsEl.textContent = homePoints
}

function add2Points() {
    homePoints += 2
    homePointsEl.innerText = homePoints
}

function add3Points() {
    homePoints += 3
    homePointsEl.innerText = homePoints
} 

// GUEST Score
function add1PointGuest() {
    guestPoints = guestPoints + 1
    guestPointsEl.textContent = guestPoints
}

function add2PointsGuest() {
    guestPoints = guestPoints + 2
    guestPointsEl.textContent = guestPoints
}

function add3PointsGuest() {
    guestPoints = guestPoints + 3
    guestPointsEl.textContent = guestPoints
}

// RESET new game
function reset() {
    homePointsEl.textContent = 0
    guestPointsEl.textContent = 0
    homePoints = 0
    guestPoints = 0
}
