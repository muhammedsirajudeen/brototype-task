#include<stdio.h>
void main(){
    int size;
    printf("enter the size of the array");
    scanf("%d",&size);
    int array[size];
    for(int i=0;i<size;i++){
        printf("enter the element");
        scanf("%d",&array[i]);
    }

    for(int i=0;i<size;i++){
        if(array[i]%5==0 && i+2<size ){
            printf("%d",array[i+2]);
        }
    }

}