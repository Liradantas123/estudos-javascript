//function media()

//function recuperação()

//function passou()


alert ("boletim escolar");
const nomeAluno = prompt ("registre o nome do aluno")

// primeiro bimestre 
alert ("registre suas notas primeiro bimestre");
const portugues1 = Number(prompt("insira sua nota de portugues"));
const matematica1 = Number(prompt("insira sua nota de matematica"));
const historia1 = Number(prompt("insira sua nota de historia"));
const geografia1 = Number(prompt("insira sua nota de geografia"));
const ciencias1 = Number(prompt("insira sua nota de ciencias"));

console.log("portugues 1 bim " + portugues1);
console.log("matematica 1 bim " + matematica1);
console.log("historia 1 bim " + historia1);
console.log("geografia 1 bim " + geografia1);
console.log("ciencias 1 bim " + ciencias1);

alert("portugues 1 bim " + portugues1);
alert("matematica 1 bim " + matematica1);
alert("historia 1 bim " + historia1);
alert("geografia 1 bim " + geografia1);
alert("ciencias 1 bim " + ciencias1);


alert ("terminou primeiro bimestre");

// segundo bimestre 
alert ("registre suas notas segundo bimestre");
const portugues2 = Number(prompt("insira sua nota de portugues"));
const matematica2 = Number(prompt("insira sua nota de matematica"));
const historia2 = Number(prompt("insira sua nota de historia"));
const geografia2 = Number(prompt("insira sua nota de geografia"));
const ciencias2 = Number(prompt("insira sua nota de ciencias"));

console.log("portugues 2 bim " + portugues2);
console.log("matematica 2 bim " + matematica2);
console.log("historia 2 bim " + historia2);
console.log("geografia 2bim " + geografia2);
console.log("ciencias 2 bim " + ciencias2);

alert("portugues 2 bim " + portugues2);
alert("matematica 2 bim " + matematica2);
alert("historia 2 bim " + historia2);
alert("geografia 2 bim " + geografia2);
alert("ciencias 2 bim " + ciencias2);


alert ("terminou segundo bimestre");

// terceiro bimestre 
alert ("registre suas notas terceiro bimestre");
const portugues3 = Number(prompt("insira sua nota de portugues"));
const matematica3 = Number(prompt("insira sua nota de matematica"));
const historia3 = Number(prompt("insira sua nota de historia"));
const geografia3 = Number(prompt("insira sua nota de geografia"));
const ciencias3 = Number(prompt("insira sua nota de ciencias"));

console.log("portugues 3 bim " + portugues3);
console.log("matematica 3 bim " + matematica3);
console.log("historia 3 bim " + historia3);
console.log("geografia 3 bim " + geografia3);
console.log("ciencias 3 bim " + ciencias3);

alert("portugues 3 bim " + portugues3);
alert("matematica 3 bim " + matematica3);
alert("historia 3 bim " + historia3);
alert("geografia 3 bim " + geografia3);
alert("ciencias 3 bim " + ciencias3);

alert ("terminou terceiro bimestre");

// quarto bimestre 
alert ("registre suas notas quarto bimestre");
const portugues4 = Number(prompt("insira sua nota de portugues"));
const matematica4 = Number(prompt("insira sua nota de matematica"));
const historia4 = Number(prompt("insira sua nota de historia"));
const geografia4 = Number(prompt("insira sua nota de geografia"));
const ciencias4 = Number(prompt("insira sua nota de ciencias"));

console.log("portugues 4 bim " + portugues4);
console.log("matematica 4 bim " + matematica4);
console.log("historia 4 bim " + historia4);
console.log("geografia 4 bim " + geografia4);
console.log("ciencias 4 bim " + ciencias4);

alert("portugues 4 bim " + portugues4);
alert("matematica 4 bim " + matematica4);
alert("historia 4 bim " + historia4);
alert("geografia 4 bim " + geografia4);
alert("ciencias 4 bim " + ciencias4);

alert ("terminou quarto bimestre");

let mediaPORT = (portugues1+portugues2+portugues3+portugues4)/4 //atribuir o resulutado futuramente pela função
mediaPORT = Number(mediaPORT)
console.log(mediaPORT)
alert(mediaPORT)

let mediaMAT = (matematica1+matematica2+matematica3+matematica4)/4
mediaMAT = Number(mediaMAT)
console.log(mediaMAT)
alert(mediaMAT)

let mediaHIST = (historia1+historia2+historia3+historia4)/4 
mediaHIST = Number(mediaHIST)
console.log(mediaHIST)
alert(mediaHIST)

let mediaGEO = (geografia1+geografias2+geografia3+geografia4)/4 
mediaGEO = Number(mediaGEO)
console.log(mediaGEO)
alert(mediaGEO)


let mediaCIEN = (ciencias1+ciencias2+ciencias3+ciencias4)/4 
mediaCIEN = Number(mediaCIEN)
console.log(mediaCIEN)
alert(mediaCIEN)

let passouSimNao = true
let mensagemAlunoPassou = " parabéns você passou de ano!"
let mensagemAlunoReprovado = " estude mais, você reprovou!"

if (media >= 7)
{passouSimNao = true
console.log (nomeAluno + mensagemAlunoPassou)
alert (nomeAluno + mensagemAlunoPassou);
} 
else 
{
console.log (nomeAluno + mensagemAlunoReprovado)
alert (nomeAluno + mensagemAlunoReprovado);}
