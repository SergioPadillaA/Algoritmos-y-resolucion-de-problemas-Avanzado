/*Write a program that takes in two lists and returns the greatest number out of the two lists. Hint: call the function from Class Exercise #1 (Exercise #1 should return a single number - the greatest number in the list).*/

function maxnumber(){
    let numbersA=[3,5,7,1,6];
    let numbersB=[10,4,2,5,1];
    var maxA= Math.max.apply(null,numbersA);
    var maxB= Math.max.apply(null,numbersB);
    if (maxA > maxB){
        console.log(maxA);
    }else{
        console.log(maxB)
    }
    
}

maxnumber();
