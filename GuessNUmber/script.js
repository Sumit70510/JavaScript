
const submit=document.querySelector("#subt");
console.log(submit);
const userInput=document.querySelector('#guessField');
console.log(userInput);
const gussSlot=document.querySelector(".guesses");
const remaining=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHigh");
const startOver=document.querySelector(".resultParas");

const rand = parseInt(Math.random() * 100 + 1);
const p=document.createElement('p');

let gamePlay=true;
let prevGuess= [];
let numGuess= 10;

 if(gamePlay)
   {
     submit.addEventListener('click', function(e)
       {
         e.preventDefault();
         let guess=parseInt(userInput.value); 
        if(numGuess>0)
         validate(guess);
       }
         );
   } 
  else
  { endGame(0);} 

   
function validate(guess)
{
   if(!isNaN(guess)&&(guess>0&&guess<101))
     {  
         
         gussSlot.innerHTML="";
        check(guess);
     }
    else 
     { 
       gussSlot.innerHTML="Enter A Valid Number";
     } 
}

function check(guess)
{   
    prevGuess.push(guess);
    gussSlot.innerHTML=`${prevGuess}`;
   if(guess===rand)
     {
       displayGuess("Correct");
     }
   else
    {
      if(guess>rand)
         {displayGuess("Higher");}
      else
         {displayGuess("Lower");}
    }  
}
let win=0;
function displayGuess(guess)
{
  if(guess==="Correct")
     {win=1;displayMessage('Your Guess is '+guess);}
  else
    {
      numGuess-=1;
      displayMessage('Your Guess is a Bit '+guess);
    }
}

function displayMessage(message) 
{
  remaining.innerHTML=`${numGuess}`;
  lowOrHi.innerHTML=`${message}`;
  newGame(win);
}

function newGame(win)
{
  if(win===1||numGuess<=0)
    {  
      endGame(win);       
    }  
}

function endGame(win)
{
  const temp=document.createElement("p");  
  if(win===1)
   {temp.innerHTML="YOU WIN";}
  else
   {temp.innerHTML="GAME OVER";}
  lowOrHi.append(temp);
}