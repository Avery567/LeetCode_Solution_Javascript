// To solve this problem:

// Address the edge case where numerator is 0
// Accese the sign ('+' or '-') of final result
// Get the digit(s) on the left of the decimal point
// Get the 

var fractionToDecimal = function(numerator, denominator) {
    if(!numerator) return '0';

//if numerator(note 1)0 is 0 return 0. 

    let str = '';

//initiate an empty string

  if(Math.sign(numerator) !== Math.sign(denominator)) str += '-';

//Add (note 4) '-' to the string if the sign (note 2) for
//numerator and denominator is different (note 3)

    const numer = Math.abs(numerator)
    const denom = Math.abs(denominator)

//Obtain the absolute value (note 5) for the numerator and
//denominator. So that we are working with positive integers in
//below process. The sign of the output is already decided on the
//step above.

    str += Math.floor(numer/denom);

//Find the largest integer less than or equal to a given number
//(the number on the left of the decimal point) and add(note 4) it
//to the string. For exmaple, give [5,2], 5/2 = 2.5, 
//Math.floor (5/2) is 2. We will add '2' to the string.

    let rem = numer%denom;

//access the remainder (note 7)of numerator devided by denominator

    if(!rem) return str;

//if there is no (note 1) remainder, the output is a while number,
//return string.

    str += '.'

//If there is remainder, that means output will have decimal
//point. Add (note 4) '.' to the string.

    const map = new Map();

//Create map (note 8) to store remainders, which will help us
//access repeating numbers after the decimal points.

    while(rem !== 0) {

//start calculating the digit(s) after the dicimal point until
//remainder is 0.

        map.set(rem, str.length);

//Update map (note 9) and set new remainder as key and new
//str.length as value. The length of string here will be used in
//case where there are repeating digits after decimal point; to
//insert '()' around repeating digits.

        rem *= 10;
        str += Math.floor(rem/denom);
        rem %= denom

//This is an important step to access the numbers after the
//decimal point.For example, 1/8 = 0.125. To access the '1' and
//add it to the string, we 
//1. multiply the numberator 1 by 10; then divide it by 8; the
//result is 1*10/8 = 1.25. Use Math.floor (note 6) to access the
//'1' on the left of the decimal point. 
//2. We have a remainder of 2 from 10 devided by 8 above. Repeat
//the process to get 2*10/8 = 2.5. Use Math.floor (note 6) to
//access the '2'.
//3.We have a remainder of 4 from 20 devided by 8 above. Repeat
//the process to get 4*10/8 = 5. Use Math.floor (note 6) to access
//the '5'.
//4.Combine the three steps above, we have '125' which is what we
// need to get the final output of '0.125.'

        if(map.has(rem)) {

//This is how we find the repeating digits:
//As we calculate the remainder from steps above, we are also
//saving remainders in the 'map'. Given [4,333], we will have a
//map that looks like below:
//{ [4 ,2],   //  At index 2 of 'str', 4/333 => remainder is 4
//  [40,3],   //  At index 3 of 'str', 40/333 => remainder is 40
//  [67,4] }  //  At index 4 of 'str', 400/333 => remainder is 67
//Then again, at index 5 we will meet a remainder of 4 from
//670/333, this is when we know we find the repeating digit and it
//starts at index 5.

            const idx = map.get(rem);

//Get (note 11) the index that can help us locate the
//repeating digit and it will be where we insert the '()'. In case
//of [4,333] from above, the first remainder we will find in the
//'map' is 4, which has a value of '2'. That means the numbers
//from index 2 through 4 will repeat at index 5 though 7 and so
//on.

            return str.slice(0, idx) + `(${str.slice(idx)})`; 

//Current 'str' is '0.012', index 0 though 1 (2 is excluded) is
//sliced off (note 12). And starting from index 2, we add "()"
//around it. Now we have '0.' + '(012)' which is '0.(012)'.

        }
    }
    return str;
};