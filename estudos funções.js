function NumeroDaSorte(idadeE,diaE,NomeC)
{ var idade = idadeE;
  idade = Number(idade)
  var dia = diaE;
  dia = Number(dia)
  var resultado = idade*dia + 2;
  var nomeParaMostrar = NomeC + " Seu numero da sorte é: " + resultado;
  return nomeParaMostrar;
}

var NomeC = prompt("insira nome do candidato");


var idadeE = prompt("insira sua idade");
idadeE = Number(idadeE);

var diaE = prompt("insira o dia do seu aniversario");
diaE = Number(diaE);

var mensagemFinal = NumeroDaSorte(idadeE,diaE,NomeC)

alert(mensagemFinal);
console.log(mensagemFinal)
