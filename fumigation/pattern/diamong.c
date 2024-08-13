#include<stdio.h>
void main(){
    int rows;
    printf("enter the pattern size");
    scanf("%d",&rows);
    for(int i=0;i<rows;i++){
        for(int j=i;j<rows-1;j++){
            printf(" ");
        }
        for(int k=0;k<=i;k++){
            if(i==0 || i==rows-1 || k==0 || k==i ){
                printf("* ");
            }else{
                printf("  ");
            }
        }
        printf("\n");
    }

    
}