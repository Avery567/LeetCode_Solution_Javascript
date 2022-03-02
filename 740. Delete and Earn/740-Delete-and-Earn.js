var deleteAndEarn = function(nums) {
    const n = Math.max(...nums) + 1;

//find the greatest number in 'nums' (note 1)

    const counts = new Array(n).fill(0);

//create a 'counts' array filled with 0 (note 2). An index of a
//element represents a number in array 'nums'. Each value of the
//element indicates the count for number that appears in 'nums'
//array. For example, if 'counts' array is [0,4,2,5], that means
//there are four '1' and two '2' and five '3' in 'nums' array.

    for (const num of nums) counts[num]++;

//Loop (note 4) though array 'nums', increase value of element in
//'counts' by 1 at index 'num'.

    const dp = new Array(n).fill(0);

//create a 'dp' array filled with 0 (note 2). This will be used to
//store the max points earned at index i

    dp[1] = counts[1];

    for (let i = 2; i < n; i++) {

//Loop through (note 5) 'counts' array 

        const points = counts[i] * i;

//calculate the poins earned by multiplying the index that
//represent the number and the count of that number.  

        dp[i] = Math.max(dp[i - 2] + points, dp[i - 1]);

//Max is either the [i - 1] or [i] + [i - 2] since we have to
//delete the immediate number before/after the number we took

    }

    return dp[n - 1];

//since dp is used to store max points earned in ascending order,
//the last element of dp is the max point can be earned in array
//'nums'.

}