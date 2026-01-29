#include <stdio.h>

int main() {
    FILE *arquivo;
    char c;  // Vai guardar cada letra
    
    // Cria o arquivo primeiro
    arquivo = fopen("teste.txt", "w");
    fprintf(arquivo, "ABC");  // Escreve ABC
    fclose(arquivo);
    
    // Agora vamos ler
    arquivo = fopen("teste.txt", "r");
    
    printf("Lendo letra por letra:\n");
    
    // O LOOP FAMOSO:
    while ((c = fgetc(arquivo)) != EOF) {
        // A cada rodada:
        // 1. fgetc pega uma letra e guarda em c
        // 2. Compara se c é diferente de EOF
        // 3. Se for diferente, entra no loop
        // 4. Se for igual a EOF, para o loop
        
        printf("Li a letra: %c\n", c);
    }
    
    printf("Fim do arquivo!\n");
    
    fclose(arquivo);
    return 0;
}

/* 
Comparação com um For
Se você conhece o for, é parecido com isso

// Contando de 0 a 2
for (int i = 0; i < 3; i++) {
    printf("%d ", i);
}
// Saída: 0 1 2

// "Contando" letra por letra até EOF
while ((c = fgetc(arquivo)) != EOF) {
    printf("%c", c);
}

**Saída do programa:**

Lendo letra por letra:
Li a letra: A
Li a letra: B
Li a letra: C
Fim do arquivo!
*/