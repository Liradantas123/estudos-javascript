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

if (urgencia === "alto") {
urgencia = 3;}
else if (urgencia === "medio") {
urgencia = 2;}
else if (urgencia === "médio") {
urgencia = 2;}
else if (urgencia === "baixo") {
urgencia = 1;}


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

FALTA:
A Estrutura de Repetição (Loop)
A Exibição do Resultado (Saída)
A Entrada Dinâmica dos Dados (fazendo)