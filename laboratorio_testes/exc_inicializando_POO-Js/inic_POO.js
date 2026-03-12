//Iniciando com Programação Orientada a Objeto

//Criando o molde com nome Pessoa - Ainda nao existe nenhuma pessoa
class Pessoa {              
    constructor(nome) {
        // construtor é uma função especial que roda quando usamos = new
        this.nome = nome;
        
    }
    // Criando o Método
    falar() {
        console.log("Olá, meu nome é " + this.nome);
    }       //Importante - this -> é o "Objeto que esta chamando o "Método"
}

//Agora vamos criar uma pessoa
const p1 = new Pessoa("Wladimir"); //Agora sim existe um Objeto e ele tem um nome "Wladimir"
//new significa = Crie uma nova instancia dessa classe

const p2 = new Pessoa("Carlos");

console.log(p1.nome); //Modo certo para referenciar a função

p1.falar();          //Modo certo para executar a Função
                    //Acessa o Metodo, Executa ele, e oque esta dentro da função roda

p2.falar();

//exemplo 
console.log(p1); // p1 é a variável, ela guarda uma referencia
            //Essa referencia aponta para um Objeto -> new Pessoa("Wladimir");
            //O console mostra o conteúdo desse objeto

console.log(p1.falar); // p1.falar é uma referencia a Função, não foi executado ainda
