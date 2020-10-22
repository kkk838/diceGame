/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var score,roundScore,activeScore,gamePlaying;
document.querySelector('.player-0-panel').classList.remove('active');

//document.querySelector('#current-'+activePlayer).textContent = dice;
//var x = document.querySelector('#score-'+activePlayer).textContent;






document.querySelector('.btn-roll').addEventListener('click', function()
	{
		if(gamePlaying)
		{
			// Generate Random Value of dice and update to current score of player
			var dice = Math.floor(Math.random()*6)+1;
			


			//Set property of dice to display the result

			var diceDOM = document.querySelector('.dice');
			diceDOM.style.display = 'block';

			//Changing image of dice according to number display
			diceDOM.src = 'dice-'+dice+'.png';

			//Round Score
			if(dice!==1)
			{
				roundScore+=dice;
			document.querySelector('#current-'+activePlayer).textContent = roundScore;
			}
			else
			{
				//Next Player	
				nextPlayer()
			}
		}
	});
	
	document.querySelector('.btn-hold').addEventListener('click', function()
		{
			if(gamePlaying)
			{
				//Update Score
				score[activePlayer]+=roundScore;

				//Update the UI
				document.querySelector('#score-'+activePlayer).textContent = score[activePlayer];

				//Declare Winner

				if(score[activePlayer]>=100)
				{
					gamePlaying=false;
					document.querySelector('#name-'+activePlayer).textContent='WINNER!';
					document.querySelector('.dice').style.display = 'none';
					document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
					document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
				}
				else
				{
					//Next Player
					nextPlayer();
				}
			}
			
		});

	document.querySelector('.btn-new').addEventListener('click',init);

	function init()
	{
		gamePlaying=true;
		score = [0,0];
		roundScore = 0;
		activePlayer = 0;
		document.querySelector('#name-0').textContent='PLAYER 1';
		document.querySelector('#name-1').textContent='PLAYER 2';
		document.querySelector('.dice').style.display = 'none';

		document.getElementById('score-0').textContent= 0;
		document.getElementById('score-1').textContent= 0;
		document.getElementById('current-0').textContent= '0';
		document.getElementById('current-1').textContent= '0';

		document.querySelector('.player-0-panel').classList.remove('winner');
		document.querySelector('.player-1-panel').classList.remove('winner');
		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.remove('active');
		document.querySelector('.player-0-panel').classList.add('active');


	}

		


	function nextPlayer()
	{
		roundScore=0;
			activePlayer === 0?activePlayer=1:activePlayer=0;
			document.querySelector('#current-0').textContent =0;
			document.querySelector('#current-1').textContent = 0;

			document.querySelector('.player-0-panel').classList.toggle('active');
			document.querySelector('.player-1-panel').classList.toggle('active');

			document.querySelector('.dice').style.display = 'none';
	}