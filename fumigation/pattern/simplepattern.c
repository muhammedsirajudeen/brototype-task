#include<stdio.h>
void main(){
    int limit;
    printf("enter the limit");
    scanf("%d",&limit);
    for(int i=0;i<limit;i++){
        for(int j=1;j<=i;j++){
            printf("%d ",j);
        }
        printf("\n");
    }
}