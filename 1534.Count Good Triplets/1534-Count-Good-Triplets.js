var countGoodTriplets = function(arr, a, b, c) {

    let output = []

/*create an empty array to store the triplets*/

    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            for (k = j + 1; k < arr.length; k++) {

/*loop (note 2) through three letters in the given 'arr'*/

                if (
                    Math.abs(arr[i] - arr[j]) <= a &&
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c
                   ) 

/*use 'if statement' (note 4), 'Logical AND(&&)' (note 5) and
absolute value (note 3) to find the triplets meets the conditions*/

                 output.push((arr[i], arr[j], arr[k]))

/*Once triplets are found, push (note 6) it to the 'output'
array*/

            }
        }  
    }
    return output.length

/*return length (note 7) of the output array*/

};

//Solution 2

var countGoodTriplets = function(arr, a, b, c) {

    let count = 0

/*Since the problem is asking for the length and not the actual
array of the triplets. In this solution, we will use 'count'
instead of create an actual array to improve runtime and space. */

    for (i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            for (k = j + 1; k < arr.length; k++) {
                if (
                    Math.abs(arr[i] - arr[j]) <= a &&
                    Math.abs(arr[j] - arr[k]) <= b &&
                    Math.abs(arr[i] - arr[k]) <= c
                   ) 
                    count ++

/*while previous steps are the same as solution one, we will increase count (note 7) for every triplet found.*/

            }
        }

    }
    return count
};
