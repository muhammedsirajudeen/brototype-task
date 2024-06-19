#include<stdio.h>
void main(){
    int size;
    printf("enter the size");
    scanf("%d",&size);
    int array[size];
    for(int i=0;i<size;i++){
        printf("enter the element");
        scanf("%d",&array[i]);
    }

    int frequency[size]; // Initialize frequency array with zeros
    for(int i=0;i<size;i++){
        frequency[i]=0;
    }
    for(int i=0;i<size;i++){
        frequency[array[i]]++;
    }
    for(int i=0;i<size;i++){
        if(frequency[i]==2){
            printf("%d",i);
        }
    }
}