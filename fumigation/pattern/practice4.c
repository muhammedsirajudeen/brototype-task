#include<stdio.h>
void main(){
    int size;
    printf("enter the size of rows");
    scanf("%d",&size);
    for(int i=0;i<size;i++){
        for(int j=0;j<2*i;j++){
            printf(" ");
        }
        for(int k=0;k<size-i;k++){
            printf("* ");
        }
        printf("\n");
    }
}