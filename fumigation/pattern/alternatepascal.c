#include<stdio.h>
void main(){
    int rows;
    printf("enter the rows");
    scanf("%d",&rows);
    int coef;
    for(int i=0;i<rows;i++){
        for(int j=i;j<rows-1;j++){
            printf("  ");
        }

        for(int k=0;k<=i;k++){
            if(k==0 || i==0){
             coef=1;   
            }else{
                if((coef*(i-k+1)/k)==1){
                    coef=1;
                }else{
                    coef++;
                }
            }
            printf("% 4d",coef);
        }
        printf("\n");
    }
}