#include<stdio.h>
void main(){
    int rows;
    printf("enter the rows");
    scanf("%d",&rows);

    for(int i=0;i<rows;i++){
        for(int j=i;j<rows-1;j++){
            printf(" ");
        }

        for(int k=0;k<=i;k++){
            if(k==0 || k==i || i==rows-1){
            printf("* ");

            }else{
                printf("  ");
            }
        }
        printf("\n");
    }
}