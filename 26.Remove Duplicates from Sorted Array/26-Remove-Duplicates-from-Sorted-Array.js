//Solution 1
var removeDuplicates = function(nums) {
    for (i = 0; i < nums.length; i++) {

//Loop (note 1) through 'nums' array

        if (nums[i] == nums[i+1]) {

//find the number that is equal to the next number (note 2)

            nums.splice(i, 1);

//replaces 1 element at index 4 with nothing (delete) (note 3)
//In test case [1,1,2], this step will delete the first "1" in-
//place from the array.

            i--;

//reduce index i by 1 to reset it's position then start iterating
//and return it's value

        }
    }
};

//solution 2
var removeDuplicates = function(nums) {
    let i = 0;

//set initial value of index 1 as 0

    for (let j = 0; j < nums.length; j++) {

//Loop (note 1) through 'nums' array

        if (nums[j] != nums[i]) 

//find the number at index j that is different from the number
//at index i.

            nums[++i] = nums[j];

//replace the value at index 'i+1' with the value at index j. In
//test case [1,1,2], while initial i is set as '0', value at index
//0 is '1' and value at index 2 is '2', since they don't equal, we
//increase i by 1 (++i: from '0' to '1') and then replace value at
//index 1 with '2' (value at index 2). New array will be [1,2,2],
//from this point, i increased to '1' and the loop stopped since
//there is nums[2] reaches the end of array 'nums'.

    }
    return ++i;

//increase i by 1 (note 4) to to get the total number of non-
//duplicated element. To continue the example above, once i turned
//into '1', we increase it by 1 to get "2". And that's the total
//number of non duplicated element in array [1,1,2].

};
