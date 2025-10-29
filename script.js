// Create a program that checks a user’s purchase amount and applies discounts
// based on the following criteria:

// * If the total is less than one thousand, display “No discount.”
// * If the total is between one thousand and two thousand, display “Ten percent
// discount.”
// * If the total is between two thousand and five thousand, display “Twenty
// percent discount.”
// * If the total is above five thousand, display “Thirty percent discount and
// free delivery.”

// The program should prompt the user for the purchase amount and print a final
// bill summary, including the discount applied (if any).

let purchaseAmount=parseInt(prompt("Enter the purchase amount "));

if(purchaseAmount< 1000){
    console.log("No Discount.");
    console.log("Total Bill is: "+purchaseAmount);
}

else if((purchaseAmount>=1000) && (purchaseAmount<=2000)){
    console.log("Ten Percent(10%) Discount.");
    var totalAmount= purchaseAmount* (1- (10/100));
 }

else if((purchaseAmount>=2000) && (purchaseAmount<=5000)){
    console.log("Twenty percent(20%) discount.");
    var totalAmount= purchaseAmount* (1- (20/100));
 }

else if(purchaseAmount>5000){
    console.log("Thirty percent discount(30%) and free delivery.");
    var totalAmount= purchaseAmount* (1- (30/100));
 }

else{
    console.log("Plaese check and Re-enter the Amount !!!");
}
console.log("After Adding Discount Your Total Bill is:" +totalAmount);


// Build a program to calculate cinema ticket prices based on age:
// * Children below twelve years get half price.
// * Adults between twelve and sixty years get full price.
// * Senior citizens above sixty get twenty percent off.
// The program should ask for the user's age and display the actual ticket price
// after applying the appropriate discount.

let age=parseInt(prompt("Enter Your Age: "));
let ticketPrice=250;
if(age<12){
    console.log("Your Age is "+age);
    let totalPrice= ticketPrice *(1- (50/100) );
    console.log("Actual Ticket Price is Rs.250/- .")
    console.log("After Discount You Need to pay " +totalPrice+ " only");
}

else if((age>=12) && (age<=60)){
    console.log("Your Age is "+age);
    console.log("Actual Ticket Price is Rs.250/- .");
    console.log("No Discount You Need to pay " +ticketPrice+ " only");
}

else if((age>60) && (age<110)){
    console.log("Your Age is "+age);
    console.log("Actual Ticket Price is Rs.250/- .");
    let totalPrice= ticketPrice*(1-(20/100))
    console.log("After Discount You Need to pay " +totalPrice+ " only");
}

else{
    console("Please Enter the Valid Age !!")
}

// Develop a program that calculates a student's grade based on their marks out of
// one hundred:

// * If the marks are above ninety, print “Excellent – Grade A.”
// * If the marks are between seventy-five and ninety, print “Good – Grade B.”
// * If the marks are between fifty and seventy-five, print “Average – Grade C.”
// * If the marks are below fifty, print “Failed – Needs Improvement.”

// The program should also print a motivational message along with the grade.

let marks=parseInt(prompt("Enter Your Marks: "));

if((marks>90) && (marks<=100)){
    console.log("Excellent – Grade A");
}

else if((marks<=90)&&(marks>=75)){
    console.log("Good – Grade B");
}

else if((marks<=75)&&(marks>=50)){
    console.log("Average – Grade C");
}

else if(marks<50 && marks>=0){
    console.log("Failed – Needs Improvement");
}

else{
    console.log("Please Enter Valid Marks");
}

// Create a program that provides weather condition alerts based on temperature:

// * If the temperature is below ten, display “It’s freezing cold, wear a jacket.”
// * If the temperature is between ten and twenty-five, display “Cool weather, perfect for outdoor activities.”
// * If the temperature is between twenty-five and thirty-five, display “Warm day, stay hydrated.”
// * If the temperature is above thirty-five, display “It’s too hot, avoid going out in the afternoon.”

let temperature=parseInt(prompt("Please Enter Temperature"));

if(temperature < 10){
console.log("It’s freezing cold, wear a jacket");
console.log("Because, Temperature is "+temperature+" Degrees");
}

else if(temperature<=25 && temperature>=10){
    console.log("Cool weather, perfect for outdoor activities");
    console.log("Because, Temperature is "+temperature+" Degrees");
}

