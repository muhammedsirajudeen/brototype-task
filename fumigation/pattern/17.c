#include<stdio.h>
void main(){
    int limit;
    printf("enter the limit");
    scanf("%d",&limit);
    int firstparameter=3;
    int secondparameter=1;
    int thirdparameter=3;
    for(int i=0;i<limit;i++){
        for(int j=0;j<secondparameter;j++){
            for(int k=0;k<firstparameter;k++){
                printf("*");
            }
            printf("\n");
        }

        for(int m=0;m<thirdparameter;m++){
            printf("*\n");
        }
        firstparameter+=3;
        secondparameter+=1;
    }

}