let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

let trophyH = document.getElementById("trophy-home")
let trophyG = document.getElementById("trophy-guest")

let startScoreHome = 0
let startScoreGuest = 0

function home1() {
    startScoreHome += 1
    homeEl.textContent = startScoreHome
}

function home2() {
    startScoreHome += 2
    homeEl.textContent = startScoreHome   
}

function home3() {
    startScoreHome += 3
    homeEl.textContent = startScoreHome       
}

function guest1() {
    startScoreGuest += 1
    guestEl.textContent = startScoreGuest    
}

function guest2() {
    startScoreGuest += 2
    guestEl.textContent = startScoreGuest      
}

function guest3() {
    startScoreGuest += 3
    guestEl.textContent = startScoreGuest      
}

function reset() {
    startScoreGuest = 0
    startScoreHome = 0
    homeEl.textContent = startScoreHome
    guestEl.textContent = startScoreGuest
    winner()
}

function winner() {      
    if (Number(homeEl.textContent) > Number(guestEl.textContent)) {
            trophyH.textContent = "winning"
    } else {
        trophyH.textContent = ""
    }
    if (Number(guestEl.textContent) > Number(homeEl.textContent)) {
        trophyG.textContent = "winning"
    } else {
        trophyG.textContent = ""
    }
} 