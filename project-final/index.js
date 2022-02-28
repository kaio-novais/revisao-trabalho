/*alert("Que os jogos comecem! Espero que goste deste pequeno trabalho ;)")*/


/**HOME PAGE***/

function next() {
    alert("Você escolheu Raya. Apartir daqui não será mais possivel mudar de combatente")
   
}
function next2() {
    alert("Você escolheu Merida. Apartir daqui não será mais possivel mudar de combatente")
    
}
function next3() {
    
    alert("Você escolheu Elsa. Apartir daqui não será mais possivel mudar de combatente")
    
}


/***Merida.html*/

/*OBJETO*/
let pessoa = {
    nome:'rafael', 
    sobrenome:'algustos da silva',
    cpf:'535.161.958-00'
}
let pessoa2 = {
    nome:'guilherme', 
    sobrenome:'algustos da silva',
    cpf:'535.161.958-00'
}
/*OBJETO CONTENT END*/ /*TESTES 1/1*/


function mudarTexto() { /*orientação a objetos*/
    let titulo = document.getElementById("titulo").innerHTML = "Merida | Historia";
    let paragrafo = document.getElementById("paragrafo").innerHTML = 'Trata-se de uma princesa escocesa que gosta de tiro com arco e que, sem querer, desencadeia problemas em seu reino ao tentar contestar sua mãe, a Rainha Elinor, que organiza uma competição pela mão da filha envolvendo os Quatro Clãs mais poderosos das Terras Altas. Porém, ao trocar seu medalhão com uma bruxa por um feitiço que supostamente mudaria a opinião da rainha quanto ao casamento, Merida acaba por transformar a mãe em um urso, contexto no qual a parte principal da história se desenvolve, quando mãe e filha embarcam em uma jornada à procura da reve.';
    let info = document.getElementById("info").innerHTML = 'Merida é uma personagem fictícia e a protagonista do filme da Disney•Pixar de 2012, Brave.';
    let segundotitulo = document.getElementById("segundotitulo").innerHTML = "Historia de coragem";

}
function mudarTexto2() { /*orientação a objetos*/
    let titulo = document.getElementById("titulo").innerHTML = "Raya | Historia";
    let paragrafo = document.getElementById("paragrafo").innerHTML = 'Raya é uma principal protagonista no filme animado de 2021 da Disney, Raya e o Último Dragão. Raya aparece pela primeira vez em sua juventude, testada por seu pai para o papel de Guardião da Gema do Dragão, que concede os poderes de Sisu e protege Coração dos Druun. Ela passa com sucesso e ganha o título. O Chefe Benja convida as Terras da Cauda, ​​da Garra, da Espinha e das Presas para participar de um banquete. Durante a festa, Raya faz amizade com a princesa Namaari da Terra Fang. ';
    let info = document.getElementById("info").innerHTML = 'Raya and the Last Dragon é um filme de animação digital estadunidense dos gêneros aventura e fantasia de 2021, produzido pela Walt Disney Animation Studios e distribuído pela Walt Disney Pictures, sendo o 59º filme do estúdio.';
    let segundotitulo = document.getElementById("segundotitulo").innerHTML = "Caçadora de dragões";

}
function mudarTexto3() { /*orientação a objetos*/
    let titulo = document.getElementById("titulo").innerHTML = "Elsa | Historia";
    let paragrafo = document.getElementById("paragrafo").innerHTML = 'A personagem Rainha da Neve, neutra mas de coração frio no conto de fadas original e vilã em inúmeras adaptações da personagem, provou ser difícil de adaptar para o cinema devido à sua representação transparente. Vários executivos de cinema, incluindo Walt Disney, tentaram desenvolver o personagem, e uma série de adaptações para o cinema programadas foram engavetadas quando não conseguiram desenvolver o personagem.[2] Buck e sua codiretora, Jennifer Lee, conseguiram resolver o dilema retratando Elsa e Anna como irmãs. Por mais que a luta de Anna seja externa, a de Elsa é interna. Isso fez com que Elsa fosse gradualmente reescrita como uma personagem simpática e incompreendida.';
    let info = document.getElementById("info").innerHTML = 'Elsa de Arendelle é uma personagem fictícia do 53º filme de animação dos estúdios Walt Disney Pictures, Frozen. Elsa é inspirada na personagem-título de A Rainha da Neve, de Hans Christian Andersen. É dublada originalmente, na versão americana, pela atriz e cantora Idina Menzel, que foi bastante elogiada pela atuação';
    let segundotitulo = document.getElementById("segundotitulo").innerHTML = "Rainha congelante";

}

let  famila= [pessoa, pessoa2]; /*array com objeto*/
let lista = [02, 03, 24, 28, 29]/*array com numeros*/
/*
let corSite = "azul"
function alteraCor(cor) {
    corSite = cor
}

console.log(corSite)
alteraCor("verde");
console.log(corSite)
*/

/*
function multiplyValor(valor) {
    return valor * 3
}



let resultado = multiplyValor(15);
console.log(resultado)*/


/*operadores*/

let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo)





/*merida urso decisões*/

function urso() {
    alert('você perdeu! merida se desviou do caminho e encontrou o urso malvado.O principe encantado se foi. refaça suas decisôes.')
}
function viking() {
    alert('Você perdeu! Merida não foi capaz de vencer os vikings malvados e foi derrotada pelo bando. o principe nunca mais foi visto depois disso...')
}

function embora() {
    alert('Parabens, você ganhou! nem toda boa ação é a melhor escolha. Apesar de ter perseguido os malvados, um urso os atacou e merida pode ver o principe fugir. são e salvo. ')
}


function ponte() {
    alert('você perdeu! Elsa construiu a ponte mas o pedaço onde o principe estava pendurado se soltou! uma pena.')
}
function vento() {
    alert('Você perdeu! elsa impediu os ventos mas o principe de hivia acabou sendo jogado para o precipicio na ultima rajada de vento que foi soprada.')
}

function cair() {
    alert('Parabens, você ganhou! todos esperaram o pior apos o principe despencar. mas sven estava logo abaixo do mesmo, e o salvou com seu trenó de madeira.')
}

/***RAYA FUNCTION*/
function sacrificio() {
    alert('Parabens, você ganhou! raya se sacrificou pelo dragão, derrotando o drunn. uma heroina que será lembrada.')
}


function espada() {
    alert('você perdeu! A espada sagrada se quebrou, e não foi o sulficiente para derrotar o monstro, que transformou raya em pedra')
}
function luz() {
    alert('Você perdeu! mesmo tendo capturado a luz do sol no orbe especial, não era o sulficiente para destruir o drunn, que finalizou o ultimo dragão.')
}