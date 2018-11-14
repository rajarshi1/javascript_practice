const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;


// Write a program to calculate the total price of your phone purchase.
var total = (PHONE_PRICE+ACCESSORY_PRICE)+(PHONE_PRICE+ACCESSORY_PRICE)*TAX_RATE;
alert(total);

// You will keep purchasing phones (hint: loop!) until you run out of bank balance.
for (i=0;i<=303.91;){}

// You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.


//After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.


//Finally, check the amount against your bank account balance to see if you can afford it or not.


// Write a function called calculateTax which takes an argument 'amount' and calculates the tax you need to pay.


// Write a function named formatAmount which returns you amount in this format '$ 132.45' make the decimal fixed to 2 places.



// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.
for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}