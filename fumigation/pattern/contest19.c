#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    for(int i=0;i<rows;i++){
        for(int j=i;j<rows-1;j++){
            printf(" ");
        }
        for(int j=0;j<i;j++){
            if(j==0 || j==i-1){
                printf("* ");
            }else{
                printf("  ");
            }
        }
        printf("\n");
    }
    for(int i=rows-2;i>=0;i--){
        for(int j=i;j<rows-1;j++){
            printf(" ");
        }

        for(int j=0;j<i;j++){
            printf("* ");
        }
        printf("\n");
    }
}