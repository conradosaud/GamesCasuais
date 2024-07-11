var game;

document.addEventListener("DOMContentLoaded", function() {
    game = document.querySelector("#Termo");
    StartScreen();
});

const right_word = ["JORGE"];

let lineCount = 0;

let inputFocus = 1;

function StartScreen(){

  let html = "";
  for(let i = 0; i < 5; i++){
    html += `<input id = "txt${i}" class = "${i}" maxlength="1" oninput="Typing(event)" onClick="Clicking(event)" onfocus="Clicking(event)" onkeydown="MoveInput(event)"></input>`
  }

  game.querySelector(".line").innerHTML = `
    <form>
      <div id = "line0">
        ${html}
      </div>
      <div id = "line1">
        ${html}
      </div>
      <div id = "line2">
        ${html}
      </div>
      <div id = "line3">
        ${html}
      </div>
      <div id = "line4">
        ${html}
      </div>
      <div id = "line5">
        ${html}
      </div>
    </form>
  `;
}

function MoveInput(event){
  
  if(inputFocus >= 4){
    inputFocus = 4;
  }
  
  else if(inputFocus <= 0){
    inputFocus = 0;
  }

  if(event.key === "ArrowLeft"){
    inputFocus = inputFocus - 1;
    game.querySelector(`#line${lineCount} #txt${inputFocus}`).focus();
    console.log(inputFocus);
  } 
  
  else if(event.key === "ArrowRight"){
    inputFocus = inputFocus + 1;
    game.querySelector(`#line${lineCount} #txt${inputFocus}`).focus();
    console.log(inputFocus);
  } 
  else if (event.key === 'Enter') {
    CheckWord();
  }
  else if (event.key === 'Backspace') {
    event.target.value = "";
  }
}

function Clicking(event){
  inputFocus = event.target.id.match(/\d+/g) - 0;
}

function Typing(event){
  event.target.value = removeAccents(capitalizeFirstLetter(event.target.value));
  inputFocus = inputFocus + 1;
  game.querySelector(`#line${lineCount} #txt${inputFocus}`).focus();
  console.log(inputFocus);
}

function CheckWord(){

  let word = game.querySelector(`#line${lineCount} #txt0`).value +
             game.querySelector(`#line${lineCount} #txt1`).value +
             game.querySelector(`#line${lineCount} #txt2`).value +
             game.querySelector(`#line${lineCount} #txt3`).value +
             game.querySelector(`#line${lineCount} #txt4`).value;
    
  if (word == right_word[0]){
    alert("ACERTOU!!");
    CheckColor(0);
  }else{
    CheckColor(0);
    lineCount ++;
    inputFocus = 0;
    game.querySelector(`#line${lineCount} #txt${inputFocus}`).focus();
  }
}

function CheckColor(word) {
  for (i = 0; i < right_word[word].length; i++) {
    let line = game.querySelector(`#line${lineCount} #txt${i}`);

    if (line.style.background != "green"){
      if(line.value == right_word[word].charAt(0) ||
         line.value == right_word[word].charAt(1) ||
         line.value == right_word[word].charAt(2) ||
         line.value == right_word[word].charAt(3) ||
         line.value == right_word[word].charAt(4)){
        line.style.background = "rgb(207, 204, 0)"
      } 
      if (line.value == right_word[word].charAt(i)){
        line.style.background = "green"
      }
    }
    console.log(line.value);
    console.log(right_word[word].charAt(0));
  }
}