else if(temperature<=35 && temperature>=25){
    console.log("Warm day, stay hydrated");
    console.log("Because, Temperature is "+temperature+" Degrees");
}

else if(temperature>35){
    console.log("It’s too hot, avoid going out in the afternoon");
    console.log("Because, Temperature is "+temperature+" Degrees");
}

// Develop a program that calculates a student's grade based on their marks out of
// one hundred:

// * If the marks are above ninety, print “Excellent – Grade A.”
// * If the marks are between seventy-five and ninety, print “Good – Grade B.”
// * If the marks are between fifty and seventy-five, print “Average – Grade C.”
// * If the marks are below fifty, print “Failed – Needs Improvement.”

// The program should also print a motivational message along with the grade.

let marks=parseInt(prompt("Enter Your Marks: "));

if((marks>90) && (marks<=100)){
    console.log("Excellent – Grade A");
}

else if((marks<=90)&&(marks>=75)){
    console.log("Good – Grade B");
}

else if((marks<=75)&&(marks>=50)){
    console.log("Average – Grade C");
}

else if(marks<50 && marks>=0){
    console.log("Failed – Needs Improvement");
}

else{
    console.log("Please Enter Valid Marks");
}

// Create a program that provides weather condition alerts based on temperature:

// * If the temperature is below ten, display “It’s freezing cold, wear a jacket.”
// * If the temperature is between ten and twenty-five, display “Cool weather, perfect for outdoor activities.”
// * If the temperature is between twenty-five and thirty-five, display “Warm day, stay hydrated.”
// * If the temperature is above thirty-five, display “It’s too hot, avoid going out in the afternoon.”

let temperature=parseInt(prompt("Please Enter Temperature"));

if(temperature < 10){
console.log("It’s freezing cold, wear a jacket");
console.log("Because, Temperature is "+temperature+" Degrees");
}

else if(temperature<=25 && temperature>=10){
    console.log("Cool weather, perfect for outdoor activities");
    console.log("Because, Temperature is "+temperature+" Degrees");
}

else if(temperature<=35 && temperature>=25){
    console.log("Warm day, stay hydrated");
    console.log("Because, Temperature is "+temperature+" Degrees");
}

else if(temperature>35){
    console.log("It’s too hot, avoid going out in the afternoon");
    console.log("Because, Temperature is "+temperature+" Degrees");
}

// Design a program to check a user's eligibility for a bank loan based on their monthly income and age:

// * If the income is below twenty thousand, the user is not eligible.
// * If the income is between twenty thousand and fifty thousand, the user is eligible for a personal loan.
// * If the income is above fifty thousand, the user is eligible for both personal and home loans.

// The program should print an eligibility message accordingly.


let age=parseInt(prompt("Enter Your Age"));


if(age>18){ 
    let income=parseInt(prompt("Enter Your Income: "));
    
    if(income<20000){
        console.log("Your Not Eligible for Loan");
    }

    else if(income>=20000 && income<=50000){
        console.log("Your Eligible for Loan");
    }
    else{
      console.log("Your Eligible for both personal and home loans");  
    }

}
else{
    console.log("Your too Young.. So, Not Eligible For Loan");
}

// Design a delivery fee logic for an online food delivery service:

// * If the user’s order value is less than two hundred, display “Delivery not
// available.”
// * If the order value is between two hundred and five hundred, charge fifty as
// delivery fee.
// * If the order value is between five hundred and one thousand, charge twentyfive.
// * If the order value is above one thousand, offer free delivery.

// Additionally, if the user is a premium member, delivery should always be free.
// This task requires nested `if-else` statements within the main conditions.

let orderValue = parseInt(prompt("Enter Total Order value: "));
let isPremium="Yes";    // In real application we have check whether the account Premium or Not

if(orderValue<200 && orderValue>0){
    if(isPremium== "Yes"){
        console.log("Delivery is Available");
    }
    else{
        console.log("Delivery is Not Available");
    }
}

else if(orderValue>=200 && orderValue<500){
    if(isPremium== "Yes"){
        console.log("Delivery is Available, Free Delivery");
    }
    else{
        console.log("Delivery charges Rs.50/-");
    }
}

else if(orderValue>=500 && orderValue<1000){
 if(isPremium == "Yes"){
        console.log("Delivery is Available, Free Delivery");
    }
    else{
        console.log("Delivery charges Rs.25/-");
    }
}
else if(orderValue>=1000){
    console.log("Free Delivery...Enjoy the Order");
}

