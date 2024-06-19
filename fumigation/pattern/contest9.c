#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    int initialparameter=1;
    int secondparameter=3;
    printf("*\n");
    for(int i=0;i<rows;i++){

        for(int j=0;j<initialparameter;j++){
            for(int k=0;k<initialparameter;k++){
                printf("*");
            }    
            printf("\n");
    }
        for(int l=1;l<=secondparameter;l++){
            if(l%2==0){
                printf("$");
            }else{
                printf("*");
            }
        }
        printf("\n");
        initialparameter++;
        secondparameter+=3;
        }
}