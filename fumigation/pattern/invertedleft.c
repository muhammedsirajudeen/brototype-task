#include<stdio.h>
void main(){
    printf("enter the limit");
    int limit;
    scanf("%d",&limit);
    for(int i=0;i<limit;i++){
        for(int j=0;j<2*i;j++){
            printf(" ");
        }

        for (int k = 0; k < limit - i; k++) {
            printf("* ");
        }
        printf("\n");
    }
}