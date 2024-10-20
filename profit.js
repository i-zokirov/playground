/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minIndex = 0; // Initialize minIndex to the first element's index
    let minValue = prices[0]; // Initialize minValue to the first element's value

    let maxIndex = 0;
    let maxValue = 0

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minValue && ( prices[i] > maxValue && i > minIndex || maxValue <= 0 || prices[i] === 0 )) {
            minValue = prices[i];
            minIndex = i;
        }

        if(prices[i] > maxValue && i > minIndex){
            maxValue = prices[i]
            maxIndex = i
        }
    }

    if(maxIndex > minIndex){
        return maxValue - minValue
    } else {
        return 0
    }

   
};

const prices = [7,1,5,3,6,4]
const prices2= [2,4,1]

console.log(maxProfit(prices2))