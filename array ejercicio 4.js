/*ar student1Courses = ['Math', 'English', 'Programming'];
var student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.*/

var student1Courses = ['Math', 'English', 'Programming'];
var student2Courses = ['Geography', 'Spanish', 'Programming'];

console.log(student1Courses);
console.log(student2Courses);

function comparation(string1, string2){
    if(string1[0]===string2[0])
        alert(string1[0]);
    if(string1[1]===string2[1])
        alert(string1[1]);
    if(string1[2]===string2[2])
        alert(string1[2]);
}

comparation(student1Courses,student2Courses);
