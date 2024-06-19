#include<stdio.h>
void main(){
    int limit;
    printf("enter the limit");
    scanf("%d",&limit);
    int firstparameter=1;
    int secondparameter=2;

    int thirdparameter=1;
    int fourthparameter=2;
    for(int i=1;i<=limit;i++){
        for(int j=0;j<firstparameter;j++){
            for(int k=0;k<secondparameter;k++){
                printf("X ");
            }
            printf("\n");
        }    
        for(int m=0;m<thirdparameter;m++){
            printf("_ ");
        }
        for(int l=0;l<fourthparameter;l++){
            printf("X ");
        }
        printf("\n");
        firstparameter++;
        thirdparameter++;
        fourthparameter*=2;
    }
    }