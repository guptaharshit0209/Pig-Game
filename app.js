/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer,dice,game;
init();

//writting function for the listner on button roll
document.querySelector('.btn-roll').addEventListener('click', function(){
  if(game)
  {
  //generating the radom no.'s for the dice and assigning it to dice variable
  var dice = Math.floor(Math.random()*6) + 1;
  console.log("dice number gonna be" +dice);

  //getting the dom for dice image
  var diceDom = document.querySelector('.dice');
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice + '.png';

  if(dice !== 1){
    //score will added to round scores
    roundScore = roundScore + dice;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
  }

  else{
    nextPlayer();
  }}
});


//event listner for hold button
document.querySelector('.btn-hold').addEventListener('click', function()
{
  if(game)
  {
//adding current score to global score
scores[activePlayer] += roundScore;
document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

if(scores[activePlayer] >= 20)
{
  document.getElementById('name-' + activePlayer).textContent = 'WINNER!!';
  document.querySelector('.dice').style.display= 'none';
  document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
  document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
  game = false;

}
else
  nextPlayer();
}
});

function nextPlayer(){
  //setting round score of current player to zero
    roundScore = 0;
    //player change
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    var temp = activePlayer + 1;
    console.log('////Player Changed////// to ' + temp);
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    //changing the active player class
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display= 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;

  document.querySelector('.dice').style.display= 'none';

  //assigning the initial values to game variables
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
  game = true;

}
