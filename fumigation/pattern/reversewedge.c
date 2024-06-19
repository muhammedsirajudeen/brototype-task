#include<stdio.h>

void main(){
    int rows;
    printf("enter the size");
    scanf("%d",&rows);

    for(int i=rows-1;i>=0;i--){
        int num=64;
        for(int j=0;j<2*rows-1;j++){
            if(j<=i){

                num++;

                printf("%c",num);


            }else if(j>= 2*rows-i-2){
                if(i==rows-1 && num==rows+64){
                    num--;
                }
                printf("%c",num);
                num--;


            }
            else{
                printf(" ");
            }
        }
        printf("\n");
    }
}