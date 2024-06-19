#include<stdio.h>
void main(){
    int size;
    printf("enter the size of the array");
    scanf("%d",&size);

    int array[size];
    int multiplied[size-1];
    for(int i=0;i<size;i++){
        printf("enter the element");
        scanf("%d",&array[i]);
    }
    for(int i=0;i<size;i++){
        if(i+1<size){
            multiplied[i]=array[i]*array[i+1];
        }
    }
    for(int i=0;i<size-1;i++){
        printf("%d ",multiplied[i]);
    }
}