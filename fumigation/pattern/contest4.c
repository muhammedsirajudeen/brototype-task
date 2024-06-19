#include<stdio.h>

void main(){
    int rows;
    printf("enter the rows");
    scanf("%d",&rows);
    for(int i=65;i<65+rows;i++){
        for(int j=i;j<rows+64;j++){
            printf(" ");
        }
        for(int k=65;k<i;k++){
            printf("%c",k);
        }
        for(int k=i-2;k>=65;k--){
            printf("%c",k);
        }
        printf("\n");
    }
}