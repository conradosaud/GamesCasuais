const palavra_certa = ["JORGE"]
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
    let palavra = inputs.map(event => event.value).join('');
    alert(palavra);

    if (palavra == palavra_certa[0]){
    alert("ACERTOU!!");
    };
}