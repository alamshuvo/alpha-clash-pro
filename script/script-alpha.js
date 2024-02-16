function handleBtnPress(e) {
 const playerPressed=e.key;
 if (playerPressed==='Escape') {
    gameOver();
 }
 const expectedPressed=document.getElementById("playgroun-display").innerText;
 const convertedExpectedPressed=expectedPressed.toLowerCase();
 if (playerPressed===convertedExpectedPressed) {
    removeBgColorById(convertedExpectedPressed);
    continueGame();
   const currentScoreElement=document.getElementById("score");
   const curentScoreText=currentScoreElement.innerText;
   const currentScoreNumber=parseInt(curentScoreText);
   const newScore=currentScoreNumber+1;
   currentScoreElement.innerText=newScore;
 }
 else{
    const curentLifeScoreElement=document.getElementById("life");
    const curentLifeScoreText=curentLifeScoreElement.innerText;
    const curentLifeScoreNumber=parseInt(curentLifeScoreText);
    const newScore=curentLifeScoreNumber-1;
    curentLifeScoreElement.innerText=newScore;
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
    
}
function play() {
    hideElementByID('home-screen');
    showElementById('playground');
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
