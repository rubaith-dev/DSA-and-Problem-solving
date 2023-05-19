// Best Time to Buy and Sell Stock

// You are given an array prices where prices[i] is the price of a given stock on the ith day.You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example:
// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Solution

// To calculate the maximum profit, the function iterates through the prices array and keeps track of the minimum price encountered so far (minPrice) and the maximum profit that can be obtained (maxProfit).

// It starts by assuming the first price in the array as the minimum price (minPrice) and sets the maximum profit (maxProfit) to 0.

// Then, it goes through each price in the array one by one. If a price is lower than the current minimum price, it updates the minimum price to that new lower price. This helps identify the lowest possible price to buy the stock.

// On the other hand, if a price minus the minimum price is greater than the current maximum profit, it means a higher profit can be achieved by selling at the current price. In this case, the maximum profit is updated to the difference between the current price and the minimum price.

// By the end of the loop, the function has considered all prices and determined the maximum profit that can be obtained from buying and selling the stock.

// Finally, the function returns the maximum profit.

// In summary, the code efficiently finds the best opportunity to buy and sell the stock by keeping track of the minimum price and updating the maximum profit whenever a higher profit is found.

function maxProfit(prices) {
  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
}
