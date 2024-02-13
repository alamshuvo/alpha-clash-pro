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

