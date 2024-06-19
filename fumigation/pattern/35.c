#include<stdio.h>

void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    int initialparameter=4;
    for(int i=0;i<rows;i++){
        for(int j=0;j<initialparameter;j++){
            printf("X");
        }
        printf("\n");
        for(int k=0;k<initialparameter-1;k++){
            printf("X");
        }
        printf("\n");
        for(int j=0;j<3;j++){
            printf("X\n");
        }
        initialparameter--;
    }
}