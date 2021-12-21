/*1. Copy and paste the code below into a repl.it (set to Javascript).
2. Make sure to run the program to understand what it currently outputs.
3. Write test cases and fix the code according to the expected output.
Output should be: Failed if they scored 6 or less Insufficient if they scored > 6 but less than 9. (9 included) Good if they scored > 9 but less than 14. (14 included) Excellent if they scored 15. Error if participants enter a negative number or a number outside the range supported (outside 0 - 15)*/


let grade = prompt("Dame tu grado: "); //se solicita a usuario ingresar su grado
function gradeUser(grade) {
if (grade <= 6 && grade >= 0) {
console.log("Fallaste");
}
if (grade > 6 && grade <= 9) {
console.log("Insuficiente");
}
if (grade > 9 && grade <= 14) {
console.log("Bueno");
}
if (grade == 15) {
console.log("Excelente");
}
if (grade < 0 || grade > 15) {
console.log("Error, fuera de rango");
} //Error si el usuario no ingresa un valor dentro del rango
}
gradeUser(grade); //LLamada a la funcion