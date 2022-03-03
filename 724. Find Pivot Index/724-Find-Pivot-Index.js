Solution:
// Key to the solution below is to initially sum up all elements in the given array except index 0 as sum of right elements. Meanwhile, initialize sum of left elements as 0. Then keep reducing nums[i] from 'right' element and add nums[i] from 'left' element until a balance is found.
var pivotIndex = function(nums) {

    let left = 0
    let right = 0

//initialize variables for sum of left and right elements

    for (let i = 1; i < nums.length; i++){

//loop (note 1) through 'nums' array starting from index 1

        right += nums[i]

//for each index i, add value of the element nums[i] to the
//'right' vaiable.
//sum up (note 2) all elements in the given array except index 0
//as sum of right elements.

    }

    if (right == 0) return 0

//Edge case: [2,-1,1]. If (note 3) elements starting from index 1
//add up to 0, we will return 0. Because there is no elements to
//the left of index 0.

    for (let i = 0, j = 1; j < nums.length; i++, j++){
        right -= nums[j]
        left += nums[i]   

//keep reducing nums[j] from 'right' element and add (note 2)
//nums[i] from 'left' element until the pivot index is found.

        if(left == right) return i+1

//If at index i, sum of left elements equals (note 4) to the
//right, the pivot index will be i+1 or j-1. For example, in given
//array [1,7,3,6,5,6], when we get to index i = 2, Left sum =
//nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 which equals to the
//right sum. We will return the index of the number next to 3,
//which is the first 6 in the array. 
//Index of that first 6 is 3 (i + 1).

    }

    return -1

//Return -1 if there is no index that satisfies the conditions in
//the problem statement. 

};