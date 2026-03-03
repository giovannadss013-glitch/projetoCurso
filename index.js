
// ===========================
// Classe Genérica: Herói
// ===========================
class Heroi {
    // Construtor da classe
    constructor(nome, tipo) {
        // Variáveis/Propriedades do herói
        this.nome = nome; // Nome do herói
        this.tipo = tipo; // Tipo: guerreiro, mago, monge ou ninja
    }

    // Método atacar
    atacar() {
        let ataque = ""; // Variável para armazenar o tipo de ataque

        // Estrutura de decisão para escolher o ataque correto
        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "ataque desconhecido";
        }

        // Exibe a mensagem final
        console.log(${this.tipo} ${this.nome} atacou usando ${ataque});
    }
}

// ===========================
// Criando os heróis (objetos)
// ===========================
let heroi1 = new Heroi("Arthas", "guerreiro");
let heroi2 = new Heroi("Merlin", "mago");
let heroi3 = new Heroi("Lee", "monge");
let heroi4 = new Heroi("Ryu", "ninja");

// ===========================
// Armazenando heróis em um array
// ===========================
let herois = [heroi1, heroi2, heroi3, heroi4];

// ===========================
// Laço de repetição para atacar
// ===========================
for (let i = 0; i < herois.length; i++) {
    herois[i].atacar(); // Chama o método atacar de cada herói
} 