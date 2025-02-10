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

//Task 4 - Subscription Pricing Model 
//declaring a function that will calculate a subscription's cost based on different packages 
function calculateSubscriptionCost(plan, months, discount = 0)
{//if loop that determines the cost of your subscription based on your type of subscription
    if (plan === "Basic") { //If you have a Basic plan the cost is $10
        cost = 10
    } else if (plan === "Premium") { // If you have a Premium plan the cost is $20
        cost = 20
    } else if (plan === "Enterprise") { //If you have a Enterprise plan the cost is $30
        cost = 30
    }; 
    let totalCost = (cost * months) - discount; 
    console.log(`Total Cost: $${totalCost}`); 
    return totalCost; 
}; 
calculateSubscriptionCost("Basic", 6, 10); //test data that'll produce 'Total Cost: $50'
calculateSubscriptionCost("Premium", 12, 0); //test data that'll produce 'Total Cost: $240'

//Task 5 - Currency Conversion
//declaring a function that will conver currency and return its new converted amount
function convertCurrency(amount, exchangeRate) 
{
    let convertedAmount = amount * exchangeRate;//multiplying the amount and exchnage rate to get the converted amount 
    console.log(`Converted Amount: $${convertedAmount.toFixed(2)}`); 
    return convertedAmount; 
}; 
convertCurrency(100, 1.1); //test data that should produce a converted amount of $110.00
convertCurrency(250, 0.85); //test data that should produce a converted amount of $212.50

//Task 6 - Discount Strategy for Bulk Orders
let orders = [200, 600, 1200, 450, 800]; //declaring an array with 5 order amounts 
const applyBulkDiscount = (orders, discountFunction) => 
    { //function that will apply a 10% discount 
    let discount = orders.map(discountFunction) //applies the discount 
    console.log(`Expected Output: ${discount}`) 
    }   
applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);

//Task 7 - Business Expense Tracker
//declaring a function that will return another function to then add expenses and keep a running total
function createExpenseTracker()
    {
        let totalExpenses = 0; //declaring a variable 
        return function(expense)
        {
            totalExpenses += expense
            return totalExpenses
        };
    };
    let tracker = createExpenseTracker();
    console.log(tracker(200)); // test data that should produce $200
    console.log(tracker(150)); // test data that should produce $350

//Task 8 - Employee Promotion Evaluation 
//declaring a recursive function that will determine how many years until you reach level 10
function calculateYearsToPromotion(employeeLevel)
    {
        let years = (10-employeeLevel) * 2; //subtracts employee's level from 10 and multiply by 2 because each promotion takes 2 years
        if (employeeLevel >= 10){ 
            console.log(`Level 10 Reached`); // Will tell you if level 10 reached
        }else{
            console.log(`Years to Level 10: ${years}`); //Will tell you how many more years until Level 10 is reached
            return years; 
        }   
    };
    calculateYearsToPromotion(7); // test data expected to show "Years to Level 10: 6"
    calculateYearsToPromotion(5); // test data expected to show "Years to Level 10: 10"