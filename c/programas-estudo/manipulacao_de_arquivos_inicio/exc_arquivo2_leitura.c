#include <stdio.h>

int main() {
    FILE *arquivo;
    char c;
    
    // 1. Abre o arquivo no modo leitura
    arquivo = fopen("texto.txt", "r");
    
    // 2. Verifica se o arquivo existe
    if (arquivo == NULL) {
        printf("Erro! Arquivo nao encontrado.\n");
        return 1;
    }
    
    printf("\nConteudo do arquivo:\n\n");
    
    // 3. Lê caractere por caractere até o fim
    while ((c = fgetc(arquivo)) != EOF) {
        printf("%c", c);  // Mostra na tela
    }
    
    // 4. Fecha o arquivo
    fclose(arquivo);
    
    return 0;
}

/*    Explicação detalhada:

fopen("texto.txt", "r") - Modo "r" (read = leitura)
EOF - End Of File (constante que indica fim do arquivo)
O while lê cada caractere até chegar no final
*/