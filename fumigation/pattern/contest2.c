#include<stdio.h>
void main(){
    int rows;
    printf("enter the number of rows");
    scanf("%d",&rows);
    int firstparameter=1;
    for(int i=0;i<rows;i++){

        for(int j=0;j<rows;j++){
            if(j==rows-firstparameter){
                for(int k=0;k<firstparameter;k++){
                    printf("%d",firstparameter);
                }
                break;
            }else{

            printf("%d",1);
            }
        }

        printf("\n");
        firstparameter++;
        
    }
}