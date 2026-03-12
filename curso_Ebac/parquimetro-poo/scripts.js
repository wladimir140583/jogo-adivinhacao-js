class Parquimetro {

    constructor(valor) {
        this.valor = valor;
    }

    calcular() {

        if (this.valor < 1) {
            return "Valor insuficiente";
        }

        if (this.valor >= 3) {
            let troco = this.valor - 3;
            return `Tempo: 120 minutos | Troco: R$ ${troco.toFixed(2)}`;
        }

        if (this.valor >= 1.75) {
            let troco = this.valor - 1.75;
            return `Tempo: 60 minutos | Troco: R$ ${troco.toFixed(2)}`;
        }

        if (this.valor >= 1) {
            let troco = this.valor - 1;
            return `Tempo: 30 minutos | Troco: R$ ${troco.toFixed(2)}`;
        }
    }
}

// AGORA sim instanciamos depois da classe existir
const parq = new Parquimetro(3);
console.log(parq.calcular());