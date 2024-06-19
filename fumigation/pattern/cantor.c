#include <stdio.h>
#include <string.h>

#define MAX_LENGTH 7 // Maximum length of the Cantor set line, should be a power of 3

void generateCantorSetIterative(char* line, int length, int depth) {
    int segmentLength = length;
    for (int d = 0; d < depth; d++) {
        segmentLength /= 3;
        for (int i = 0; i < length; i += segmentLength * 3) {
            for (int j = i + segmentLength; j < i + 2 * segmentLength; j++) {
                line[j] = ' ';
            }
        }
    }
}

int main() {
    int depth = 7; // Depth of the Cantor set
    int length = MAX_LENGTH;

    // Create an array to represent the initial line with asterisks
    char line[length + 1];
    memset(line, '*', length);
    line[length] = '\0';

    // Print initial line and generate the Cantor set iteratively
    for (int i = 0; i < depth; i++) {
        printf("%s\n", line);
        generateCantorSetIterative(line, length, i + 1);
    }

    return 0;
}