#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    int ascii=65;
    for(int i=65;i<rows+65;i++){
        ascii=65;
        for(int j=i;j<rows+64;j++){
            printf(" ");
        }

        for(int k=65;k<=i;k++){
            printf("%c",k);
        }
        for(int k=i-1;k>=65;k--){
            printf("%c",k);
        }
        printf("\n");
    }


}