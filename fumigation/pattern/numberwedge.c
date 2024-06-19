#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    for(int i=0;i<rows;i++){
        int num=0;
        for(int j=0;j<2*rows;j++){
            if(j<=i){
                num++;
                printf("%d",num);
            }
            else if( j>= 2*rows-i-1){
                printf("%d",num);
                num--;
            }
            else{
                printf("*");
            }
        }
        printf("\n");
            }
}