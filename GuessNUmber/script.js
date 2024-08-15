const Random=parseInt(math.Random()*100+1);

const submit=document.getElementById("#button");
const userInput=document.getElementById('#field');
const gussSlot=document.getElementsByClassName(".guesses");
const remaining=document.getElementsByClassName(".lastResult");
const lowOrHi=document.getElementsByClassName(".lowOrhigh");
const startOver=document.getElementsByClassName(".resultParas");

const p=document.createElement('p');

let gamePlay=1;
let prevGuess= [];
let numGuess= 1;

function play(game)
{
  if(game)
   {
     submit.addEventListener('click',function(e)
      {
        
      }
     )
   }  
}
function validate(guess)
{

}

function check(guess)
{

}

function displayGuess(guess)
{

}

function displayMessage(guess) 
{

}

function newGame()
{

}

function endGame()
{

}

play(gamePlay);