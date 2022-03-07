// Key to this method is compare the height of bar on the left end (index 0) and right end (index length - 1).

// If the bar on the right end is taller, start calculating water being trapped from the left end (the lower end). Because it is guaranteed that the water will be trapped at the lower level until a new height shows up that makes the left end taller than the right end.
// If the bar on the left end is taller or equal to the right end, we will calculater the water from the right end (the lower end)
var trap = function(height) {
    let leftMax = 0;
    let rightMax = 0;
    let result = 0;
    let left = 0;
    let right = height.length - 1;

//Initialize variables to keep track of starting from the left end
//(index 0) and the right end (index height.length - 1)(note 2).

    while(left < right) {

//while (note 1) left index is smaller than right index, loop
//continues.

        leftMax = Math.max(leftMax, height[left]);
        rightMax = Math.max(rightMax, height[right]);

//Max height (note 5) of left and right end bar will be updated as
//the index updates.

        if(height[left] < height[right]) {
            result += leftMax - height[left++];

//If the bar on the right end is taller, get the amount of trapped
//water by substracting height of next bar from current left max
//height. For example, give height [4,2,0,3,2,5], right bar '5' is
//taller than left bar '4'; it is guaranteed that the water will
//be trapped between these two bars until a new height shows up
//that makes the left end taller than the right end. Since all
//bars in between are less than 4 in this case. The left max
//remains at 4 and left index continue moves to the right
//(left++)(note 4); we will be adding (note 6) the total of 
//'4-2', '4-0','4-3','4-2' to our 'result' to get amount of
//trapped water. 

        } else {
            result += rightMax - height[right--];

//If the bar on the left end is taller or equal to the right end,
//we will calculater the water from the right end (the lower end).
//And move index towards left (right--) (note 3).

        }
    }
    return result;
};