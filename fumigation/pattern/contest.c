#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    int parameter=50;
    for(int i=0;i<rows;i++){
        for(int j=0;j<i;j++){
            printf("%d ",parameter);
            parameter-=5;
        }
        printf("\n");
    }
}