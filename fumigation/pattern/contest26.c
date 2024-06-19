#include<stdio.h>

void main(){
    int rows;
    printf("enter the rows");
    scanf("%d",&rows);
    int incrementer=2;
    for(int i=1;i<=rows;i++){
        int number=i;
        for(int j=1;j<=i;j++){
            
            if(j%2==0){
                printf("*");
            }else{
                printf("%d",number);
                number+=incrementer;
            }
        }
        incrementer+=2;
        printf("\n");
        
    }
}