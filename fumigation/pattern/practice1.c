#include<stdio.h>
void main(){
    int limit;
    printf("enter the number of rows");
    scanf("%d",&limit);
    int ascii=65;
    for(int i=0;i<limit;i++){
        for(int j=0;j<2*(limit-i)-1;j++){
            printf(" ");
        }
        for(int k=1;k<=i;k++){
            printf("%d ",k);
        }
        printf("\n");
    }
}