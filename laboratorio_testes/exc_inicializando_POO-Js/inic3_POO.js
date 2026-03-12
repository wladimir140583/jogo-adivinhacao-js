// 1 - Criando a Classe
class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    } 

// 2 - Método
falar(){
  console.log("Olá, meu nome é " + this.nome + 
    " e tenho " + this.idade + " anos.");

    }
}

//3 - Agora criamos o objeto
const p1 = new Pessoa("wladimir", 30);
const p2 = new Pessoa("Carlos", 25);
const p3 = new Pessoa("Ana", 22);

p1.falar();
p2.falar();
p3.falar();

console.log(p1);
console.log(p1.falar === p2.falar);