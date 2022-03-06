// My first though is to find all possible profits and get the max profit with two for loops, but that exceeds the time limit. Key to solve this problem is understanding that stock can only be sold after it's bought. We will set the prices on day one as purchase and loop through the prices array:
// 1. If a higher price is seem on the next day, save profit made by subtracting purchase price from the higher price. Note that the profit will be constantly updated whenever a new higher profit is found.
// 2. If a lower price is seem on the next day, set it as the new puchase price. Note the purchase price variable will be constantly updated whenever a new lower price is seem.
// 3. When the loop ends, the final profit is our answer.

var maxProfit = function(prices) {
    let purchase = prices[0] 
    let profit = 0

//set initial profit as 0 and the prices on day one (note 2) as
//puchase price
     
     for(let i = 1; i < prices.length; i++){

//Loop (note 1) prices array starting on index 1 as index 0 is
//already set as purchase price.

         if(prices[i] < purchase){
             purchase = prices[i]
             
//If (note 3) a lower price is seem on the next day, set it as the
//new puchase price.

         } else profit = Math.max(profit, prices[i] - purchase)

//If a higher price is seem on the next day, save profit made by
//subtracting purchase price from the higher price.Note that the
//profit will be constantly updated (note 4) whenever a new higher
//profit is found.

     }
    
    return profit
};