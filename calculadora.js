console.log ("inicio");
alert ("calculadora");

var n1;
n1 = Number(prompt("digite o primeiro numero"));

var operação;
operação = prompt ("digite o operador - + / *");

var n2;
n2 = Number(prompt("digite o segundo numero"));


var soma = n1 + n2;
var divisão = n1 / n2;
var subtração = n1 - n2;
var multiplicação = n1 * n2;

var calculo;

if (operação === "+") {calculo = soma; }
if (operação === "-") {calculo = subtração; }
if (operação === "/") {calculo = divisão; }
if (operação === "*") {calculo = multiplicação; }


alert (calculo);

var resultado = (calculo);

console.log (resultado);