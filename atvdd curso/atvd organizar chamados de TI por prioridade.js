let nomeSolicitante = "joão";
let descricaoprobl = "pc lento";

let impacto = "1";
impacto = Number(impacto)

let urgencia = "1";
urgencia = Number(urgencia)

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
A Entrada Dinâmica dos Dados (sem dados prontos com console.log e prompt)