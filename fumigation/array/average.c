//➢ Write a program to find the average of all unique array elements
    #include<stdio.h>
    void display(int array[],int size){
        for(int i=0;i<size;i++){
            printf("%d",array[i]);
        }
    }
    void main(){
        int size;
        printf("enter the number of size");
        scanf("%d",&size);
        int array[size];

        for(int i=0;i<size;i++){
            printf("enter the element");
            scanf("%d",&array[i]);
        }

        for(int i=0;i<size;i++){
            for(int j=0;j<size-1;j++){
                if(array[j]>array[j+1]){
                    int temp=array[j];
                    array[j]=array[j+1];
                    array[j+1]=temp;
                }
            }
        }
        int newarray[size];
        newarray[0]=array[0];
        int count=1;
        for(int i=1;i<size;i++){
            if(array[i]!=array[i-1]){
                newarray[count++]=array[i];
            }
        }
        display(newarray,count);
        
        int sum=0;
        for(int i=0;i<count;i++){
            sum+=newarray[i];
        }
        printf("\n");
        printf("%d",(int) sum/count);
    }