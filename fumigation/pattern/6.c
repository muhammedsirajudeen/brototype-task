#include<stdio.h>
void main(){
    int limit;
    printf("enter the limit");
    scanf("%d",&limit);

    int firstparameter=10;
    int secondparameter=1;
    for(int i=0;i<limit;i++){
        for(int j=0;j<firstparameter;j++){
            printf("*");
        }
        printf("\n");

        for(int k=0;k<secondparameter;k++){
            printf("*\n");
        }
        firstparameter-=2;
        secondparameter++;
    }
}