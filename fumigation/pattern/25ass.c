#include<stdio.h>
void main(){
    int size;
    int rows;
    printf("enter size of array");
    scanf("%d",&size);
    printf("enter the rows");
    scanf("%d",&rows);

    int array[size];

    for(int i=0;i<size;i++){
        printf("enter the element");
        scanf("%d",&array[i]);
    }
    int firstparameter=2;
    int secondparameter=3;
    int count=0;
    for(int i=0;i<rows;i++){
  

        for(int j=0;j<firstparameter;j++){
        printf("%d",array[count++]);
                if(count==size-1){
            count=0;
        }
        }
        printf("\n");
        for(int k=0;k<secondparameter;k++){
            printf("%d\n",array[count++]);
                    if(count==size-1){
            count=0;
        }
        }
        
        firstparameter*=2;
        secondparameter*=2;

}
}