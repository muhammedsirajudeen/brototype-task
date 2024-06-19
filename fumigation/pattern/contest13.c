#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    int lower=97;
    int upper=65;
    int flag=0;
    int count=0;
    for(int i=0;i<rows;i++){
        for(int j=0;j<i;j++){
            if(flag==0){
                printf("%c",lower+count);
                count++;
                flag=1;
            }else{
                printf("%c",upper+count);
                count++;
                flag=0;
            }
        }
        printf("\n");
    }
}