//Task 1 - Business Profit Calculation 
function calculateProfit(costPrice, sellingPrice, unitsSold) //declaring a function that will calculate the total profit
    {
        let profit = (sellingPrice-costPrice)*unitsSold;
        console.log(`Total Profit: $${profit}`);
        return profit;
    };
calculateProfit(20, 30, 100); //test data that should produce $1000
calculateProfit(50, 70, 200); //test data that should produce $4000

//Task 2 - Sales Tax Computation
function calculateSalesTax(amount, taxRate) //declaring a function that calculate sales tax
    {
        let salesTax = amount*taxRate;
        console.log(`Sales Tax: $${Math.floor(salesTax)}`); 
    };
calculateSalesTax(100, 0.07); //test data that should produce $7
calculateSalesTax(500, 0.1); //test data that should produce $50

