/*Solution with explaination:
The key to solve this problem: Numbers from 0 through 9 contains
their unique letters that distinguish themselves from other
numbers. For example, "z" can only belong to 0 and "w" can only
belong to 2. This rule applies to number 0,6,2,4,8, which each has
a unique letter among the total ten numbers. And the remaining
five numbers (7,5,3,1,9) have their unique letters among
themselves as well. "S" from 7, which you can't find from number
5,3,1 and 9. Same with "F" from 5, "H" from 3, "O" from 1, "I"
from 9. (write out the digit 0 - 9 on a piece of paper with
alphabetical letters next to it for a better
virtualization/follow-along.) */

var originalDigits = function(s) {

    const arr = new Array(10).fill(0);

/*create an zero filled (note 4) array with 10 elements (note 3).
The index of the elements will represent numbers from 0 through 9
respectively.For example, the element at index 0 represents the
number 0.*/

    for (const c of s) {

/*Iterate (note 5) through the string*/

        if (c === 'z') arr[0]++

/*"z" is the unique letter from 0(zero). Once these unique letters
are found in the given string, store them at the corresponding
postion in the array above.** For example, if "z" is found,
increase the count of the element at position 0 (index 0) from 0
to 1. And if another "z" is found, increase that count from 1 to
2. Assume two "z" in a row is found at this step, we will have an
array of [2,0,0,0,0,0,0,0,0,0]*/

        else if (c === 'x') arr[6]++

/*if a "x" is found, we will increase the count for the element at
position 6.*/

        else if (c === 'w') arr[2]++

/*if a "w" is found, we will increase the count for the element at
position 2.*/

        else if (c === 'u') arr[4]++

/*if a "u" is found, we will increase the count for the element at
position 4.*/

        else if (c === 'g') arr[8]++

/*if a "g" is found, we will increase the count for the element at
position 8.*/

        else if (c === 's') arr[7]++  //6, 7 (Note these numbers)

/*if a "s" is found, we will increase the count for the element at
position 7.*/

        else if (c === 'v') arr[5]++   //5, 7

/*if a "v" is found, we will increase the count for the element at
position 5.*/

        else if (c === 'r') arr[3]++   //0, 3, 4

/*if a "r" is found, we will increase the count for the element at
position 3.*/

        else if (c === 'o') arr[1]++   //0, 1, 2, 4

/*if a "o" is found, we will increase the count for the element at
position 1.*/

        else if (c === 'i') arr[9]++   //5, 6, 8, 9

/*if a "i" is found, we will increase the count for the element at
position 9.*/

    }

    arr[7] -= arr[6];

/*REMOVE the count to avoid duplication: if there is a "six" in
the given string after performing the code above, we will have a 6
from "x" and a 7 from "s." But we should only have a 6 not 7, so
we need to remove the count at index 7 by the count at index 6
with subtraction assignment(-=) (note 1). To further explain this,
if five "x" that represents "6" are found, we will count 5 at
index 6 in the array; However, the "s" in these 5 "six" will
create 5 counts at index 7 as well since "s" represents 7. Hence,
we need to remove these 5 cound at index 7 for the count for 7 to
be correct.*/

    arr[5] -= arr[7];

/*same concerpt with line above*/

    arr[3] -= arr[0] + arr[4];

/*same concerpt with line above*/

    arr[1] -= arr[0] + arr[2] + arr[4];

/*same concerpt with line above*/

    arr[9] -= arr[5] + arr[6] + arr[8];

/*same concerpt with line above*/

    let result = "";

/*Initial an empty string to store the result*/

    for (let i = 0; i <= 9; i++) {

/*Loop (note 2) through the array "arr"*/

        for (let j = 0; j < arr[i]; j++) {

            result += i;

/* "arr[i]" will provide count for the specific index, for each j
that exists (note 6), add (note 7) the index to the string. For example, if the count for arr[6] is 8, that means there are 8 sixes. hence "66666666" will be added to the string. And this will be done for each element that represents number 0-9 in the array*/

        }
    }
    return result;
};