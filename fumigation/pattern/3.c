#include<stdio.h>
void main(){
    int limit=0;
    printf("enter the limit");
    scanf("%d",&limit);

    // exceptional case
    printf("*\n");
    int firstparameter=1;
    int secondparameter=3;
    for(int i=0;i<limit;i++){

       for(int i=0;i<firstparameter;i++){
        for(int j=0;j<firstparameter;j++){
            printf("*");
        }
        printf("\n");
       }
       for(int k=0;k<secondparameter;k++){
        printf("*");
       } 
       printf("\n");
    firstparameter=firstparameter+1;
    secondparameter=secondparameter*2;
    }
}