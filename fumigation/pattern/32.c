#include<stdio.h>
void main(){
    int size;
    printf("enter the size");
    scanf("%d",&size);
    int initialparameter=4;

    for(int i=0;i<size;i++){
        for(int j=0;j<initialparameter;j++){
            for(int k=0;k<j;k++){
                printf("X");
            }
            printf("\n");
        }
    initialparameter++;
    }
}