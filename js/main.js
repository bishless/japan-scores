/* vanilla js */

// when an input is given focus, get the parent form ID.
// then, for each input field in that form, add an onKeyUp event that fires (if it has a value) a function adding all the inputs in _that_ form...
// write the total as the innerHTML of 'pX_total' span at the end of the form.


let app = document.getElementById('app');
let players = ['1', '2', '3', '4', '5'];
let expDayTrip = false;
let playerHTML = `<div class="legend">
	<form action="null" name="">
	<div>Player <input disabled size="1" aria-hidden="true" /></div>
	<div>Monday <input disabled size="1" aria-hidden="true" /></div>
	<div>Tuesday <input disabled size="1" aria-hidden="true" /></div>
	<div>Wednesday <input disabled size="1" aria-hidden="true" /></div>
	<div>Thursday <input disabled size="1" aria-hidden="true" /></div>
	<div>Friday <input disabled size="1" aria-hidden="true" /></div>
	<div>Saturday <input disabled size="1" aria-hidden="true" /></div>
	<div>Mood <input disabled size="1" aria-hidden="true" /></div>
	<div>Exp Tokens <input disabled size="1" aria-hidden="true" /></div>
	<div>Trains <input disabled size="1" aria-hidden="true" /></div>
	<div>Research <input disabled size="1" aria-hidden="true" /></div>
	<div>Total</div>
	</form>
</div>`;

for (let playerNumber of players) {
	playerHTML += 
		`<div class="player p${playerNumber}">
			<form action="" name="p${playerNumber}">
				<div class="field"><input class="player-name" type="text" name="player1-name" id="player1-name" size="8" maxlength="255" value="P${playerNumber}"></div>
				<div class="field"><input type="text" name="p${playerNumber}-mon" id="p${playerNumber}-mon" size="4" inputmode="numeric"></div>
				<div class="field"><input type="text" name="p${playerNumber}-tue" id="p${playerNumber}-tue" size="4" inputmode="numeric"></div>
				<div class="field"><input type="text" name="p${playerNumber}-wed" id="p${playerNumber}-wed" size="4" inputmode="numeric"></div>
				<div class="field"><input type="text" name="p${playerNumber}-thu" id="p${playerNumber}-thu" size="4" inputmode="numeric"></div>
				<div class="field"><input type="text" name="p${playerNumber}-fri" id="p${playerNumber}-fri" size="4" inputmode="numeric"></div>
				<div class="field"><input type="text" name="p${playerNumber}-sat" id="p${playerNumber}-sat" size="4" inputmode="numeric"></div>
				${expDayTrip ? '<div class="field"><input type="text" name="p${playerNumber}-sun" id="p${playerNumber}-sun" size="4" inputmode="numeric"></div>' : ''}
				<div class="field"><input type="text" name="p${playerNumber}-mood" id="p${playerNumber}-mood" size="4" inputmode="numeric"></div>
				<div class="field"><input type="text" name="p${playerNumber}-exp" id="p${playerNumber}-exp" size="4" inputmode="numeric"></div>
				<div class="field"><input type="text" name="p${playerNumber}-trains" id="p${playerNumber}-trains" size="4" inputmode="numeric"></div>
				<div class="field"><input type="text" name="p${playerNumber}-res" id="p${playerNumber}-res" size="4" inputmode="numeric"></div>
				<div class="field">
					<span id="p${playerNumber}_total" >0</span>
				</div>
			</form>
		</div>`;
}


function findTotal(el) {
	let playerForm = el.form.attr('name');
	var arr = document.getElementsByClassName('subscore');
	let total = 0;
	
	for(var i=0;i<arr.length;i++){
		if(parseInt(arr[i].value))
			total += parseInt(arr[i].value);
	}
	
	console.log('playerForm = ' + playerForm);

	document.getElementById(playerForm + '_total').value = total;
}

app.innerHTML = playerHTML;
