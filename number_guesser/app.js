/* GAME FUNCTION:
- Player must guess a number between a min and max. 
- Player is limited a number of guessing (3).
- Notify Player of number of guess remaining.
- Notify the Player of the correct number if loose.
- Let player choose to play again. 
*/

// Game Value
let min = 1,
	max = 10,
	winningNum = 5,
	remainingGuess = 3;

// UI Elements
const uiGame = document.querySelector('#game'),
	uiMinNum = document.querySelector('.min-num'),
	uiMaxNum = document.querySelector('.max-num'),
	uiGuessInput = document.querySelector('#guess-input'),
	uiGuessBtn = document.querySelector('#guess-btn'),
	uiMessage = document.querySelector('.message');

// Assign UI for max and min number
uiMaxNum.textContent = max;
uiMinNum.textContent = min;

// Listen for guess
uiGuessBtn.addEventListener('click', function() {
	let guess = parseInt(uiGuessInput.value);
	// Validate
	if (isNaN(guess) || guess > min || guess > max) {
		// Called the setMessage function
		setMessage(`Please enter a number between ${min} and ${max}`, 'red');
	}
	// Check if won
	if (guess === winningNum) {
		//Game over. user won

		// Disable input
		uiGuessInput.disabled = true;
		// Change border color to green which signified success
		uiGuessInput.style.borderColor = 'green';
		// Let the user Know they have won.
		setMessage(`Congratulation you won. ${winningNum} is the correct number`, 'green');
	} else {
		// Wrong number
		remainingGuess -= 1;
		if (remainingGuess === 0) {
			// Game Over - user lost

			// Since the game is over, now let disable input
			uiGuessInput.disabled = true;
			// change the input border to red.
			uiGuessInput.style.borderColor = 'red';
			setMessage(`Game over dumb ass. The correct number was ${winningNum}. Now fuck off`, 'red');
		} else {
			// Game continues - answer is wrong
			// change the input border to red.
			uiGuessInput.style.borderColor = 'red';
			setMessage(
				`${guess} is not correct, Please continue guessing. 
            You have ${remainingGuess} guess left.`,
				'red'
			);

			// clear the input
			uiGuessInput.value = '';
		}
	}
});

// Set Message function
function setMessage(msg, color) {
	uiMessage.textContent = msg;
	uiMessage.style.color = color;
}
