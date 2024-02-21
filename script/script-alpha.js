const audio=new Audio();
let isGamePlayOn=false;
const artboard=document.getElementById("artboard");
const modal=document.getElementById("modal");
function handleBtnPress(e) {
    if (isGamePlayOn===false) {
        return;
    }
 const playerPressed=e.key;
 
 if (playerPressed==='Escape') {
    gameOver();
 }
 const expectedPressed=document.getElementById("playgroun-display").innerText;
 const convertedExpectedPressed=expectedPressed.toLowerCase();
 if (playerPressed===convertedExpectedPressed) {
    audio.src="../audio/sucess.mp3";
    audio.play();
    removeBgColorById(convertedExpectedPressed);
    continueGame();
   const currentScoreElement=document.getElementById("score");
   const curentScoreText=currentScoreElement.innerText;
   const currentScoreNumber=parseInt(curentScoreText);
   const newScore=currentScoreNumber+1;
   currentScoreElement.innerText=newScore;
   
 }
 else{
    audio.src="../audio/eror.mp3";
    audio.play();
   
    const curentLifeScoreElement=document.getElementById("life");
    const curentLifeScoreText=curentLifeScoreElement.innerText;
    const curentLifeScoreNumber=parseInt(curentLifeScoreText);
    const newScore=curentLifeScoreNumber-1;
    curentLifeScoreElement.innerText=newScore;
    const updatedLifePerci=newScore/5*100;
    artboard.style.background=`linear-gradient(#FFFFFFB3 ${updatedLifePerci}%,red)`;
    console.log(updatedLifePerci);
    if (newScore==0) {
        gameOver();
    }
  
 }
 
}
document.addEventListener("keyup",handleBtnPress)

function continueGame() {
    // genarate a random alphabate.
    const alphabate= getaRandomAlph();
    const playGroundDisplay=document.getElementById("playgroun-display");
    playGroundDisplay.innerText=alphabate;
    addBgColorById(alphabate);
    isGamePlayOn=true;
    
  
    
}
function play() {
    hideElementByID('home-screen');
    showElementById('playground');
    isGamePlayOn=true;
    continueGame();
}
function gameOver() {
    hideElementByID('playground');
     showElementById('final-score');
    //  update final score
    const lastScore=document.getElementById("score").innerText;
    setElementById("final-score-end",lastScore);
    const currentAlphabet = getTextElementById("playgroun-display");
    removeBgColorById(currentAlphabet);
    isGamePlayOn = false;
    artboard.style.background=`linear-gradient(#FFFFFFB3 100%,red)`;
}
function playAgain() {
    hideElementByID('final-score');
    hideElementByID('home-screen');
    showElementById('playground');
    // reset score and life 
    setElementById('life',5);
    setElementById('score',0);
    continueGame();
}
function modalOpen(e) {
    if (e.clientY<20) {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
    }
}
function closeModal(){
    modal.classList.add("hidden");
}
document.body.onmousemove=modalOpen