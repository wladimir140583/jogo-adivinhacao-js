//Nesse código estamos aprendendo a mudar o estado do Objeto

// 1 Classe
class Pessoa { 

  constructor(nome, idade){ 
     
    //(estado do objeto)
    this.nome = nome;   //Propriedades do Objeto
    this.idade = idade; //Propriedades do Objeto
  }

  // 2 Método
  apresentacao(){
    console.log("Meu nome é " + this.nome + " e tenho " + this.idade + " anos");
  }

  // Esse é o método que altera o estado do objeto 
  envelhecer(){
    this.idade++;
  }

}

const p1 = new Pessoa("Ana", 20); //3 Objeto (Instância)

// Métodos (comportamento)
//Métodos são funções dentro da classe.
p1.apresentacao();  
//Isso define o comportamento do objeto, ou seja, Objeto faz alguma coisa

p1.envelhecer();
p1.envelhecer();
p1.envelhecer();
//Isso altera 3x o comportamento do objeto.

p1.apresentacao();
//Definição final do objeto

/* Visual completo e resumida da sua classe

Classe Pessoa
│
├─ Propriedades
│   ├─ nome
│   └─ idade
│
└─ Métodos
    ├─ apresentar()
    └─ envelhecer()
*/