var backspaceCompare = function(s, t) {

    let arrayS = s.split('')
    let arrayT = t.split('')

//convert strings to arrays (note 4). This will turn "ab#c" into
//['a','b','#','c']

    let newS = []
    let newT = []

//create empty arrays to store letters from edited s and t

    for (let i = 0; i < arrayS.length; i++){

//Loop (note 1) through 'arrayS'

        if(arrayS[i] !== "#"){

//if the character is not '#'

           newS.push(arrayS[i])

//save it in the 'newS' array (note 2)

           } else newS.pop()

//if the character is '#', remove a character from array
//'newS'(note 3). For example, for array ['a','b','#','c'], 'a'
//and 'b' will be pushed to 'newS' when it gets to "#", 'b'is
//popped out from 'newS'. In the end, we will get 'newS' as
//['a','c'].

    }

    for (let j = 0; j < arrayT.length; j++){
        if(arrayT[j] !== "#"){
           newT.push(arrayT[j])
           } else newT.pop()
    }

//same concept as loop above

    if (newS.toString() === newT.toString()) {
        return true
        }

//convert array 'newS' and 'newT' to string (note 6) and return
//true if they are the same.

    return false
};