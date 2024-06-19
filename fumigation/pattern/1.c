#include<stdio.h>
void main(){
    //first parameter
    int parameter=2;
    int secondparameter=3;
    int limit;
    printf("enter the limit");
    scanf("%d",&limit);
    for(int i=0;i<limit;i++){
        for(int j=1;j<=parameter;j++){
            printf("*");
        }
        printf("\n");

        for(int k=1;k<=secondparameter;k++){
            printf("*\n");
        }
        
        parameter=parameter*2;
        secondparameter=secondparameter*2;

    }
}