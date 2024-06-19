#include<stdio.h>
void main(){
    int rows;
    printf("enter the  rows");
    scanf("%d",&rows);
    int c=1;
    for(int i=0;i<rows;i++){
        c=1;
        for(int j=1;j<rows-i;j++){
            printf("  ");
        }
        for(int k=0;k<=i;k++){
            if(k==0 || i==0){
                c=1;
            }
            else{
                ++c;
            }
            printf("% 4d",c);
        }

        printf("\n");
    }
}