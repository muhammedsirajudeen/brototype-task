#include<stdio.h>
int isPrime(int num){
    if(num<=1){
        return 0;
    }
    for(int i=2;i*i<=num;i++){
        if(num%i==0){
            return 0;
        }
    }
    return 1;
}
void main(){
    int size;
    printf("enter the size");
    scanf("%d",&size);
    int array[size];
    for(int i=0;i<size;i++){
        printf("enter the element");
        scanf("%d",&array[i]);
    }
    int newarray[size];
    int count=0;
    for(int i=0;i<size;i++){
        if(isPrime(array[i])==0){
            newarray[count++]=array[i];
        }
    }
    for(int i=0;i<size;i++){
        if(isPrime(array[i])!=0){
            newarray[count++]=array[i];
        }
    }

    for(int i=0;i<size;i++){
        printf("%d",newarray[i]);
    }



}