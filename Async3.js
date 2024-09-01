let intervalId;
const randomColor=function()
 {
   const hex="0123456789ABCDEF";
   let color='#'
   for(let i=0;i<6;i++)
     {
       color+=hex[Math.floor(Math.random()*16)]; 
     }
    return color; 
 }
const startChangingColor=function()
 {
    if(!intervalId)
     {intervalId=setInterval(colorChange,1000);}
    function colorChange()
     {document.body.style.backgroundColor=randomColor();}
 }
 const stopChangingColor=function()
 {
   clearInterval(intervalId);
   intervalId=null;
 }
document.querySelector('#Start').addEventListener(
'click',startChangingColor);
document.querySelector('#Stop').addEventListener(
'click',stopChangingColor);