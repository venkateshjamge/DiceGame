var randomNumber1=Math.floor((Math.random()*6))+1;
console.log(document.querySelector(".dice img.img1").setAttribute("src","images/dice"+randomNumber1+".png"));


var randomNumber2=Math.floor((Math.random()*6))+1;
console.log(document.querySelector(".dice img.img2").setAttribute("src","images/dice"+randomNumber2+".png"));


if(randomNumber1>randomNumber2){
  document.querySelector(".container h1").textContent="🚩Player One Wins";
}else if(randomNumber1<randomNumber2){
  document.querySelector(".container h1").textContent="Player Two Wins🚩";
}else{
  document.querySelector(".container h1").textContent="Draw!";
}
