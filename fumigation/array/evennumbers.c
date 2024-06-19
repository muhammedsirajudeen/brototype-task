#include<stdio.h>
void main(){
    int size;
    int count=0;
    printf("enter the size of the array");
    scanf("%d",&size);
    int array[size];
    for(int i=0;i<size;i++){
        printf("enter the elements");
        scanf("%d",&array[i]);
    }

    for(int i=0;i<size;i++){
        if(array[i]==0){
            continue;
        }else if(array[i]%2==0){
            count++;
        }
    }
    printf(" the number of even numbers in the array is %d",count);
}