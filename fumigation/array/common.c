//common elements in both array
//bruteforce method
#include<stdio.h>

void main(){
    int size;
    printf("enter the size of both array");
    scanf("%d",&size);
    int firstarray[size];
    int secondarray[size];

    for(int i=0;i<size;i++){
        printf("enter the elements of first array");
        scanf("%d",&firstarray[i]);
    }
    for(int i=0;i<size;i++){
        printf("enter the elements of the second array");
        scanf("%d",&secondarray[i]);
    }

    for(int i=0;i<size;i++){
        for(int j=0;j<size;j++){
            if(firstarray[i]==secondarray[j]){
                printf("%d ",secondarray[j]);
            }
        }
    }


}