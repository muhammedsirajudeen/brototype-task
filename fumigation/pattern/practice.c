#include<stdio.h>
void main(){
    int limit;
    printf("enter the number of rows");
    scanf("%d",&limit);

    for(int i=0;i<limit;i++){
        for(int j=0;j<2*(limit-i)-1;j++){
            printf(" ");
        }

        for(int k=0;k<=i;k++){
            printf("* ");
        }
        printf("\n");
    }
}