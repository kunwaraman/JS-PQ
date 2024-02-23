// Q1

// Write a javaScript program to get the first n elements of an array.[n can be any
//positive number]
// for example: for array[7,9,0,-2] and n = 3  
// output [7,9,0];
// let arr =[7,9,0,-2];
// //let n = 3;
// console.log(arr.slice(0,3));


// Q 2

// Write a javaScript program to get the last n elements of an array.[n can be any
//positve  number]

// for exa,ple: for array[7,9,0,-2] ands n = 3
//print[9,0,-2]

// let arr = [7,9,0,-2];
// console.log(arr.slice(arr.length-3));

// Q 3
// Write a javascript program to check whether a string is blank or not

// let str = prompt("please enter a string");
// if(str.length==0){
//     console.log("String is Empty");
// }else {
//     console.log("String is Not empty");
// }

//Q4 Write a javaScript program to test whether the character at the given(character) index is lower case

// let str = "ApNaCoLlEgE";
// let idx =3;
// if(str[idx]==str[idx].toLowerCase()){
//     console.log("Character is lowercase");
// }else{
//     console.log("character is not lowercase");
// }

// Q5 Write a javascript program to strip leading and trailing spaces from a string

// let str = prompt("please enter a string");
// console.log(`original string = ${str}`);
// console.log(`string without spaces = ${str.trim()}`);

// Q6  Write a javaScript program to check if an eleemnt exists in an array or not
// let arr = ["hello",'a',23,64,99,-6];
// let item =64;
// if(arr.indexOf(item)!=-1){
//     console.log("element exits in array");
// }else {
//     console.log("element doesn't exits in array");
// }


// Q print all odd numbers 1 to 15

// let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// for(let i=1;i<arr.length;i++){
//     if(i%2==1){
//         console.log(i);
//     }

// }
// for(let i=1;i<=15;i=i+2){
//     console.log(i);
// }

//Q  print all even numbers (2 to 10)

// for(let i=2;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// Print the multiplication table for 5
// let n = prompt("Write your number");
// n = parseInt(n);     // ishke andar jo bhi dalenge wo integer ban jayega
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }

// for(let i=5;i<=50;i=i+5){
//     console.log(i);
// }

// Q Write a js program to delete all occurrences of element 'num' in a given array
//example:if arr=[1,2,3,4,5,6,2,3] and num = 2;
// result should be arr = [1,3,4,5,6,3]

// let arr=[1,2,3,4,5,6,2,3];
// let num = 2;
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

// Q2
// Write a JS program to find the no of digits in a number
// example:if(number==287152),count =6;

// let number = 287152;
// let count =0;

// let copy = number;
// while(copy>0){
//     count++;
//     copy = Math.floor(copy/10);
// }
// console.log(count);

// Q3 // Write a JS program to find the sum of digits in a number
// example:if(number==287152),count =25;

// let number = 287152;
// let sum =0;
// let copy = number;

// while(copy>0){
//     digit = copy %10;
//     sum = sum+digit;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);

// Q4 print the factorial of a number n
// [factorial of number n is the product of all positive integers less than or equal to a given positive integer and denoted by that integer]
// example 
/*
    7!(factorial of 7) = 1*2*3*4*5*6*7 = 5040

*/
// let n = 5;
// let fact = 1;
// for(let i =1;i<=n;i++){
//     fact = fact*i;
// }
// console.log(`fact of ${n} is ${fact}`);

// Q 5 find the largest number in an array with only positive numbers

// let arr =[2,5,10,4,2,7,1,9];
// let largest =0;
// for(let i =0;i<arr.length;i++){
//     if(arr[i]>largest){
//         largest = arr[i];

//     }
// }
// console.log(largest);