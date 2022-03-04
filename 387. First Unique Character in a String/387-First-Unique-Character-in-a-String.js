var firstUniqChar = function(s) {

    let hash = {}

//Intialize a hash table (note 6) that allows us to save data as
//such: {character1:count1, character2:count2, character3:count3}

    for(let i = 0; i < s.length; i++){

//Loop (note 1) through string 's' and save character and count
//into the hashtable created above

    hash[s.charAt(i)]? hash[s.charAt(i)]++ : hash[s.charAt(i)] = 1

//if such character exist, increase count by 1, if not (note 7),
//let count equal to 1. 's.charAt(i)' gives us the
//character at index i and 'hash[character]' will point to the
//count of that character.

    }

    for(let i = 0; i < s.length; i++){

//Loop (note 1) through the string once more time to identify the
//count for each letter that is now stored in 'hash'

        if(hash[s.charAt(i)] == 1) return i

//if (note3)count of character at (note 4) index i has count equal
//(note5) to 1, return the index. 's.charAt(i)' gives us the
//character at index i and 'hash[character]' will point to the
//count of that character.

    }

    return -1

//if such index doesn't exist, return -1

};