const palavra_certa = ["JORGE"]

let lineCount = 0;

const linhas = [
    {
      inputs: [
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input")
      ]
    },
    {
      inputs: [
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input")
      ]
    },
    {
      inputs: [
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input")
      ]
    },
    {
      inputs: [
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input")
      ]
    },
    {
      inputs: [
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input")
      ]
    },
    {
      inputs: [
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input"),
        document.createElement("input")
      ]
    }
  ];

linhas[0].inputs.map(function(event) {
    document.getElementById('linha').appendChild(event);});
linhas[1].inputs.map(function(event) {
    document.getElementById('linha').appendChild(event);});
linhas[2].inputs.map(function(event) {
    document.getElementById('linha').appendChild(event);});
linhas[3].inputs.map(function(event) {
    document.getElementById('linha').appendChild(event);});
linhas[4].inputs.map(function(event) {
    document.getElementById('linha').appendChild(event);});
linhas[5].inputs.map(function(event) {
    document.getElementById('linha').appendChild(event);});

function VerificaPalavra(){
  for (i = 0; i < linhas.length; i++) {
    let palavra = linhas[i].inputs[0].value + linhas[i].inputs[1].value + linhas[i].inputs[2].value + linhas[i].inputs[3].value + linhas[i].inputs[4].value;
    
    if (palavra == palavra_certa){
      alert("ACERTOU!!");
      confereCor(0);
    }else{
      confereCor(0);
    }

    lineCount++;

  }
}

function confereCor(palavra) {
  for (i = 0; i < linhas[lineCount].inputs.length; i++) {
    if (linhas[lineCount].inputs[i].style.background != "green"){
      if (linhas[lineCount].inputs[i].value == palavra_certa[palavra].charAt(0) ||
          linhas[lineCount].inputs[i].value == palavra_certa[palavra].charAt(1) ||
          linhas[lineCount].inputs[i].value == palavra_certa[palavra].charAt(2) ||
          linhas[lineCount].inputs[i].value == palavra_certa[palavra].charAt(3) ||
          linhas[lineCount].inputs[i].value == palavra_certa[palavra].charAt(4)) {
          linhas[lineCount].inputs[i].style.background = "rgb(207, 204, 0)"
      }

      if (linhas[lineCount].inputs[i].value == palavra_certa[palavra].charAt(i)){
        linhas[lineCount].inputs[i].style.background = "green"
      }
    }
  }
}

iniciaTeste();
function iniciaTeste(){

  let html = "";
  for(let i = 0; i < 5; i++){
    html += `<li>Número ${ removeAccents("Éóúâ") }</li>`
  }

  document.querySelector(".teste").innerHTML = `
    <ul>
      ${html}
    </ul>
  `;
}