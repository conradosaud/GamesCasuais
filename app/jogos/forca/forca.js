
/*
    Toda programação deve ser em inglês, exceto pelas saídas de texto na tela, que podem ser em português.
    Faça comentário em todo bloco, como funções e grupos de lógicas, principalmente se forem mais complexas

    Ao pegar códigos da internet, de preferência, postar o link de onde pegou para ajudar outros membros
        da equipe a aprender da mesma fonte que você. Se for ChatGPT, cole o trecho explicativo dele (de forma resumida)
*/

// Não use variáveis do tipo var, dê preferência por let ou const. Está sendo usado var apenas neste caso.
var game;
// Esta função é chamada assim que todo o conteúdo HTML da página é exibido para o usuário e está pronta para
//      carregar funções e chamadas JavaScript
document.addEventListener("DOMContentLoaded", function() {
    game = document.querySelector("#game"); // Armazena o conteúdo da div com id "game" na variável para ficar fácil de acessar
    startGame(); // Chama a primeira função responsável por iniciar o jogo
});


// As variáveis globais sempre ficam em cima. Neste caso, o código acima deste é mais prioritário, por isso está lá.
const words = ["gatos", "pedra", "papel", "coral"];
let selectedWord;
let correctCount = 0;
let errorCount = 0;

// Inicia o jogo, responsável por sortear a palavra do jogo e configurar os parágrafos da tela.
// Esta função é chamada apenas no começo do código, assim que todo o HTML foi carregado. Não chame ela novamente!
function startGame(){

    // random é a função básica do js para fazer sorteios e floor para arredondar o número sorteado para baixo
    // https://www.w3schools.com/js/js_random.asp
    selectedWord = words[ Math.floor( Math.random() * words.length ) ];
    // Split divide a palavra pelo caractere passado como parâmetro. Se nada for passado, divide pelas letras, como baixo
    const splittedWord = selectedWord.split("");
    
    // Aqui o loop está sendo feito em 5 passos, mas também poderia ser usado selectedWord.length
    for(let i = 0; i < 5; i++){
        // Obtém todas as tags "p" dentro da classe "words" e adicione um atributo "word" com cada letra percorrida na palavra do loop
        game.querySelectorAll(".words p")[i].setAttribute("word", splittedWord[i]);
    }

}

// Esta função é chamada assim que o formulário do jogo é enviado ao clicar no botão ou pressionando enter
function sendForm( event ){
    event.preventDefault(); // Cancela o refresh da página

    // Obtém o texto digitado no input
    let letter = game.querySelector("#inputLetter").value;
    // Independente do que foi escrito, deixa em minúsculo (aqui poderia ser retirado os acentos também, por exemplo)
    letter = letter.toLowerCase();
    //let letter = event.target.inputLetter.value.toLowerCase(); // Outra forma de fazer aproveitando o event do formulário
    
    // Valida se depois do loop encontrou ou não a palavra digitada
    let isCorrect = false;

    for(let i = 0; i < 5; i++){
        // Pega o atributo word de cada "p"
        const wordAttribute = game.querySelectorAll(".words p")[i].getAttribute("word");
        // Verifica se ele é igual ao que foi digitado pelo usuário
        if( wordAttribute == letter ){
            game.querySelectorAll(".words p")[i].innerHTML = letter; // Se for, escreve ele na tela
            isCorrect = true;
            correctCount++;
        }
    }

    // Se não encontrou a palavra digitada, contabiliza a lista de erros
    if( isCorrect == false ){
        game.querySelector(".errorList").innerHTML += `<p><u>${letter}</u></p>`;
        errorCount++;
        game.querySelector(".errorListCount").innerHTML = errorCount;
    }

    // Valida o fim do jogo com game over
    if( errorCount >= 5 ){
        alert("Você atingiu o limite de 5 letras!\nFim de jogo :(");
        location.reload(); // Recarrega a página
    }

    // Valida o fim do jogo com sucesso
    if( correctCount >= 5 ){
        // Aqui está sendo usado confirm para obter o OK ou Cancel do usuário em continuar ou não
        const response = confirm("Parabéns, você venceu o jogo!\nA palavra correta era ["+selectedWord.toUpperCase()+"]\nGostaria de jogar novamente?")
        if( response == true ){
            location.reload()
        }
    }

    // Limpa o input
    game.querySelector("#inputLetter").value = "";

}