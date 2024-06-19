#include<stdio.h>
void main(){
    int limit;
    printf("enter the limit");
    scanf("%d",&limit);
    int firstparameter=2;
    int secondparamter=1;
    for(int i=0;i<limit;i++){
        for(int j=0;j<secondparamter;j++){
            printf("*\n");
        }

        for(int k=0;k<firstparameter;k++){
            printf("*");
        }
        printf("\n");
        if(secondparamter==1){
            secondparamter=3;
        }else{
            secondparamter=1;
        }
        firstparameter+=2;
    }
}