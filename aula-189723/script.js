// Window.document -> Objetivo que representa o documneto HTML

// document.getElementById() -> Busca pelo id do elemento
// document.getElementByClassName() -> Busca todos os elementos por class
// document.getElementByTagName() -> Busca todos os elementos por tag

// Window.document.getElementbyId()
let titulo = document.getElementByid("titulo"); // Era muito utilizado antes
// let titulo = document.querySelector("#titulo"); // Paralelo do getElementByid
let paragrafos = document.getElementByClassName("paragrafo");
let negritos = document.getElementsByTagName("b");
let campoEmail = document.querySelector("input[type=email]"); // É muito aplicada hoje
let negritosParagrafo = document.querySelectorAll("p b"); // É muito aplicada hoje

// titulo.align = "right";
// titulo.title = "Titulo Principal";
// titulo.style.color = "cyan";
// titulo.style.fontSize = "100px";
let paragrafo = document.querySelector("p")
paragrafo.innerHTML = "Hoje na aula de <b>JavaScript</b> conversamos sobre Dom. Entendi muita coisa."
console.log(paragrafo.innerText); //Conteudo textual do elemento
console.log(paragrafo.innerText); //Conteudo textual do elemento


