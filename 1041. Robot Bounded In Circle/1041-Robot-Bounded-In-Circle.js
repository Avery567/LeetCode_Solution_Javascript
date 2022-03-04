// Key so solving this problem is figure out how to change directions. Coordinates will be set up as `x` and `y`. And direction Up, Right, Down, Left is respectively set up as 
// `[[0, 1], [1, 0], [0, -1], [-1, 0]]`. Note these direction is located at index 0, 1, 2, 3 and these indices will be used in the next step to indicate which direction the robot should move towards. For example, when direction is at index 2, we get [0,-1] and that means the Robot will move down by 1 (y-1). **How do we get these indices/directions?** Since robot initially stands at (0, 0) and faces north, we will declare a variable 'head' as 0 facing north. If we turn right one time from head = 0, then we get 'head + 1'. That's index 1 -> [1,0] and Robot will move to the right by 1 (x+1). In order to turn left, we have to turn right three times from head = 0, then we get 'head + 3'. That's index 3 -> [-1,0] and Robot will move to the left by 1 (x-1).mod 4 is there because we come to face the same direction when you turn 4 times.

function isRobotBounded(instructions) {
	const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];

//set up directions represent for 'Up', 'Right', 'Down', 'Left'
//respectively. We will later access these directions by their
//indices.

	let head = 0;

//Since robot initially stands at (0, 0) and faces north, we will
//declare a variable 'head' as 0 facing north.

	let x = 0;
	let y = 0;

//Coordinates is set up as `x` and `y`.
	
	for (const instruction of instructions) { 

//Loop (note1) through each letter in the given string

		if (instruction === 'G') {
			x = x + dirs[head][0];
			y = y + dirs[head][1];

//If (note 2) letter is 'G', update cordinate x and y based on the
//direction (note 3) obtained from steps below

		} else if (instruction === 'L') {
			head = (head + 3) % 4;

//if (note 2) letter is 'L', add 3 to 'head' then % 4 to turn
//left, see explanation above to see why we are adding 3 and % 4

		} else {
			head = (head + 1) % 4;

//if (note 2) letter is 'R', add 1 to 'head' then % 4 to turn
//right, see explanation above to see why we are adding 1 and % 4

		}
	}

	const isAtOrigin = (x === 0 && y === 0);
	const isHeadingNorth = head === 0
	return isAtOrigin || (! isHeadingNorth);

//return true if x and y both (note 5) equals to 0 (note 4), as
//[0,0] means Robot is at it's origin. 
};