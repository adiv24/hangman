const POSSIBLE_WORDS= ["obdurate","versimilitude","defenstrate","obesquious","dissonant","toady","idempotent"];
var randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
var word = POSSIBLE_WORDS[randomInex];
console.log("Word chosen",word);

let newGame = function(){
var randomIndex = parseInt(Math.random()*POSSIBLE_WORDS.length);
var word = POSSIBLE_WORDS[randomInex];
console.log("Word chosen",word);


let clueString="";
for(let i=0;i<word.length;i++)
{
   clueString +="_";
   
}
let clue = document.getElementById("clue");
  clue.textContent = clueString;  
}

