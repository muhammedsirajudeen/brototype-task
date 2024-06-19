#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    for(int i=0;i<rows;i++){
     for(int j=rows-1;j>=i;j--){
        printf(" ");
     }   
     for(int j=0;j<rows;j++){
        if(j==0 || j==rows-1 || i==0 || i==rows-1){
            printf("*");
        }else{
            printf(" ");
        }
     }
     printf("\n");
    }
}