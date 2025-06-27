const botaoMostraPalavras = document.querySelector ('#botao-palavrachave');

botaoMostraPalavras.addEventListener ('click', mostraPalavraChave);

function mostraPalavraChave () {
    //alert("Fui clicado!");
    const texto = document.querySelector('#entrada-de-texto').value;   
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palvras = processaTexto(texto);

    campoResultado.textContent = palvras.joins(", ");
}

function processaTexto(texto) {
    //let palavras = texto.split(/\s+/); "Retirar espaços"
    //let palavras = texto.split(/[a-zA-Z]+/);  "letras minusculos e maiusculas"
    let palavras = texto.split("/\ P{L}=/u/"); /* \P negação; {L} conjunto de letras; + uma ou mais ocorrências; u  Unicode*/

    let  frequencias = [];

    for ( let in palavras) {
         frequencias [i] = 0;
         for ( let j in palavras) {
            if palavras[i] == palavras[j] {
                frequencias[i]++;
            }
         }    
    }

    console.log(frequencias);

   return palavras;
}