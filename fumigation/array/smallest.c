#include<stdio.h>

void main(){
    int size;
    printf("enter the number of size");
    scanf("%d",&size);
    int smallest=0;
    int array[size];
    for(int i=0;i<size;i++){
        printf("enter the element");
        scanf("%d",&array[i]);
    }
    smallest=array[0];
    for(int i=0;i<size;i++){
        for(int j=0;j<i;j++){
            if(array[j]<smallest){
                smallest=array[j];
            }
        }
    }

    printf("the smallest element is %d",smallest);
}