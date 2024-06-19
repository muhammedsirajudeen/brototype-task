#include<stdio.h>

void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);

    for(int i=rows-1;i>=0;i--){
        int count=1;
        for(int j=i;j<rows-1;j++){
            printf(" ");
        }

        for(int k=0;k<i;k++){
            printf("%d ",count++);
        }
        printf("\n");
    }
}