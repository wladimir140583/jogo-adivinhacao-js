#include <stdio.h>

int main() {
    FILE *arquivo;
    char c;
    
    // === PARTE 1: CRIAR E ESCREVER ===
    printf("=== CRIANDO ARQUIVO ===\n");
    arquivo = fopen("meu_teste.txt", "r");
    
    if (arquivo == NULL) {
        printf("Erro ao criar!\n");
        return 1;
    }
    
    fprintf(arquivo, "Linha 1: Aprendendo arquivos em C\n");
    fprintf(arquivo, "Linha 2: Sistemas Operacionais\n");
    fprintf(arquivo, "Linha 3: Entrada e Saida\n");
    
    
    fclose(arquivo);
    
    // === PARTE 2: LER O ARQUIVO ===
    printf("=== LENDO ARQUIVO ===\n");
    arquivo = fopen("meu_teste.txt", "r");
    
    if (arquivo == NULL) {
        printf("Erro ao abrir!\n");
        return 1;
    }

        printf("\nConteudo do arquivo:\n\n");

    while ((c = fgetc(arquivo)) != EOF) {
        putchar(c);  // Equivalente a printf("%c", c)
    }
    
    fclose(arquivo);
    
    return 0;
}

/* ##  Relação com Sistemas Operacionais ##

Em SO você vai ver que:
fopen() chama system calls como open() no Linux
O SO gerencia os descritores de arquivo (file descriptors)
O buffer de I/O é gerenciado pelo SO
fclose() garante que o buffer seja flushed (esvaziado) para o disco

## VERSÃO FÁCIL DE ENTENDER:
while (1) {  // Loop infinito
    c = fgetc(arquivo);  // Pega uma letra
    
    if (c == EOF) {  // Se for o fim do arquivo
        break;  // Sai do loop
    }
    
    printf("%c", c);  // Mostra a letra
}

## A versão compacta faz TUDO na mesma linha ##

while ((c = fgetc(arquivo)) != EOF) {
    printf("%c", c);
}

*/