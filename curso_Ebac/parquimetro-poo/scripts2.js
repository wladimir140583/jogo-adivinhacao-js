class Parquimetro {

    calcular(valor) {

        if (valor < 1) {
            return {
                mensagem: "Valor insuficiente"
            }
        }

        if (valor >= 1 && valor < 1.75) {
            return {
                tempo: 30,
                troco: (valor - 1).toFixed(2)
            }
        }

        if (valor >= 1.75 && valor < 3) {
            return {
                tempo: 60,
                troco: (valor - 1.75).toFixed(2)
            }
        }

        if (valor >= 3) {
            return {
                tempo: 120,
                troco: (valor - 3).toFixed(2)
            }
        }
    }
}