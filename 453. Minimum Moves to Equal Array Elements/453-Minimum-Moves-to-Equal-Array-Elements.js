function minMoves(nums) {
    let sum = nums[0];
    let min = nums[0];
  
  //Initialize both 'sum' and 'min' variable as first number (note2)
  //in the array
  
    for (let i = 1; i < nums.length; i++) { 
  
  //Loop (note 1) through 'nums' array and find the total # of
  //blocks and min tower height
  
      if (nums[i] < min) min = nums[i];
  
  //if an element if found to be smaller than current 'min', then
  //replace current value of 'min' to that smaller element found.
  //To find the min tower height.
  
      sum += nums[i];
  
  //add value to every element to 'sum' to get sum of all
  //element(total # of blocks).
  
    }
  
    return sum - (nums.length * min);
  
  //# blocks removed = total # blocks - (# towers * min height) <--
  //refer to explation above regarding removing blocks
  
  };