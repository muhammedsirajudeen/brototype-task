#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    int parameter=1;
    for(int i=1;i<=rows;i++){
        int num=i;
        for(int j=i;j<rows;j++){
            printf(" ");
        }
        for(int j=1;j<=i;j++){
            printf("%d",num);
            num++;
        }
        num-=2;
        for(int j=i-1;j>=1;j--){
            printf("%d",num);
            num--;
        }
        printf("\n");
        parameter++;
    }
}