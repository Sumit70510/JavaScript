
const submit=document.querySelector("#subt");
const userInput=document.querySelector('#guessField');
const gussSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHigh");
const startOver=document.querySelector(".resultParas");

let rand = parseInt(Math.random() * 100 + 1);
const p=document.createElement('p');

let gamePlay=true;
let prevGuess= [];
let numGuess= 1;

 if(gamePlay)
   {
     submit.addEventListener('click', function(e)
       {
         e.preventDefault();
         let guess=parseInt(userInput.value); 
         validate(guess);
        }
        );
   } 

   
function validate(guess)
{
   if(isNaN(guess))
     {alert('Please Enter A Valid Number');}
   else if(guess<1||guess>100)
      {alert('Please Enter A Number Between [1,100]');}
   else 
     {  prevGuess.push(guess);
        if(numGuess>=10)
         {
          displayGuess(guess);
          displayMessage(`Game Over The Number was ${rand}`);
          endGame();   
         }  
        else
         {
           displayGuess(guess);
           check(guess); 
         } 
     } 
}

function check(guess)
{   
   if(guess===rand)
    {displayMessage('Your Guess is Right');
     endGame();   
    }
   else
    {
      if(guess>rand)
        {displayMessage('Your Guess is Too High');}
      else
        {displayMessage('Your Guess is Too Low');}
    }
}

function displayGuess(guess)
{
  userInput.value='';
  gussSlot.innerHTML+=`${guess} ;`;
  numGuess++;
  remaining.innerHTML=`${11-numGuess}`;
}

function displayMessage(message) 
{
  lowOrHi.innerHTML=`<h3>${message}</h3>`;  
}

function endGame()
{
  userInput.value='';
  userInput.setAttribute(`disabled`,``);
  p.classList.add('button');
  p.innerHTML=`<h3 id="newGame">Start Over </h3>`;
  startOver.appendChild(p);
  gamePlay=false;
  newGame();  
}

function newGame()
{
    const startButton=document.querySelector('#newGame');
    startButton.addEventListener('click',function(e)
    {
      rand = parseInt(Math.random() * 100 + 1);
      prevGuess=[];
      numGuess=1;  
      gussSlot.innerHTML='';
      remaining.innerHTML=`${11-numGuess}`;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
      gamePlay=true;
    });
}
