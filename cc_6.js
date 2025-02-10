//Task 1 - Business Profit Calculation 
function calculateProfit(costPrice, sellingPrice, unitsSold) //declaring a function that will calculate the total profit
    {
        let profit = (sellingPrice-costPrice)*unitsSold;
        console.log(`Total Profit: $${profit}`);
        return profit;
    };
calculateProfit(20, 30, 100); //test data that should produce $1000
calculateProfit(50, 70, 200); //test data that should produce $4000
