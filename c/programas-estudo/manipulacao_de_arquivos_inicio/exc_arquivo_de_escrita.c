#include <stdio.h>

/*
Manipulação de arquivos em C. Isso é fundamental para Sistemas Operacionais!
Passo 1: Entendendo o Conceito
Quando você trabalha com arquivos em C, você precisa:

Abrir o arquivo (criar uma conexão)
Ler/Escrever dados
Fechar o arquivo (liberar recursos)

Passo 2: O Ponteiro FILE
c
FILE *arquivo;

FILE = é um tipo especial que representa um arquivo
*arquivo é um ponteiro que guardará o "endereço" do arquivo aberto
Pense nele como uma "porta" para acessar o arquivo

Passo 3: Criando um Arquivo de Texto Primeiro
Vamos criar um programa que escreve um arquivo antes de ler:
*/

int main() {
    FILE *arquivo;  // 1. Declara o ponteiro
    
    // 2. Abre (ou cria) o arquivo no modo escrita
    arquivo = fopen("texto.txt", "r");
    
    // 3. Verifica se conseguiu abrir
    if (arquivo == NULL) {
        printf("Erro ao criar arquivo!\n");
        return 1;
    }
    
    // 4. Escreve no arquivo
    fprintf(arquivo, "Ola, estou aprendendo C!\n");
    fprintf(arquivo, "Esta e a segunda linha.\n");
    
    // 5. Fecha o arquivo (MUITO IMPORTANTE!)
    fclose(arquivo);
    
    printf("Arquivo criado com sucesso!\n");
    return 0;
}