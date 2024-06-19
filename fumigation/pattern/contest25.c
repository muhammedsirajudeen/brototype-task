#include<stdio.h>

void main(){
    int rows;
    printf("enter the rows");
    scanf("%d",&rows);

    for(int i=1;i<=rows;i++){
        for(int j=1;j<=i;j++){
            printf("%d",j);
        }
        for(int j=i;j>=1;j--){
            printf("%d",j);
        }
        printf("\n");

    }
}