else{
    console.log("Please Enter Valid Order Value !!!");
}

// Develop a program to schedule hospital appointments based on patient age and health issue type:

// * If the issue is “Emergency,” always print “Send to Emergency Room immediately.”
// * Else if the age is below ten, route to “Pediatric Section.”
// * Else if the age is between ten and sixty, route to “General Section.”
// * Else route to “Senior Citizen Section.”

// Students should combine both condition checks logically.

let issue=prompt("Enter Emergency or not , if Not then Enter Age: ");
// let condition= issue.toLowerCase;

if(issue == "emergency"){
    console.log("Send to Emergency Room immediately.");
}

else if(parseInt(issue)<10 && parseInt(issue)>1){
console.log("Pediatric Section.");
}

else if((parseInt(issue)>=10) && (parseInt(issue)<16)){
    console.log("General Section.");
}

else{
    console.log("Senior Citizen Section.");
}

// Create a program to estimate electricity bills based on total units consumed:

// * If the units consumed are below one hundred, display “Minimum charge only.”
// * If the units consumed are between one hundred and three hundred, apply a rate for normal consumption.
// * If the units consumed are between three hundred and five hundred, apply a higher 
// rate and display energy-saving tips.

// * If the units consumed are above five hundred, display “High consumption alert” and add a penalty.

// Students must calculate the total payable amount and print it with appropriate messages.

let units=parseInt(prompt("Enter The Units: "));
let miniRate=25;
let rateNormal=50;
let rateHigh=100;
let rateHigher=150;
let penalty=250;

if(units<100 && units>0){
    console.log("Minimum charge only, You need to Pay Rs."+miniRate);
    
}

else if(units>=100 && units<300){
    console.log("Normal Consumption, You need to Pay Rs."+rateNormal);
}

else if(units>=300 && units<=500){
    console.log("Higher Consumption, You need to Pay Rs."+rateHigh);
    console.log("1. Switch OFF Fan's, TV's and Lights before Leaving Home \n2. Maintain the AC's at 24-22 Degrees \n3. Use Automatic IOT System at Home");
}

else if( units>500){
    console.log("High consumption alert!!!\nPay Penalty Rs."+ penalty+ " After Adding Penalty You Need to Pay ",(penalty+rateHigher));
}

else{
    console.log("Please Enter Valid Data..");
}

console.log("Basic Plan.");
}

Task 9

else if(usage<=5 && usage>20){
else if(usage>=5 && usage<20){
console.log("Standard Plan.");
}

else if(usage<=20 && usage>50){
else if(usage>=20 && usage<50){
console.log("Premium Plan.")
}



Task 10

console.log("Average marks from All subjects: ", ((subject1+subject2+subject3)/3));
}

else if(subject1<35 && subject2>35 && subject3>35){
else if(subject1<=35 && subject2>35 && subject3>35){
console.log("Supplementary.");
console.log("Average marks from All subjects: ", ((subject1+subject2+subject3)/3));

}

else if(subject1>35 && subject2<35 && subject3>35){
else if(subject1>35 && subject2<=35 && subject3>35){
console.log("Supplementary.");
console.log("Average marks from All subjects: ", ((subject1+subject2+subject3)/3));

}

else if(subject1>35 && subject2>35 && subject3<35){
else if(subject1>35 && subject2>35 && subject3<=35){
console.log("Supplementary.");
console.log("Average marks from All subjects: ", ((subject1+subject2+subject3)/3));

}

else if(subject1<=35 && subject2<=35 && subject3>=35){
else if(subject1<=35 && subject2<=35 && subject3>35){
console.log("Failed");
console.log("Average marks from All subjects: ", ((subject1+subject2+subject3)/3));

}

else if(subject1<=35 && subject2>=35 && subject3<=35){
else if(subject1<=35 && subject2>35 && subject3<=35){
console.log("Failed");
console.log("Average marks from All subjects: ", ((subject1+subject2+subject3)/3));

}

else if(subject1>=35 && subject2<=35 && subject3<=35){
else if(subject1>35 && subject2<=35 && subject3<=35){
console.log("Failed");
console.log("Average marks from All subjects: ", ((subject1+subject2+subject3)/3));
}