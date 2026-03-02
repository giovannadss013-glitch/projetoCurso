// Função que calcula o rank do herói
function calcularRank(vitorias, derrotas) {
    
    let saldoVitorias = vitorias - derrotas
    let nivel = ""

    // Estrutura de decisão
    if (vitorias <= 10) {
        nivel = "Ferro"
    } 
    else if (vitorias <= 20) {
        nivel = "Bronze"
    } 
    else if (vitorias <= 50) {
        nivel = "Prata"
    } 
    else if (vitorias <= 80) {
        nivel = "Ouro"
    } 
    else if (vitorias <= 90) {
        nivel = "Diamante"
    } 
    else if (vitorias <= 100) {
        nivel = "Lendário"
    } 
    else {
        nivel = "Imortal"
    }

    return { saldoVitorias, nivel }
}

// Lista de heróis identificados
let jogadores = [
    { nome: "Harron", vitorias: 5, derrotas: 2 },
    { nome: "Orion", vitorias: 25, derrotas: 10 },
    { nome: "Lian", vitorias: 75, derrotas: 20 },
    { nome: "Gohan", vitorias: 105, derrotas: 30 }
]

// Laço de repetição
for (let i = 0; i < jogadores.length; i++) {

    let resultado = calcularRank(
        jogadores[i].vitorias,
        jogadores[i].derrotas
    )

    console.log(
        "O herói " + jogadores[i].nome +
        " tem saldo de " + resultado.saldoVitorias +
        " e está no nível de " + resultado.nivel
    )
}