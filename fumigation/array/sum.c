#include<stdio.h>

void main(){
    int size;
    printf("enter the size of array");
    scanf("%d",&size);
    int array[size];
    for(int i=0;i<size;i++){
        printf("enter the element");
        scanf("%d",&array[i]);
    }
    int sum=0;
    for(int i=0;i<size;i++){
        sum=sum+array[i];
    }
    if(sum>100){
        for(int i=0;i<size;i++){
            if(array[i]%2==0){
                array[i]=-1;
            }
        }
    }else{
        for(int i=0;i<size;i++){
            if(array[i]%2!=0){
                array[i]=-1;
            }
        }
    }

    for(int i=0;i<size;i++){
        if(array[i]!=-1){
            printf("%d ",array[i]);
        }
    }
}