#include<stdio.h>
void main(){
    int rows;
    printf("enter the rows");
    scanf("%d",&rows);
    for(int i=0;i<rows;i++){
        for(int j=0;j<rows;j++){
            if(j==0 || i==0 || i==rows-1 || j==rows-1){
                if(i%2!=0){
                    printf(" ");
                }else{
                printf("*");

                }
            }else{
                printf(" ");
            }
        }
        printf("\n");
    }
}