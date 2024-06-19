#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    for(int i=0;i<rows;i++){
        for(int j=0;j<2*rows;j++){
            if(j<=i || j>= (2*rows-i-1)){
                printf("*");
            }else{
                printf("$");
            }
        }


        printf("\n");
    }
}