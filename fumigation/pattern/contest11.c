#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    int flag=0;
    for(int i=rows-1;i>=0;i--){
        flag=0;
        for(int j=0;j<2*rows-i-1;j++){
            printf(" ");
        }
        for(int k=1;k<=i;k++){
            if(flag==0){
                printf("*");
                flag=1;
            }else{
                printf("$");
                flag=0;
            }
        }
        printf("\n");
    }
}