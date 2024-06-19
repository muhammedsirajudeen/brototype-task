#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    for(int i=0;i<rows;i++){
        for(int j=0;j<2*i;j++){
            printf(" ");
        }
        for(int k=1;k<=rows-i;k++){
            if(i%2==0){
                printf("* ");
            }else{
                printf("$ ");
            }
        }
        printf("\n");
    }
}