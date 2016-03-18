// JavaScript Document

window.onload = cardGame;
// create a var global to record how many times cards were clicked
var counter = 0;
var colours = ["red", "red", "blue","blue", "green","green", "yellow","yellow", "orange","orange", "purple", "purple"];
var clickedCards = [];
var score = 0;

function cardGame(){
	// displays the moves 
	updateCounter();

		
	
	// use javascript to create a deck of cards
	/*
		<div class= "card"> <p>?</p> </div>
	*/
	
	for(var j=1; j<13; j++){
	//create an element of type div, doesn't add it to the screen
	var card = document.createElement('div');
	
	// gives the new element a class so it will recive css styles
	card.className = 'card';
	
	card.innerHTML = "<p>?</p>"
	//add the new element to the page
	document.querySelector("section").appendChild(card);
	
	
	/*var para = document.createElement('p');
	para.innerHTML = "?";
	card.appendChild(para);*/
	
	card.onclick = cardFlip;
	
	}
}

function cardFlip(){
	if(this.className == "cardFlipped"){
		
	}
	
	else{
	// evertime a card is flipped, increase the counter by 1
	counter++;
	updateCounter();
	
	if(this.id == ""){
	// to start flip the card by getting rid of the back ground 
	this.className = "cardFlipped";
	
	// this.id = "red"
	
	//draw a random value from the array colours to use as an id 
	// javascript's random number generator is math.random() gives a decimal between 0 and 1
	
	var ranPos = Math.floor(Math.random()*(colours.length-1));
	//console.log(ranPos);
	
	this.id = colours[ranPos];
	
	
	// removes the colour from the array, so you can only ever have 2 of each colour
	colours.splice(ranPos, 1);
	//splice removes the value from an array starting at the position given(ranPos) and removing how many you want removed in this case 1
	
	this.innerHTML = "";
	
	clickedCards.push(this);
	// push adds an item into the end of an array
	}
	
	else{
		this.className = "cardflipped";
		this.id = "";	
		
		//add it to the array to see if it is a match
		clickedCards.push(this);
		
		}
	}
	// this if statement will check the array it there are 2 cards in itif there are it will check the id's for a match
	if(clickedCards.length == 2){
		//check for a match by checking both items in the array if they are equal to eachother we have a match
		if(clickedCards[0].id == clickedCards[1].id){
			alert("match");	
			score++;
			if (score == 6){
				alert(" you win" );	
			}
			
			
			clickedCards = [];
		}
		else {
			alert("no match");
			for (var c=0; c<clickedCards.length; c++){
				clickedCards[c].className = "card";
				clickedCards[c].innerHTML = "<p> ?</p>";	
			}
		}
	}
}

function updateCounter(){
	document.querySelector("#moves").innerHTML = "moves: " + counter;
	
	}