#include<stdio.h>
void main(){
    int limit;
    printf("enter the limit");
    scanf("%d",&limit);
    int count=1;
    for(int i=0;i<limit;i++){
        for(int j=0;j<i;j++){
            printf("%d ",count++);
        }
        printf("\n");
    }
}