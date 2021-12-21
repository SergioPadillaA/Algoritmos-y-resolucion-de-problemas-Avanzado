/*Write a program that takes in an array of numbers and returns the largest number in the list. Example: The given array is [3, 5, 7, 1, 6] The largest number is 7.*/

function maxnumber(){
    let numbers=[3,5,7,1,6];
   
    var Max= Math.max.apply(null,numbers);
    console.log(Max);
}

maxnumber();
