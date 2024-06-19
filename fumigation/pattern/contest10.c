#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    int initialparameter=2;
    for(int i=1;i<=rows;i++){
      for(int j=0;j<initialparameter;j++){
        if(i%2!=0){
            printf("*");
        }else{
            printf("*_");
        }
      }
      if(i%2==0)             initialparameter+=2;

      
      printf("\n");

    }
}