// **Solution (Recursive with Memoization):**
// This method might exceed the time limit as testing performed on 3/10/2022.

// The key to solve this problem is that you can only climb 1 or 2 steps each time. If it takes 4 steps to get to the top of a staircase, we can climb to either the 1th level or the 2nd level on the first climb. Respectively, we have 3 more and 2 more steps left to climb. And if we already know the total distinct ways to climb 3 and 2 steps, then the total distinct ways to climb 4 steps will be 'total distinct ways to climb 3 steps + total distinct ways to climb 2 steps.' Recursive with Memoization will help us perform this calculation.

const cache = { 0: 0, 1: 1, 2: 2 }

//Initiate a map (note 2) that stores total distinct ways of
//climbing steps of 0, 1 and 2. There are 0 way to climb to the
//top of a staircase with 0 step. There are 1 way to climb to the
//top of a staircase with 1 step. There are 2 ways to climb to
//the top of a staircase with 2 steps. The value can be accessed
//with 'cashe[n].'(note 3)

function climbStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2

//If n equals to (note 4) 1 or 2 then return the total possible
//combinations we already know from the problem itself.There are 1
//way to climb to the top of a staircase with 1 step. There are 2
//ways to climb to the top of a staircase with 2 steps. 

    if (!cache[n]) {

//'cache[n]' helps us access the staircase we have already
//climbed. If 'n' cannot (note 1) be found in 'cache,' that means
//it is a staircase we have not climbed before. Then we will
//calculate that in the step below and store it in 'cache'.

        cache[n] = climbStairs(n - 1) + climbStairs(n - 2);

//With recursion, the calculation will continue until n is equal
//to 1 or 2. 
//For n = 3,cache[3] = climbStairs(3 - 1) + climbStairs(3 - 2)
//total possible way to climb 3 steps is subtracting total ways to
//climb 2 steps by total ways to climb 1 step; that we can already
//find in cache { 0: 0, 1: 1, 2: 2 }.

//By performing 'cache[n] = X,' we can store value 'X' in the map
//with corresponding key of n. The update cache will be
//{ 0: 0, 1: 1, 2: 2, n: x }. And if we need to know how many
//distinct way we can climb a staircase with n step in the future
//calculation; we can use 'cache[n]' to get to the value 'x.'

    }
    return cache[n];

//Find the value in 'cache' with a key of n

}

// **Solution (Dynamic Programming):**

function climbStairs(n){
    const dp = new Array(n).fill(0);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;

//Create an array with n element and filled with 0.
//Initialize 'dp' with some base Cases

    for(let i=3; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2]

// Start from n=3 since we have covered the solutions up to N=2 above
// Sum the last 2 results behind me to get the current result.

    }
    return dp[n];
}