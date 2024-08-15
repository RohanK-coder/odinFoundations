const heading = document.querySelector("#heading");
heading.setAttribute("style","color:red");
const user = prompt("Enter your name ");
const userAge = prompt("Enter your age");

function makeUser(name,age){
    return {
        name:name,
        age: age,
    }
}
const array = [5,6,7,8,9,10];
console.log(makeUser(user,userAge));
console.log(array.map(num => num+1)
                 .filter(num=>num%2==0)
                 .reduce((accumulator,currentValue)=>{
                    return accumulator*currentValue 
                },1));