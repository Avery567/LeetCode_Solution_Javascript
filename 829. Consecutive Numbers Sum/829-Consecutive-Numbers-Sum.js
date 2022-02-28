var consecutiveNumbersSum = function (n) {

    let count = 0, i = 1;

    while (n > 0){

//while (note 1) n is greater than 0

        n-=i;

//subtract i from n (note 2)

        if(n % i ==0) 

//if (n-i) is divisible (note 4) by i, a working combinaion is found

        count ++;
        i++;

//increase (note 3) count to record numbers of ways found to write
//n as the sum of consecutive positive integers. Increase i by 1
//to test out next possibility.

    }
    return count
};