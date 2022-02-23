var circularArrayLoop = function(nums) {

    for(let i = 0 ; i < nums.length ; i++){

//Loop (note 1) throught array 'nums'.This array maybe has more
//than one cycle that we don't know, so we need to run each
//element to check cycle. 

        let ans = [];

//create an empty array to store the index

        let dir = Math.sign(nums[i]);

//use 'dir' (note 2) to check they all positive or negative

        let j = i;

        while(nums[j] != 0 && Math.sign(nums[j]) == dir){

//while (note 3) num[j] is not 0 and it's the same direction as
//nums[i]. 

            let preJ = j;

//set a temp variable to store j

            j += nums[j];

//add the value of nums[j] to j and get an updated j. For example,
//if j is initially 1 and value of nums[j] is '2', then updated
//index j will be 3 

            j %= nums.length;

//calculate the remainder of j % nums.length (note 5)

            j += j < 0 ? nums.length : 0;

            ans.push(preJ);

//save the index to answer array (note 6)

            nums[preJ] = 0;

//if this element has been checked, change it to zero.
//if the nums[j]  == 0 , means we find this cycle and get the
//start point called j.

        }
        let pos = ans.indexOf(j);

//find j in answer array (note 7), if found then there is a cycle

        if(ans.length > 1 && pos != -1 && pos != ans.length - 1) 

//if answer array exist, j can be found in the answer array and
//the sequence's length is more than 1, return true

 return true;

    }

    return false;
};