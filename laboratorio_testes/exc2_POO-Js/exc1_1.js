// Iniciando com Programação Orientada a Objeto POO 
//Mini sistema de arquivo 

class Servidor {
  constructor(nome) {
    this.nome = nome;
    this.arquivos = [];
  }
  enviarArquivo(nomeArquivo) {
    this.arquivos.push(nomeArquivo);
  }
}

const Servidor1 = new Servidor("Raspberry");
const Servidor2 = new Servidor("Servidor Linux");

Servidor1.enviarArquivo("backup.sql");
Servidor1.enviarArquivo("index.html");

Servidor1.arquivos.push("Arquivo3.txt");

console.log(Servidor1);
console.log(Servidor2);