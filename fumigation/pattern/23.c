#include<stdio.h>
void main(){
    int limit;
    printf("enter the limit");
    scanf("%d",&limit);
    int firstparameter=4;
    int secondparameter=1;
    for(int i=0;i<limit;i++){
        for(int j=0;j<firstparameter;j++){
            printf("X ");
        }
        printf("_ _\n");
        printf("_ ");
        for(int k=0;k<firstparameter;k++){
            printf("X ");
        }
        printf("\n");
        for(int l=0;l<secondparameter;l++){
            printf("X\n");
        }
        firstparameter--;
        secondparameter++;
    }
}