/*
 * Create a list that holds all of your cards
 */
let array = ['fa-diamond','fa-paper-plane-o',
            'fa-anchor','fa-bolt','fa-cube',
            'fa-leaf','fa-bicycle','fa-bomb',
            'fa-diamond','fa-paper-plane-o',
            'fa-anchor','fa-bolt','fa-cube',
            'fa-leaf','fa-bicycle','fa-bomb'];

let star = 3;
let shuffled = 0;

// Display the cards on the page

function init(){
shuffled =  shuffle(array); //shuffle the list by "shuffle" method below
  let deck ="";
  	for (var i=0; i<shuffled.length; i++) { //loop through each card and create its HTML
  		deck += '<li class="card"><i class="fa '+shuffled[i]+'"></i></li>';
  	}//add each card's HTML to the page
    document.querySelector('.deck').innerHTML = deck;
    listener();
}

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function listener(){

  var deck = document.querySelector('.card');
  deck.addEventListener("click" , function(){
	clickCard();

});
}

function clickCard(){
//  $('.deck').
  console.log( " hello");

}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

init();


// c.addEventListener("click", function(eve)
// {
//  displaycard();
//   openedCard();
// });
//
// }
// let card = document.querySelector(".card");
//
// function clickCard(){
//   if(card.className ==="card")
//   //card.toggle("true");{}
// {
//   card.setAttribute("class","card open show");
// }
//   else {
//     card.setAttribute("class", "card");
//
//   }
// }