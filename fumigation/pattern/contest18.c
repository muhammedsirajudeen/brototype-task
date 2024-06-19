#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);

    for(int i=0;i<rows;i++){
        int count=i;
        for(int j=i;j<rows-1;j++){
            printf(" ");
        }

        for(int j=i;j>=0;j--){
            printf("%d",count);
            count--;
        }
        count+=2;
        for(int j=0;j<i;j++){
            printf("%d",count);
            count++;
        }
        printf("\n");
    }
}