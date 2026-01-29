#include <stdio.h>

int main() {
    FILE *arquivo;
    char c;
    int contador = 0;  // Conta quantas letras tem
    
    // Cria arquivo
    arquivo = fopen("contagem.txt", "w");
    fprintf(arquivo, "TESTE2");
    fclose(arquivo);
    
    // Lê e conta
    arquivo = fopen("contagem.txt", "r");
    
    while ((c = fgetc(arquivo)) != EOF) {
        contador++;  // Aumenta o contador
        printf("Letra %d: %c\n", contador, c);
    }
    
    printf("\nTotal de letras: %d\n", contador);
    
    fclose(arquivo);
    return 0;
}

/*
**O que você vai ver:**

Letra 1: T
Letra 2: E
Letra 3: S
Letra 4: T
Letra 5: E

Total de letras: 5
*/