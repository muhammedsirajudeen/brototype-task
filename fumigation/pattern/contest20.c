#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    int middle=(int) rows/2;
    int count=1;
    for(int i=0;i<rows;i++){
      for(int j=0;j<rows;j++){
        if(j==i || j==rows-i-1 ){
            printf("%d",count);
        }else{
            printf(" ");
        }
      }
      printf("\n");  
                  if(i<=middle-1){
                count++;
            }else{
                count--;
            }
    }
}