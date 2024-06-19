#include<stdio.h>

void main(){
    int rows;
    printf("enter the rows");
    scanf("%d",&rows);
    int incrementer=1;
    int counter=1;
    for(int i=0;i<rows;i++){
        counter=1;
        for(int j=0;j<rows-incrementer;j++){
            printf("1");
        }
        for(int j=0;j<incrementer;j++){
            printf("%d",counter++);
        }
        incrementer++;
        printf("\n");
        
    }
}