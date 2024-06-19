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
    for(int i=0;i<size-1;i++){
        for(int j=0;j<size-i-1;j++){
            if(array[j]>array[j+1]){
                int temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
            }
        }
    }
    int newarray[size];
    int count=1;
    newarray[0]=array[0];
    for(int i=1;i<size;i++){
        if(array[i]!=array[i-1]){
            newarray[count]=array[i];
            count++;
        }
    }

    for(int i=0;i<count;i++){
        printf("%d ",newarray[i]);
    }
}