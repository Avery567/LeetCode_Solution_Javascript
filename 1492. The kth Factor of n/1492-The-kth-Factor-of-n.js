// My first thought was to get a list of all factors and store them in a new array; then find out if kth factor exists. The solution below didn't need to new array, which improved space complexity from O(n) to O(1). 
var kthFactor = function(n, k) {
    for(let i = 1; i <= n; i++) {

//Iterating (note 1) every positive integer between 1 and n.

        if((n % i) === 0) {

//for every factor found (a factor is found when remainder is 0)
//(note 2 & 3).

            k--

//reduce the value of k

        }

        if(k === 0) return i

//if k is 0, then this is the target factor we are looking for

    }
    return -1

//otherwise return -1

};

// Time Complexity: O(n)
// Space Complexity: O(1)