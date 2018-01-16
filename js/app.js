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
let openedCard = 0;

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

function listener(){//set up listener
  //someone else logic I tried to do this with querySelectorAll code but failed
  let deck = document.getElementsByClassName("card");
  for (let deckcard of deck){
  deckcard.addEventListener("click",clickCard);
 }
}


function clickCard(){
//  $('.deck').
this.className = 'card open show click-off'; //display card symbol
openCard();
}

function openCard(){
  movesCount();
openedCard[0] =   this.className;
console.log(openedCard[0]);
}
var count = 0;
function movesCount(){
  count++;
  console.log(count);
  calculateStars();
}
function calculateStars(){

  if(count < 15){
    console.log("One Star, 15 count star would be 1");
  }
  else if( count => 15 && count <= 25){
    console.log("Two stars, greater then 15 and less 25");
  }
    else{
    console.log("no star")
  }
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
