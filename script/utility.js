function hideElementByID(elementId) {
    const element=document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElementById(showElement) {
    const showElementa=document.getElementById(showElement);
    showElementa.classList.remove('hidden');
}
function getaRandomAlph() {
    const alphabates=['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z'];
    const getRandomIndex=Math.round(Math.random()*25);
    const alphabet=alphabates[getRandomIndex];
    return alphabet;
}
function addBgColorById(elementId) {
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBgColorById(id) {
    const element=document.getElementById(id);
    element.classList.remove('bg-orange-400');
}
function setElementById(id,value) {
    const element=document.getElementById(id);
    element.innerText=value;
}
function getTextElementById(id){
    const a =document.getElementById(id);
    const element=a.innerText;
    return element;
}