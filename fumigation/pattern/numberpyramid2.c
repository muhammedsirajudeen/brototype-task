#include<stdio.h>
int main() {
    int rows, coef = 1;

    printf("Enter the number of rows: ");
    scanf("%d", &rows);

    for(int i=0;i<rows;i++){

        for(int j=1;j<rows-i;j++){
            printf("  ");
        }

        for(int k=0;k<=i;k++){
            if(k==0 || i ==0 ){
                coef=1;
            }else{
                if((coef*(i-k+1)/k)==1){
                    coef=1;
                }else{
                    coef++;

                }
            }
            printf("%4d",coef);
        }
        printf("\n");

    }
}