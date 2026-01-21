#include <stdio.h>
#include <stdlib.h>
#include <math.h>

void limparTela() {
    #ifdef _WIN32
        system("cls");
    #else
        system("clear");
    #endif
}

int main() {
    char continuar = 'S';
    
    while (continuar == 'S' || continuar == 's') {
        limparTela();
        
        char nome[30];
        char sexo;
        float altura, peso;

        printf(" ## Programa Calculo do Peso Ideal ##\n\n");

        printf("Digite seu nome: ");
        scanf("%s", nome);

        printf("Digite seu sexo (M/F): ");
        scanf(" %c", &sexo);

        if (sexo != 'M' && sexo != 'F' && sexo != 'm' && sexo != 'f') {
            printf("Sexo invalido! Use M ou F\n");
            printf("\nPressione Enter para continuar...");
            getchar();
            getchar();
            continue;  // Volta para o início do loop
        }

        printf("Digite sua altura (em metros): ");
        scanf("%f", &altura);

        if (altura <= 0 || altura > 3.0) {
            printf("Altura invalida!\n");
            printf("\nPressione Enter para continuar...");
            getchar();
            getchar();
            continue;
        }

        if (sexo == 'M' || sexo == 'm') {
            peso = 22 * pow(altura, 2);
        } else {
            peso = 21 * pow(altura, 2);
        }

        printf("\n%s: Seu peso ideal e %.3f Kg\n", nome, peso);

        printf("\nDeseja calcular novamente? (S/N): ");
        scanf(" %c", &continuar);  
    }

    limparTela();
    printf("Programa encerrado!\n");
    return 0;
}