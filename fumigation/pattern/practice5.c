#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);

    for(int i=0;i<rows;i++){
        for(int j=i;j<rows-1;j++){
            printf(" ");
        }

        for(int k=0;k<i;k++){
            printf("* ");
        }
        printf("\n");

    }
        for(int i=rows-1;i>=0;i--){
        for(int j=i;j<rows-1;j++){
            printf(" ");
        }

        for(int k=0;k<i;k++){
            printf("* ");
        }
        printf("\n");

    }
}