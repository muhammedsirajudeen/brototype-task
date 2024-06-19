#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    for(int i=0;i<rows;i++){
        for(int j=0;j<rows;j++){
            if(j==i || j==rows-i-1 || j==0 || j==rows-1){
                printf("*");
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}