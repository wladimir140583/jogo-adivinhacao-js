//Nesse código estamos aprendendo a mudar o estado do Objeto

// 1 Classe
class Pessoa { 

  constructor(nome, idade, altura){ 
     
    //(estado do objeto)
    this.nome = nome;   //Propriedades do Objeto
    this.idade = idade; //Propriedades do Objeto
    this.altura = altura;
  }

  // 2 Métodos
  cumprimentar(){
    console.log("Olá, tudo bem?");
  }

  apresentacao(){
    console.log("Meu nome é " + this.nome + " e tenho " + this.idade + " anos");
  //  return this.apresentacao
}

  envelhecer(){
    this.idade++;
  }

  apresentacao2(){
    console.log("Meu nome é " + this.nome + " e agora tenho " + this.idade + " anos");

  }

  //Novo metodo com retur
    mostrarIdade(){
  return this.idade;

  }

}

const p1 = new Pessoa("Ana", 20, 1.75); //3 Objeto (Instância)

p1.cumprimentar();

p1.apresentacao();
p1.envelhecer();
p1.envelhecer();

p1.cumprimentar();

p1.apresentacao2();

//Experimentos e testes
//Aqui você não executou a função.
console.log(p1.apresentacao);
//Você apenas pediu para o console mostrar a referência da função.

//Aqui duas coisas aconteceram.
console.log(p1.apresentacao());     //Passo 1 — a função executa

//Teste do mostrar idade usando return
console.log(p1.mostrarIdade());

console.log(p1)

/*
Passo 2 — retorno da função

Não tem return.

Então o que aconteceu foi:

1️⃣ a função executou
2️⃣ ela retornou undefined

Em JavaScript, quando uma função não retorna nada, 
o retorno padrão é: "undefined"

 */