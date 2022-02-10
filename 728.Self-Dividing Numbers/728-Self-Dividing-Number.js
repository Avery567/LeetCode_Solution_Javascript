var selfDividingNumbers = function(left, right) {

    let result = []

/*Declare an empty array with square brackets*/

    for (i = left; i <= right ; i++) {

/*Loop through each element in the array (see note 1)*/

        isSelfDividing(i)? result.push(i) : result; 

/*Use helper function (note 3) and conditional operator(note 2)

to push (note 4) desired result into the array*/

    }
    return result;
};

var isSelfDividing = function(n) {

/*This is the helper function (note 3)*/

    let number = n.toString();

/*convert n to a string (note 5)*/

    for (let digit of number) {

/*Iterate over the string (note 6)*/

        if(number % digit !==0 || digit === 0) return false;

/*If the remainder (note 7) of number mod by digit is not zero,
that means digit is not divisible by the number. Hence, the number
is not self-dividing. And division by zero is undefined*/

    }

    return true;

};


// Solution 2

var selfDividingNumbers = function(left, right) {

    let result = [];

/*create output array same as in solution 1*/

    for (i = left; i <= right; i++) {

/*Loop through each element in the array (see note 1)*/

        if (isSelfDivisible(i)) result.push(i)

/*Use helper function (note 3) to push (note 4) desired result
into the array*/

    }
    return result;
}

var isSelfDivisible = function(number) {

    let temp = number

/*create a temp variable*/

    while (temp > 0){

        let lastDigit = temp % 10

/*Use this line to obtain last digit of the number*/

        if(number % lastDigit !== 0) return null

/*Check if last digist is divisible by the number*/

        temp = Math.floor(temp / 10)

/*Now we test if second last digit is divisible
Note that this line will pass 128 without 0 to the next 
iteration. For example: Math.floor(128 / 10) = 12 (note 8).
Now that temp is 12. We can use temp % 10 again to get
second last digit 2 for another divisible testing.
*/

    }
    return number;
}