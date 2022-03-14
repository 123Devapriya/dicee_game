var num1=1+Math.random()*6;num1=Math.floor(num1);
if(num1==1){document.querySelector(".img1").setAttribute("src","images/dice1.png");}
if(num1==2){document.querySelector(".img1").setAttribute("src","images/dice2.png");}
if(num1==3){document.querySelector(".img1").setAttribute("src","images/dice3.png");}
if(num1==4){document.querySelector(".img1").setAttribute("src","images/dice4.png");}
if(num1==5){document.querySelector(".img1").setAttribute("src","images/dice5.png");}
if(num1==6){document.querySelector(".img1").setAttribute("src","images/dice6.png");}


var num2=1+Math.random()*6;num2=Math.floor(num2);
if(num2==1){document.querySelector(".img2").setAttribute("src","images/dice1.png");}
if(num2==2){document.querySelector(".img2").setAttribute("src","images/dice2.png");}
if(num2==3){document.querySelector(".img2").setAttribute("src","images/dice3.png");}
if(num2==4){document.querySelector(".img2").setAttribute("src","images/dice4.png");}
if(num2==5){document.querySelector(".img2").setAttribute("src","images/dice5.png");}
if(num2==6){document.querySelector(".img2").setAttribute("src","images/dice6.png");}

if(num1>num2)document.querySelector("h1").innerHTML="Player 1 wins";
if(num1<num2)document.querySelector("h1").innerHTML="Player 2 wins";
if(num1===num2)document.querySelector("h1").innerHTML="It's a draw";


