#include<stdio.h>

void display(int array[],int size){
    for(int i=0;i<size;i++){
        printf("%d",array[i]);
    }
}

void main(){
    int size;
    printf("enter the size of both arrays");
    scanf("%d",&size);
    int array[size];
    int secondarray[size];
    for(int i=0;i<size;i++){
        printf("enter the elements of first array");
        scanf("%d",&array[i]);
    }

    for(int i=0;i<size;i++){
        printf("enter the elements of second array");
        scanf("%d",&secondarray[i]);
    }

    for(int i=0;i<size;i++){
        int temp=array[i];
        array[i]=secondarray[i];
        secondarray[i]=temp;
    }
    printf("\n first array\n");
    display(array,size);
    printf("\n second array\n");
    display(secondarray,size);
}