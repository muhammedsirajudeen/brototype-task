#include<stdio.h>
void main(){
    int limit;
    printf("enter the limit");
    scanf("%d",&limit);

    for(int i=limit;i>=0;i--){
        for(int j=i;j>0;j--){
            printf("*");
        }
        printf("\n");

    }


}