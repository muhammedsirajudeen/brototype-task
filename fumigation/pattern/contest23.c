#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    for(int i=rows;i>=0;i--){
        for(int j=0;j<i;j++){
            printf(" ");
        }    
        for(int j=0;j<i;j++){
            printf("*");
        }
        printf("\n");
    }
}