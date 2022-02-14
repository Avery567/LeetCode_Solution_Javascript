var compress = function(chars) {
    let count = 1;

    for (let i = 1; i <= chars.length; i++) {
        if (chars[i] == chars[i - 1]) {

/*start iterating from second character and compare it with the
previous character*/

            count++;

/*if same character is found, increase count by 1 (note 1)*/

        } else {
            if (count > 1) {
                let countArr = count.toString().split(''); 

/*convert count from integer to string (note 2). And "split()"
(note 3) is to make sure that when count is a two digit integer,
for example, 12, it will be split into multiple characters: "1"
and "2" then stored in the array (part of the requirement).*/

                let deletedElement = chars.splice(i - count + 1,
                                  count - 1, ...countArr); 

/*Delete duplicated elements and replace them with character count
(note 4)*/

                i = i - deletedElement.length + countArr.length;

/*reset the index to the start of new character. In text case:
["a","a","a","b","b"], the index for the three "a" are 0, 1, 2 and
index for the first "b" is 3. Once we compress all the "a" and
modify the array with the count, we will get a new array
["a","2","b","b"]*. And in this new array, the index of the first
"b" becomes 2. This solution uses "i - deletedElement.length +
countArr.length" to calculate this new index.*/

            }
            count = 1;

/*reset the count back to 1, so that counting starts again with
new character*/

        }
    }

    return chars.length;

}