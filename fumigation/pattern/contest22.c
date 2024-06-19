#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    rows*=2;
    int initialparameter=1;
    int secondparameter=rows/2-1;
    for(int i=0;i<rows;i++){
        if(i==0 ){
            for(int j=0;j<rows;j++){
                printf("*");
            }
        }else{
            for(int j=0;j<secondparameter;j++){
                printf("*");
            }
            for(int j=0;j<initialparameter;j++){
                printf(" ");
            }
            for(int j=0;j<secondparameter;j++){
                printf("*");
            }
        }
        
     printf("\n");
    initialparameter++;
    secondparameter--;
    if(secondparameter==0){
        break;
    }
    }
    initialparameter=4;
    secondparameter=1;
    for(int i=rows-1;i>=0;i--){
        if(i==0 ){
            for(int j=0;j<rows;j++){
                printf("*");
            }
        }
        else{
            for(int j=0;j<secondparameter;j++){
                printf("*");
            }
            for(int j=0;j<initialparameter;j++){
                printf(" ");
            }
            for(int j=0;j<secondparameter;j++){
                printf("*");
            }
        }
        
     printf("\n");
    initialparameter--;
    secondparameter++;
    if(secondparameter==6){
        break;
    }
    }

}