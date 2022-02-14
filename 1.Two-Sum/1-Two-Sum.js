//Solution 1 (nested loop) with Explanation:

var twoSum = function(nums, target) {

    for (i = 0; i < nums.length; i++) {

/*Loop through nums array (note 1) from position 0*/

        for (j = i + 1 ; j < nums.length; j++)

/*Loop through nums array (note 1) from position 1 and add up
every possible pair of numbers until they add up to target number.
*/

            if(nums[i] + nums[j] == target)

/*For example, if nums = [2,3,4], the possible pairs would be 2+3,
2+4 (starting from first number 2 add the next numbers). That was
all pairs with the number 2. Then pair 3+4 (starting from second
number 3, add the next numbers).*/

                return [i, j]

/*return indices for the pairs found*/

    }
};

//Solution 2 (object) with Explanation:

var twoSum = function(nums, target) {
    let hash = {};

/*create a object (note 2) and utilize object's property value and
property key*/

    for(let i = 0; i < nums.length; i++) {

/*Loop through "nums" array and find desired value to store in the
"hash" object */

    const n = nums[i];

/*create a variable n to represent each number in the "nums"
array*/

    if(hash[target - n] !== undefined) {

/*find the complementary pair for "n" in "hash" object*/

       return [hash[target - n], i];

/*if found, return index of both the complementary pair and "n".
We can access object properties using a square bracket
object[property]*/

    }
    hash[n] = i;

/*If complementary pair for "n" is not found in "hash", store n
and its index in "hash". 

Example Input: nums = [2,7,5,11]; target = 9. The first "n" is 2
and since "hash" is initially empty, we won't find the
complementary pair（target - n）= 7 in there. Hence, we store it in
"hash" with the index of the number 2, which is 0. And now our
"hash" is { '7', 0 } (Key is'7' and value is 0 in this object).
Then we exam if complementary pair of the second number 7 can be
found in the "hash". Since we just stored 7 in the previous step,
it will be found in this step. Therefore, we return the value that
has key of '7' in the object: hash[target - n]. And the index of
second number '7':[i]. That is [0,1]. And this is the output of
this example*/

      }
}