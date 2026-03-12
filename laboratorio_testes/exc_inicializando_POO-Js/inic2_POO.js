//Iniciando com Programação Orientada a Objeto

//Criando o molde com nome Pessoa - Ainda nao existe nenhuma pessoa
class Pessoa {              
    constructor(nome) {
        // construtor é uma função especial que roda quando usamos = new
        this.nome = nome;
    }
    // Criando o Método
    falar() {
        console.log(this);
    }       //
}


const p1 = new Pessoa("Wladimir"); 
p1.falar();    

const teste = p1.falar;
teste(); 

