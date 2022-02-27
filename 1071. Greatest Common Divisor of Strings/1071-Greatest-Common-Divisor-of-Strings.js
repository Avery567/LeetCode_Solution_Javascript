// Solution (recursion):
// My first thought for getting the substring is to calculate the remainder. But I couldn't think of a good way to verify the letters from the string is in repeating state. For example, str1 = "ABABAB", str2 = "ABAB", how do we make sure str1 is not "ABCDCD" without comparing and iterating though the whole array? 'Sporkyy' from LeetCode Discussion sove this issue with one line.
var gcdOfStrings = function(str1, str2) {
      if (str1 + str2 !== str2 + str1) return '';

//This is the line I was referring to above. It made sure that
//both string has common substring and the substring repeats in
//the string (note 3)

      const gcd = (a, b) => (0 === b ? a : gcd(b, a % b));

//if length of longer string is divisible by length of shorter
//string, then the shorter string is the greatest common string
//length. If not divisible, the remainder is the greatest common
//string length. For example, given str1 = "ABCABC", str2 = "ABC",
//length of str1 is divisible by length of str1 (6/3=2), the
//greatest common string length is the shorter string 'str1'. And
//given str1 = "ABABAB", str2 = "ABAB", length of str1 is NOT
//divisible by length of str1 (6/4=1 and remainder is 2), the
//greatest common string length is the remainder 2. And the
// reatest common string length is used to extract the actual
//substring in the next step.

      return str1.substring(0, gcd(str1.length, str2.length));

//once greatest common string is found, use substring (note 2)
//to extract the substring (note 1)

};