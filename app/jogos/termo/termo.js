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
    html += `<input id = "txt${i}" class = "${i}" maxlength="1" oninput="Typing(event)" onClick="Clicking(event)"></input>`
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

function Clicking(event){
  inputFocus = event.target.id.match(/\d+/g) - 0;
  inputFocus = inputFocus + 1;
}

function Typing(event){
  event.target.value = removeAccents(capitalizeFirstLetter(event.target.value));
  
  game.querySelector(`#line${lineCount} #txt${inputFocus}`).focus();

  inputFocus ++;

  if (inputFocus >= 5){
    inputFocus = 0;
  }
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
  }
  lineCount ++;
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
  }
}