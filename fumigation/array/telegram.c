#include<stdio.h>
void display(int arr[],int size){
    for(int i=0;i<size;i++){
        printf("%d ",arr[i]);
    }
}
void main(){
    int size;
    printf("enter the size of the array");
    scanf("%d",&size);
    int array[size];
    for(int i=0;i<size;i++){
        printf("enter the element");
        scanf("%d",&array[i]);
    }

    int uniquearray[100]={0};

    for(int i=0;i<size;i++){
        //special case
        if(array[i]==1){
            continue;
        }
        else if((array[i] % 5 == 0 || array[i] % 11 == 0) && uniquearray[array[i]]==0){
            array[i]=i;
            uniquearray[array[i]]++;
        }
    }

    display(array,size);
    printf("\n");
}