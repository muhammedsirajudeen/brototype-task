#include<stdio.h>
void main(){
    int firstparameter=2;
    int secondparameter=1;
    int thirdparameter=5;
    int limit;
    printf("enter the limit");
    scanf("%d",&limit);
    for(int i=0;i<limit;i++){
        for(int j=0;j<secondparameter;j++){
            for(int k=0;k<firstparameter;k++){
                printf("*");
            }
            printf("\n");
        }

        for(int m=0;m<thirdparameter;m++){
            printf("*");
        }
        printf("\n");
        secondparameter++;
        thirdparameter+=5;
    }
}