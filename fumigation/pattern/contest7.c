#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    int firstparameter=0;
    for(int i=rows;i>=0;i--){
        if(i%2==0){
            firstparameter=0;
        }else{
            firstparameter=1;
        }
        for(int j=1;j<=i;j++){

            printf("%d",firstparameter);
            if(firstparameter==0) firstparameter=1;
            else if(firstparameter=1) firstparameter=0;

        }
        printf("\n");
    }
}