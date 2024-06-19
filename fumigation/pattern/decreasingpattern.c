#include <stdio.h>

int main() {
    int rows, spaces;

    printf("enter the number of rows");
    scanf("%d",&rows);
    for(int i=65;i<65+rows;i++){
        for(spaces=i;spaces<rows+64;spaces++){
            printf("  ");
        }

        for(int j=65;j<=i;j++){
            printf("%c ",j);
        }
        for(int k=(i-1);k>=65;k--){
            printf("%c ",k);
        }
        printf("\n");
    }

    return 0;
}
