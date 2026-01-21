#include <stdio.h>
#include <math.h>
#include <string.h>

void calcularPeso (void) {

    char nome [30];
    char sexo;
    float altura, peso;
    
    printf(" \n\n## Programa Calculo do Peso Ideal ##\n\n");

    printf("Digite seu nome:\n");
//    scanf("%s", nome); // Para uma palavra

// OU
    fgets(nome, 30, stdin);  // Para nome completo
    nome[strcspn(nome, "\n")] = '\0';  // Remove \n


    printf("\nDigite seu sexo: \n");
    printf(" Masculino (M) / Feminino (F): \n");
    scanf(" %c", &sexo);

    // Validar se nome está vazio
if (strlen(nome) == 0) 
{
    printf("Por Favor digite seu nome!\n");
    return;
}

// Validar sexo
if (sexo != 'M' && sexo != 'F' && sexo != 'm' && sexo != 'f') {
    printf("Sexo inválido! Use M ou F\n");

    return;
}

    // Entrada da altura
    printf("\nDigite sua altura: \n");
    scanf("%f", &altura);

    // Validar altura
    if (altura <= 0 || altura > 3.0) {
        printf("Altura invalida!\n");
        return;
    }

    // Calcular peso
   if (sexo == 'M' || sexo == 'm') {  // CORRETO
    peso = 22 * pow(altura, 2);
} else {
    peso = 21 * pow(altura, 2);

}

    // Exibir resultado
    printf("\n%s: Seu peso ideal e: %.3f Kg\n\n", nome, peso);

    getchar();

}