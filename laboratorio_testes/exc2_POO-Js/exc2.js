// Sistema de Arquivo 

class Servidor {
  constructor(nome) {
    this.nome = nome;
    this.arquivos = [];
  }

  enviarArquivo(nomeArquivo) {
    this.arquivos.push(nomeArquivo);
    console.log(`Arquivo ${nomeArquivo} enviado para ${this.nome}`);
  }

  listarArquivos() {
    console.log(`Arquivos no servidor ${this.nome}:`);
    console.log(this.arquivos);
  }

  deletarArquivo(nomeArquivo) {
    this.arquivos = this.arquivos.filter(
      arquivo => arquivo !== nomeArquivo
    );
    console.log(`Arquivo ${nomeArquivo} removido`);
  }
}

const servidorFTP = new Servidor("Raspberry");

servidorFTP.enviarArquivo("backup.sql");
servidorFTP.enviarArquivo("index.html");

servidorFTP.listarArquivos();

servidorFTP.deletarArquivo("backup.sql");

servidorFTP.listarArquivos();