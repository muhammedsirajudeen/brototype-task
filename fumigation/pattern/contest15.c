#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    int parameter=1;
    for(int i=0;i<rows;i++){
        parameter=1;
        for(int j=0;j<i;j++){
            if(j==parameter){
                printf("^");
                parameter+=3;    


            }else{
                printf("*");

            }

        }
        printf("\n");
    }
        for(int i=rows-2;i>=0;i--){
        parameter=1;
        for(int j=0;j<i;j++){
            if(j==parameter){
                printf("^");
                parameter+=3;    


            }else{
                printf("*");

            }

        }
        printf("\n");
    }
}