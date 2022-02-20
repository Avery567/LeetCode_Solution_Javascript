/*The key to solve this problem is to find the max length that contains "1" and save it in a new matrix until "0" is found and breaks the loop. Quoting an example below from "carti" on LeetCode discussion board:

This is pretty straight forward, but I will explain what's happening by setting "Cache" (a copy of given matrix) to be min of topleft, left, and top + 1.

Say we are given this:
1 1 1
1 1 1
1 1 1
first row stays same according to algo, then we're at (1,0). this stays same because it's in first column.
When we get to (1,1), we take min of top left, left, and top + 1, which is 2, so Cache now becomes
1 1 1
1 2 1
1 1 1
And we set new max to be 2.

After updating more values, Cache becomes:
1 1 1
1 2 2
1 2 1
Then, when we get to last cell, (2,2), we take min again and it becomes:
1 1 1
1 2 2
1 2 3
and new max is 3.

Result becomes 3^2 which is 9, which is answer for this example. */

//SOLUTION CODE:

function maximalSquare(matrix) {

    if(!matrix || !matrix[0]) return 0

//To deal with edge cases where an empty matrix is given. If
// 'matrix' is false/doesn't exist (note 1) return 0.

    let cache = [...matrix],

//create a copy (note 2) of given array 'matrix'

        height = matrix.length,
        width = matrix[0].length,

//define height and width of the array. Height of the array is
//the length of the array (note 3). And width of the array is the
//length of the first element of the array (note 3 & 4). For //example, matrix array shown below has width and length of 2.
//Because the length of the matrix array is 2 (there are two
//arrays nested in the matrix array). The length of the first
//array ["0","1"] is also 2, which makes up the width of the
//matrix array.
//       [["0","1"],
//        ["1","0"]]

        solution = Math.max(...matrix[0])

//solution = length of the largest square.
//set the initial value of the solution as the maximum (note 6)
//value of first array element. This is for the edge case where
//there is only one element in the matrix array. And because our
//iteration below starts from index 1 (the second element) of both
//row and column; if there is only one array in the matrix, the
//solution would be the max value of array. For example, if we
//have a matrix of [["0","1"]], the largest square that contains 1
//will be 1*1=1.

     for (let i = 0; i < matrix.length; i++) {
         solution = Math.max(solution, matrix[i][0])
     }

//This is for the edge case where there are two elements in the
//matrix array and each element is a single element array. For
//example, [["0"],["1"]]. Because our iteration below starts from
//index 1 (the second element) of both row and column; if both
//elements are single element array, the solution would be the max
//value between two elements. For example, if we have a matrix of
//[["0"],["1"]], the max of array[0] is 0 and the max of array[1]
//is one, that will give us the max between two arrays of 1. 

     for (let row = 1; row < height; row++) {

         for (let col = 1; col < width; col++) {


//start interating from second elment of second array (note 7)

             if(matrix[row][col] === "1") {
                 cache[row][col] = Math.min(cache[row-1][col],
                     cache[row][col-1],cache[row-1][col-1])+1;

//if "1" if found, then compare it with it's surrounding element
//and save minimum (note 5) of these elements plus 1 and save it
//in the new maxtrix "Cashe" (see explaination above for reason
//behind this step.

               solution = Math.max(cache[row][col], solution);

//update max solution

             }
         }
     }
    return solution **2

//the area of a square is the product of the length of each side
//with itself (note 8)

}