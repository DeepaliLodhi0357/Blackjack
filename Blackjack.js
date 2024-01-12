var pcards = document.getElementById("pcards");
var ptotal = document.getElementById("ptotal");
var ctotal = document.getElementById("ctotal");
var startbtn = document.getElementById("startbtn");
var btn = document.getElementById("btn");
var message = document.getElementById("message");

var storage = [];
var playerSum = 0;
var computerStorage = [];
var computerSum = 0;

var game = true;
var player = "player";
var stake = 1000;

// *************rendome number***********          

function ra() {
    var number = Math.floor(Math.random() * 13 + 1)
    if (number == 1) {
        return 11;
    } else if (number > 10) {
        return 10;
    }
    else {
        return number
    }
}
// ********************************************
// ******************Start GAME*****************

function start() {

    startbtn.style.display = "none"
    btn.style.display = "block"

    storage = [];
    // playerSum=0;    //for for loop.
    var playerCardOne = ra();
    var playerCardTwo = ra();
    var computerCardOne = ra();
    var computerCardTwo = ra();

    computerStorage.push(computerCardOne);
    computerStorage.push(computerCardTwo);

    storage.push(playerCardOne);
    storage.push(playerCardTwo);

    playerSum = playerCardOne + playerCardTwo;
    computerSum = computerCardOne + computerCardTwo;

    // for (var i = 0; i < storage.length; i++) {
    //     playerSum += storage[i];
    // }
    console.log(computerStorage);
    console.log(computerSum);
    print();

}
// **********************************************************

// ***********************Printing Function**************

function print() {
    pcards.innerHTML = `player cards :`
    for (var i = 0; i < storage.length; i++) {
        pcards.innerHTML += `${storage[i]}  `;
    }
    ptotal.innerHTML = `Player total : ${playerSum}`
    ctotal.innerHTML = `Computer total : ${computerSum}`;
    if (playerSum == 21) {
        message.innerHTML = `Comgrats ${player} Won Rs. ${stake * 2} The Game !`
        message.style.color = `royalBlue`
    }
    else if (playerSum > 21) {
        message.innerHTML = `sorry, ${player} you Lost the Game Rs. ${stake} !`
        message.style.color = `red`
    }
    else {
        message.innerHTML = `do you want new card ?`
        message.style.color = `green`
    }
}
// *******************************************
//****************New Card ******************/

function newCard() {
    if (playerSum <= 21 && game == true) {
        var playerCardThree = ra();
        storage.push(playerCardThree);

        // playerSum=playerSum+playerCardThree;
        playerSum += playerCardThree;

        print();
    }
    if(playerSum == 21)
    {
        computerNewCard();
    }
}

// ********************Compputer New Card************

function computerNewCard() {

    while (computerSum < 17) {
        computerCardThree = ra();
        computerStorage.push(computerCardThree);
        computerSum = computerSum + computerCardThree;
        ctotal.innerHTML = `Computer total : ${computerSum}`;
    }


    if ((playerSum > computerSum && playerSum <= 21) || (playerSum < computerSum && computerSum > 21)) {
        message.innerHTML = `Comgrats ${player} Won Rs. ${stake * 2} The Game !`
        message.style.color = `royalBlue`
    }
    else if ((computerSum > playerSum && computerSum <= 21) || (computerSum < playerSum && playerSum > 21)) {
        message.innerHTML = `sorry, ${player} you Lost the Game Rs.${stake} !`
        message.style.color = `red`
    }
    else {
        message.innerHTML = `Draw`;
        message.style.color = `yellow`;
    }
    game = false;
}