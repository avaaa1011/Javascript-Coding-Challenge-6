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

//Task 3 - Employee Bonus Calculation
//arrow function 
const calculateBonus = (salary, performanceRating) => 
{
    if (performanceRating === "Excellent"){ //if employee's perfomance is excellent then they will receive a 20% bonus worth of their salary
        bonus = salary * 0.20
    } else if (performanceRating === "Good"){ //if employee's perfomance is good then they will receive a 10% bonus worth of their salary
    } else if (performanceRating === "Average"){ //if employee's perfomance is average then they will receive a 5% bonus worth of their salary
    };
    console.log(`Employee Bonus: $${bonus}`);
}
calculateBonus(5000, "Excellent"); //test data should should produce expected bonus of $1000
calculateBonus(7000, "Good"); //test data should produce expected bonus of $700