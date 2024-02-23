// 1 Create a number variable num with somevalue.Now,print “good” if the number is divisible by 10 and print “bad” if it is not.
const num =20;
if(num%10==0){
    console.log("Good");
}else{
    console.log("Bad");
}

//  2 Take the user's name & age as input using prompts
// then return back the following statement to the user as an alert(by substituting their name and age)
// name is age years old
//[use template literals to print this sentence]
let name = prompt("please enter your name");
let age = prompt("please enter your age");

alert(`${name} is ${age} years old.`);

// 3 Write a switch statement to print the months in a quarter.
//Months in Quarter 1: january,February,March
//Months in quarter 2:April,May,june
//Months in Quarter 3:July,August,September
//Month in Quarter 4:October,November,December
//[use the number as the case value in switch]

let quarter = 1;
switch(quarter){
    case 1 : console.log("Janaury,February,March");
        break;
    case 2 : console.log("April,May,June");
        break;
    case 3 : console.log("July,August,September");
        break;
    case 4 : console.log("October,November,December");
        break;
    default : console.log("Not A Quarter!");    
}

// 4 A string is  a golden string if it starts with the character 'A' or 'a' and has a total
//length greater than 5.
  // for a given string print if it golden or not

let str = "apples";
if((str[0]=='a'||start[0]=='A') && (str.length>5)){
    console.log("golden string");
}else {
    console.log("not a golden string");
}

// 5 write a program to find the largest of 3 numbers
let a = 5;
let b =18;
let c = 13;

if(a>b){
    if(a>c){
        console.log(a,"is largest");
    }else {
        console.log(c,"is largest");
    }
}else {
    if(b>c) {
        console.log(b,"is largest");
    }else {
        console.log(c,"is largest");
    }
}

// 6 write a program to check if 2 numbers have the same last digit.
// Eg 32 and 47852 have same last digit i.e, 2

let num1 = 32;
let num2 = 47852;

if((num1%10)==(num2%10)){
    console.log("numbers have the same last digit which is",num1%10);
}else {
    console.log("numbers don't have the same last digit");
}
