let continuar = true;

while (continuar){

let nomeSolicitante = prompt("insira o nome do solicitante");
console.log(nomeSolicitante)

let descricaoProblema = prompt("diga o seu problema");
console.log (descricaoProblema)

let impacto = prompt("qual o impacto do problema? baixo, médio ou alto?");
console.log (impacto)

let urgencia = prompt("qual a urgência do problema? baixo, médio ou alto?");
console.log (urgencia)

if (impacto === "alto") {
impacto = 3;}
else if (impacto === "medio") {
impacto = 2;}
else if (impacto === "médio") {
impacto = 2;}
else if (impacto === "baixo") {
impacto = 1;}
console.log(impacto)

if (urgencia === "alto") {
urgencia = 3;}
else if (urgencia === "medio") {
urgencia = 2;}
else if (urgencia === "médio") {
urgencia = 2;}
else if (urgencia === "baixo") {
urgencia = 1;}
console.log(urgencia)


let resultado;

if (impacto === 3 && urgencia === 3) {
resultado = "critico";

} else if (impacto === 3 || urgencia === 3) {
resultado = "alto";

} else if (impacto === 2 || urgencia === 2) {
resultado = "medio";

} else {
resultado = "baixo";
}

console.log (nomeSolicitante)
console.log (descricaoProblema)
console.log (impacto)
console.log (urgencia)
console.log (resultado)

alert("RESUMO DO CHAMADO \n" 
+
 "Solicitante: " + nomeSolicitante + "\n"
+
 "Problema: " + descricaoProblema + "\n"
+
 "Impacto: " + impacto + "\n" 
+
 "Urgência: " + urgencia + "\n" 
+ 
"Prioridade Final: " + resultado);

let resposta = prompt("deseja coontinuar? sim ou não?")
if (resposta === "não") {continuar = !true} }