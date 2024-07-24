/*
    Scripts úteis em diversas circunstâncias e que podem ser reaproveitados em outros lugares
    Escreva apenas funções, e que sejam úteis em diversos locais do site.

    NOTA: estas funções poderiam ser utilizadas no arquivo do termo.html, mas preferi não usar.
*/

// Remove acentos de uma palavra ou texto.
function removeAccents(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

//Torna a primeira letra de uma frase maiúscula e mantém o resto do texto inalterado.
function capitalizeFirstLetter(sentence) {
    if (sentence.length === 0) return sentence;
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

// Gera um número aleatório entre dois valores (inclusive).
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Formata uma data no formato "DD/MM/AAAA".
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}

// Remove caracteres especiais como por exempo "!?/\ "
function removeSpecialCharacter(text){
    return text.normalize("NFD").replace(/[^a-zA-Z]/g, '');
}