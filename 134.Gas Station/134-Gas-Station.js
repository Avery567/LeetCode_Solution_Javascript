var canCompleteCircuit = function(gas, cost) {

    let start = 0, tank = 0, total = 0

//set up a start variable to store the starting gas station's
//index if you can travel around the circuit once in the clockwise
//direction

//set up a tank variable to store remaing gas everytime we get to
//a new station, if tank is already less than 0. We will move on
//to the next starting index.

//set up a total variable, when it is positive, it means there is
//enough gas to over all the previous path.

    for (let i = 0; i < gas.length; i++){

//Loop (note 1) through each station to find the working starting
//station

        const usage = gas[i] - cost[i]

//calculation usage by subtracting the cost to get to the next
//station from added gas.

        tank += usage

//Update tank with usage data (note 4)

        if(tank < 0){
            tank = 0
            start = i + 1
        }

//if (note 5) tank is less than 0, means the starting station does
//not work. We will move on to the next starting station and reset
//the tank to 0.

        total += usage
    }

    return total < 0 ? -1 : start

//if total is less than 0 (note 3), that means there is not enough
//gas to get through all the station.But if it's more than 0,
//return the stating point that works.

};