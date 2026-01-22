#include <stdio.h>
#include <string.h>

int main () {

    float nota1, nota2, media;
    char nome [20];

    printf("\n\n ## Programa Situacao do Aluno ## \n\n");

    // Duas formas de (pegar) adicionar o nome

  
/*    // Primeira forma
    printf("Digite seu nome: \n");
    scanf("%s", nome);
*/


    //Segunda Forma -> Dessa forma é possivel escrever o nome completo com espaço
    printf("Digite seu nome: \n");
    fgets(nome, 20, stdin);
    nome[strcspn(nome, "\n")] = '\0';  // Remove o \n do final


    printf("Digite a primeira nota: \n");
    scanf(" %f", &nota1);

    printf("Digite a segunda nota: \n");
    scanf(" %f", &nota2);

    media = (nota1 + nota2) / 2;

    if (media >=7) {
        printf("Sua media e de: %.1f\n", media); 
        printf("Parabens %s, voce foi Aprovado!...\n", nome);
    } else if (media >=4) {
        printf("Sua media e de: %.1f\n", media);
        printf("Poxa %s, voce nao atingiu a media e esta de recuperacao. \n", nome);
    } else {
        printf("Sua media e de: %.1f\n", media);
        printf("%s, Voce foi Reprovado! \n", nome);
        printf("Precisa estudar mais!!..");
    }
    

    return 0;
}