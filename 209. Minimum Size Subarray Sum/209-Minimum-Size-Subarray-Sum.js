var minSubArrayLen = function(target, nums) {
    let distance = Number.MAX_SAFE_INTEGER;

//initialize the distance variable with maximum safe integer in
//JavaScript

    let left = 0;

// left pointer and right pointer defines the window. 

    let sum = 0;

//sum keep track of total value

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right]; 

//Loop (note 1) through 'nums; array and keep adding (note 3) 
//value (note2) to the 'sum' until it meets the give target 

        while (sum >= target) {

//while (note 7) sum is greater than or equal to target, keep
//searching for the smallest window (minimal length/distance) that
//has a sum of target or larger.

            distance = Math.min(distance, right - left + 1);

//the distance between start and end point of continous elements
//that adds up to the sum is 'right - left + 1'. For example, if
//given array is [2,3,1,2,4,3] and target is 7. The length of last
//two element [4,3] that adds up to 7 is 5 (right) - 4 (left) + 1
// = 2. 

            sum -= nums[left];
            left += 1;

//continue finding the minimal distance by reducing sum in amount
//of nums[left] and adding nums[right]. In given array
//[2,3,1,2,4,3] with target of 7, even though the first four 
//number [2,3,1,2] add together is already greater than 7; we 
//should keep moving one element to the right (e.g: get [3,1,2,4] 
//by reduce the '2' (nums[left]) and adding the '4'(nums[right]))
//until we get [4,3], the shortest distance that meets the target.

        }
    }
    return distance === Number.MAX_SAFE_INTEGER ? 0 : distance;

//since the distance was initialized as the maximum safe integer;
//if new distance was never found, the value will stay as the
//maximum safe interger. That means there is no such subarray
//that has a sum greater or equal to target. We return 0. If
//found, return the distance. The 'Math.min' (note 5) in above
//code made sure that the distance returned is the shortest. 

};