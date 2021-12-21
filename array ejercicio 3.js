/*Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.*/

var arrayNumber3 = [1, 2, 3, 4];
function sumAndProduct(num){
console.log(num);
aux1 = aux2 = 0;
aux1 = num[0]+aux1;
aux1 = num[1]+aux1;
aux1 = num[2]+aux1;
aux1 = num[3]+aux1;
aux2 = num[0]*num[1]*num[2]*num[3];
console.log("The sum is: "+aux1+"\nThe product is: "+aux2);
}
sumAndProduct(arrayNumber3);