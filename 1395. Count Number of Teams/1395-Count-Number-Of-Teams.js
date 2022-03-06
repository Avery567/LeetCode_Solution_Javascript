// Key to this solution is the number of teams that meets the condition can be calculated by finding the middle rating if the team. The count of ratings smaller than the middle rating multiplies the count of ratings greater than middle rating will give us all posible combination that meets the condition. For example, given rating [1,2,3,4], there are 4 output that meets the conditon: [1,2,3],[1,2,4],[1,3,4],[2,3,4]. When 2 is the middle rating, there are 2 numbers ('3' & '4') greater and 1 number ('1') smaller than the middle rating, 2*1 = 2 combinations that meet th econdition. And when 3 is the middle number, there are also 2 combinations. Total combination is 2 + 2 = 4. Since 0 <= i < j < k < n, the middle number can only be 2 and 3. This problem allows the combination to be ascending and descending order, so we will consider these two situation when we write code.

function numTeams(rating) {

    let solution = 0;

    //initialize solution as 0
    for (let i = 1; i < rating.length - 1; i++) {

        //Loop (ntoe 1) through 'rating' array and keep count of numbers
        //that are greater or smaller than raiting[i]. Because we are
        //locating the middle ratings, the iteration will start at 1 and
        //end at the second last number (rating.length-1)(ntoe 2) in the
        //array.
        let ascSmaller = 0, ascGreater = 0, descSmaller = 0, descGreater = 0;

        //Declare variables and set initial value as 0, these counts are
        //used to calculate the solution 
        for (let j = i + 1; j < rating.length; j++) {
            if (rating[j] > rating[i])
                ascGreater++;
            if (rating[j] < rating[i])
                descSmaller++;
        }

        //starting from the number next to middle number and end at last
        //element of the array. If the numbers are greater than middle
        //number increase (note 4) count for 'ascGreater' and
        //'descSmaller' respectively.
        for (let j = i - 1; j >= 0; j--) {
            if (rating[j] > rating[i])
                descGreater++;
            if (rating[j] < rating[i])
                ascSmaller++;
        }

        //starting from the number prior to middle number and end at first
        //element of the array. If the numbers are smaller than middle
        //number increase (note 4) count for 'descGreater' and
        //'ascSmaller' respectively.
        solution += ascSmaller * ascGreater + descSmaller * descGreater;

        //as mentioned in the explanation above, this problem allows the
        //combination to be ascending and descending order. Hence, we
        //combine (note 3) the total output for each order together.
    }

    return solution;
}