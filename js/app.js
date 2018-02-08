	/*
	* Create a list that holds all of your cards
	*/
	const cards = ['fa-diamond','fa-paper-plane-o',
	'fa-anchor','fa-bolt','fa-cube',
	'fa-leaf','fa-bicycle','fa-bomb',
	'fa-diamond','fa-paper-plane-o',
	'fa-anchor','fa-bolt','fa-cube',
	'fa-leaf','fa-bicycle','fa-bomb'];

	//Initializing all variables here
	let shuffledCards = 0;
	let deck = "";
	let displayedCards = [];
	let incrementMatchCount = 0;
	let moves = 1; 
	let ratings = 3;
	let stars = document.getElementsByClassName('stars')[0];
	const gameResult = document.getElementById("game-result"); 
	const modal = document.getElementById("modal-id");


	document.querySelector(".moves").innerHTML = 0; 

	//Before Game Starts 
	function startGame(){
		//first shuffle the cards
		Reload();
		shuffledCards = shuffle(cards);
		//console.log(shuffledCards); //It works
		//Now update the HTML with shuffledCards
		for (var i = 0; i < shuffledCards.length; i++) {
			deck += '<li class="card"><i class="fa '+shuffledCards[i]+'"></i></li>';
		}
		document.querySelector('.deck').innerHTML = deck; 
		// console.log(deck); //check cards updated or not
		cardListener();
	}

	/*
	@description shuffle the array 
	Shuffle function from http://stackoverflow.com/a/2450976
	*/
	
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

	/*
	@description set up the event listener for a card. If a card is clicked:
	
	*/
	let checkClicked = false;
	let runTime;

	function cardListener(){
		//Some logic was used from fellow udacian but this looks bad in terms of performance. Need to improve this piece of code.
	    if (!checkClicked) {
        runTime = setInterval(add, 1000); // timer
        checkClicked = true;
    }    

		let deckListen = document.getElementsByClassName("card");
			for(let deckcards of deckListen)
			{
				deckcards.addEventListener("click",function (e){ 
					if(e.target.nodeName === "LI" && e.target.className === "card"){ //check the class structure
						displayCard(event.target); //triggers on the clicked class LI && card
					}
				});
			}
	}

	/*

	@description display the card's symbol (put this functionality in another function that you call from this one)
	
	*/

	function displayCard(target){

		if(displayedCards.length < 2){	//cards limit is 2 
			target.classList.add("open","show");	//open and show it
			opennedCards(displayedCards, target);
		}
	}
	
	/* 
	
	@description add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
	
	*/
	
	function opennedCards(list,card){
		list.push(card);
		if(list.length == 2){
			isMatch(list[0],list[1]);
		}
	}
	
	/*

	@description if the list already has another card, check to see if the two cards match
	    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
	    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
	    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
	    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
	 @param {object} aCard
	 @param {object} bCard
	*/
	
	function isMatch(cardOne, cardTwo) {  
	let one = cardOne.children[0].className;
	let two = cardTwo.children[0].className;
		//set a timer function 
		setTimeout(function(){
			if( one == two ){
				lockCards();
			}
			else if( one != two){
				removeCards();
			} emptylist();
			}, 500);
		incrementMoveCount();
	}

	function emptylist(){
		displayedCards = [];
	}
	
	function lockCards(){
		
		for(let cards of displayedCards){
			cards.classList.remove("open","show");
			cards.classList.add("match");
		}
		//count this step
		incrementMatch();
	}

	function removeCards(){
		for(let cards of displayedCards){
			cards.classList.remove("open","show");
		}
	}

	function incrementMoveCount(){
		let incrementMoveCount1 = '<span class="moves">'+moves+'</span>' ;
		document.querySelector(".moves").innerHTML = incrementMoveCount1; 
		//console.log(moves); check whether this is working or not.
		++moves;
		if(moves == 16){
			updateRating(2);
		}
		else if(moves == 25){
			updateRating(1);
		}
	}
	// construct and show the summary modal when game ends
	function scorePanel() {
	clearTimeout(runTime);
	let totalTime = timer.innerHTML;
	let totalMoves = moves-1;
    let rating = document.getElementsByClassName("fa-star").length;
    gameResult.innerHTML = "It took "+totalTime+" time , your total moves were " + totalMoves + " and star rating " + rating + " !";
    // open modal
    modal.style.display = "block"; 

	//console.log("Here goes the summary model");
	}
	
	/**
	 * Set star symbol open.
	 * @param {number} star
	 */
	function updateRating(starid) {
    stars.children[starid].children[0].classList.remove("fa-star");
    stars.children[starid].children[0].classList.add("fa-star-o");
	}

	
	function incrementMatch(){
		incrementMatchCount++;
		if(incrementMatchCount >= 8){
			scorePanel();
		}
	}
	/* Stopwatch function from http://jsfiddle.net/oukjfavu/ 
	 		THIS CODE DOES NOT BELONG TO ME
	*/

	const timer = document.getElementById("timer-id");
	let seconds = 0, minutes = 0, hours = 0;

	function add() {
	    seconds++;
	    if (seconds >= 60) {
	        seconds = 0;
	        minutes++;
	        if (minutes >= 60) {
	            minutes = 0;
	            hours++;
	        }
	    }
	    timer.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00")
	        + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00")
	        + ":" + (seconds > 9 ? seconds : "0" + seconds);
	}

	/*
	Game Reload codes goes here 
	*/
	function Reload() {
	
	let reload = document.getElementsByClassName("restart")[0];
	reload.addEventListener("click",restarts);
		
		function restarts(){
			window.location.reload();
		}
	}
	/*After the games end to play the game again*/
	const buttonPlayAgain = document.getElementById("btn-play-again");
	buttonPlayAgain.onclick = function() {
	    window.location.reload();
	}


	// function scorePanel(){
	// 	console.log("Score Panel");
	// }
	//start the game 
	startGame();