Solution:
// It took me a while to understand the key to this solution, 'rudenjay' explaned it well on leetcode discussion section with illustrations. I attached linked below. My take away to this is skip the completed loop(s) in the given array and the answer is in the incompleted loop. And that incompleted loop can be acessed by comparing the first and last element in the array. *Senario 1: first element is smaller or equal to last element of the given array. * In this senario, we will ignore all the elements in between; no matter how many are there and what they are. Because at the end, we will take the first and last element to find out the incomplete loop and the numbers in this incomplete loop will be the numbers that are repeated the most. In a array with n = 4, if the first element is 2 and last element is 4 then the incompleted loop is [2,3,4] *Senario 2: first element is greater than last element of the given array. * we are still going to ignore the elements in between because they only help form the completed loop. And to access the incompleted loop, with same example from senario 1, we will get [4,1,2]. And because the problem want the output in ascending order, it's [1,2,4].
var mostVisited = function(n, rounds) {
    const first = rounds[0];
    const last = rounds[rounds.length - 1];

//access first and last element of the given array (note 4)

    const result = [];

    if (first <= last) {
        for (let i = last; i >= first; i--) result.unshift(i)

//This is the code for senario 1. The loop note 1 starts from the
//last element and end on the first element.The unshift() method
//(note 3) adds one or more elements to the beginning of an array
//and returns the new length of the array. That will give us an
//output in ascending order.

    } else {
        for (let i = 1; i <= last; i++) result.push(i);
        for (let i = first; i <= n; i++) result.push(i);

//These is the code for senario 2. Since the output needs to be in
//ascending order. We will store (note 2) i two difference ways.
//Because last element is smaller than the first, we will store
//the loop that starts at 1 and ends at the last element. Then
//store the loop that starts with first element and ends at n.

    }

    return result;
};


