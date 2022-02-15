var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]) 

/*Sort (note 1) the array of 'intervals' by index 0 of each
element. This is an important step. If given array is 
[[2,4],[1,3]], this line of code will give us a new array of
[[1,3],[2,4]]*/

    for (let i = 1; i < intervals.length; i++) {

/*Loop (note 3) through each element in the array 'intervals'*/

        let current = intervals[i]
        let previous = intervals[i - 1]

/*Create variables so that we can compare two element: current one
and the previous one.*/

        if(current[0] <= previous[1]) {

/*Look for two arrays that overlap each other by checking if index
0 of current array is less or equal to the index 1 of previous
array. If so, two arrays overlap since we have already sorted
array 'interval' at the beginning and it's guranteed that index 0
of previous array is larger than index 0 of current array. For
example, given sorted array [[1,3],[2,4]] from above step, two
arrays overlap since 2 ('current[0]')is less than 3
('previous[1]').*/

            intervals[i] =[previous[0],Math.max(current[1],
previous[1])]

/*update 'current' array 'intervals[i]' to a new array that is
consist of smallest number from current[0] and previous[0] & the
biggest number from current[0] and previous[0] (note 4:
Math.max()). For example, with sorted array [[1,3],[2,4]], we will
get 'intervals[i]' as [1,4] */

            intervals.splice(i-1,1) 

/*remove 'previous' array with 'splice()' (note 2). Once we update
current array 'intervals[i]' from [2,4] to [1,4]. We can remove
previous array 'intervals[i - 1]' - [1,3].*/

            i -= 1
        } 
    }
    return intervals
};
