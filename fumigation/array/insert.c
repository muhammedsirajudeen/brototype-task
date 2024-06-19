#include<stdio.h>
void main(){
    int size;
    printf("enter the size");
    scanf("%d",&size);
    int array[size];
    int element;
    printf("enter element to be inserted");
    scanf("%d",&element);
    int position;
    printf("enter the position to be inserted at");
    scanf("%d",&position);

    int newarray[size+1];

    for(int i=0;i<size;i++){
        printf("enter the element");
        scanf("%d",&array[i]);
    }
    int parameter=0;
    for(int i=0;i<size+1;i++){
        if(i==position){
            newarray[i]=element;
        }else{
            newarray[i]=array[parameter++];
        }
    }

    for(int i=0;i<size+1;i++){
        printf("%d ",newarray[i]);
    }
}