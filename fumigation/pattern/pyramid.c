#include <stdio.h>

int main(){
    printf("enter the number of rows ");
    int limit=0;
    scanf("%d",&limit);

    for(int i=0;i<limit;i++){

        for(int j=0;j<limit-i-1;j++){
            printf(" ");
        }

        for(int k=0;k<2*i+1;k++){
            printf("*");
        }
        printf("\n");

    }

    return 0;
}