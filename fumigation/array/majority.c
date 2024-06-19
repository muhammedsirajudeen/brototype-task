#include<stdio.h>

void main(){
    int size;
    printf("enter the size of arrays");
    scanf("%d",&size);
    int array[size];
    int frequency[100]={0};
    int majority=(int) size/2;
    printf("%d\n",majority);
    for(int i=0;i<size;i++){
        printf("enter the element");
        scanf("%d",&array[i]);
    }

    for(int i=0;i<size;i++){
        frequency[array[i]]++;
    }
    for(int i=0;i<size;i++){
        if(frequency[i]>majority){
            printf("%d ",array[i]);
        }
    }

    
}