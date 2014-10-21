var numVisitors = 0;
var minusKey = 45;  // this is the keycode for the minus key
			
// Generate the first random winner
var nextWinner = Math.ceil(Math.random() * 15);							

function OnKeyPressCounter (event) {
				
	// Decrement the counter if someone presses the minus sign
	// Helpful for when pesky kids hit the button too many times
	if (event.keyCode==minusKey) numVisitors--;			
	// Increment the counter variable to the next value to count the visitor
	else numVisitors++;	

	// Update the counter on the screen
	document.getElementById("visitCounter").innerHTML = numVisitors;	
	
	// Have we reached the next winning number?
	if (numVisitors==nextWinner) {										
		// Show the congratulations message
		document.getElementById("YouWin").hidden=false;		
		
		// Make the congratulations message go away in 5 seconds
		setTimeout("hideWinnerLabel()", 5000);  						

		// Play a sound.  Have the sound file in the same folder as the HTML file.
		new Audio('cheer.wav').play();  								

		// Calculate the next winning number. 
		nextWinner=numVisitors + Math.ceil(Math.random() * 15) ;   		
	}
}

function hideWinnerLabel () {
	// Turn off the timer otherwise it will fire every 5 seconds
	clearTimeout();	
	// Hide the message
	document.getElementById("YouWin").hidden=true;						
}