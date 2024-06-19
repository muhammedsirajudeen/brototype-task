#include<stdio.h>
void main(){
    int rows;
    printf("enter the pattern size");
    scanf("%d",&rows);
    int count=1;
    for(int i=0;i<rows;i++){
        for(int j=i;j<rows-1;j++){
            printf(" ");
        }
        for(int k=0;k<=i;k++){
            printf("%d ",count++);
        }
        printf("\n");
        count=1;
    }
    for(int i=rows-2;i>=0;i--){
        for(int j=i;j<rows-1;j++){
            printf(" ");
        }
        for(int k=0;k<=i;k++){
            printf("%d ",count++);
        }
        printf("\n");
        count=1;
    }
    
}