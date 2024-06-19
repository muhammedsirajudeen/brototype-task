#include<stdio.h>
void main(){
    int rows;
    printf("enter the size of rows");
    scanf("%d",&rows);
    int firstparameter=2;
    int secondparameter=3;
    int thirdparameter=(int)(rows/2)+1;
    int thircondition=1;
    for(int i=1;i<=rows;i++){
        for(int j=1;j<=rows;j++){
            if(i==1 || i==rows ){
                printf("*");
            }
            else if(i==firstparameter){
                    if(j==1 || j==2 || j==rows || j==rows-1 ){
                        printf("*");
                    }else{
                        printf(" ");
                    }

                
            }
            else if(i==secondparameter){
                if(j%2!=0){
                    printf("*");
                }else{
                    printf(" ");
                }

            }
            else if(i==thirdparameter){
                if(j==thircondition){
                    printf("*");
                    thircondition+=3;
                }else{
                    printf(" ");
                }
            }


        }
        printf("\n");
        if (i==firstparameter) firstparameter+=4;
        else if(i==secondparameter) secondparameter+=2;
    }
}