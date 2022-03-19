// Use a map to count the frequencies of the numbers in the array.
// Remove the numbers with the smallest count first.

var findLeastNumOfUniqueInts = function(arr, k) {
    let frequency = {}, uiqueInt=0

//Initial a map to count the frequencies of the numbers in the
//array. Also initial "uniqueInt" to keep count of unique integers. 

    for(let i = 0;i < arr.length;i++){

//Loop (note 1) through each interger in the array

        if(!frequency[arr[i]]){

//If the ith element in the array does NOT exsit in the map

            frequency[arr[i]] = 0

//initial the count for the ith element in the map

            uiqueInt++

//When new element is added in the map, increate the count of the
//unique element.

        }
        frequency[arr[i]]++

//If the ith element exists in the map, increase the frequency of
//that element.

    }

        let sortedFreq = Object.entries(frequency).sort((a,b)=>
{return a[1]-b[1]})

//sort the frequency map created from steps above in ascending
//order

    for(let i = 0;i < sortedFreq.length;i++){

//Loop through the sorted frequency map

        if(k >= sortedFreq[i][1]){

//If k is greater or equal to the frequency of the element

            k=k-sortedFreq[i][1]

//Subtract the frequency of that element from k. That means we
//made k moves to remove all of that element entirely.

            uiqueInt--

//Once removed, reduce the count for unique interger

        }else{
            break;

//if update k is less than frequency than any of the remainding
//element, break out of the loop. That means the element will
//still exist in the array even if we make k moves.

        }
    }
    return uiqueInt

//Return the number of unique interger(s).

};