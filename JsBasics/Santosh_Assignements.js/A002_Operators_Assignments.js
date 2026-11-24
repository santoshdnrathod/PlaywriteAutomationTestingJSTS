/*
Assignments On Operators
=============================
Guess the output?
---------------------
1.console.log(1 + "2" + 3); //123
2.console.log(1 + 2 + "3"); // 33
3.console.log("5" * true); //5
4.console.log(10 > 5 > 1); // true
5.let a = 2; 
    let b = a++ + ++a; // b=2+4
    console.log(a, b); // 4,6

6.let a = 3;
console.log(a++ + a++ + ++a); // 3+4+6

7.console.log(5 * 2 == "10"); true

8.
let x = 1;
let y = ++x + x++ + x;  // 2 + 2 + 3
console.log(x, y);  // 3, 7

9.console.log(10 > 5 && 20 < 30); // true

10.console.log(null || undefined || "Playwright"); //
*/

//Answers:

console.log(1 + 2 + "3"); // 33

console.log("5" * true); //5

console.log(10 > 5 > 1); //(true > 1) // false


let a = 2; 
    let b = a++ + ++a; // b=2+4=6
    console.log(a, b); // 4,6
 
let c = 3;
console.log(c++ + c++ + ++c); // 3+4+6=13

console.log(5 * 2 == "10"); //true (LHS==RHS)


let x = 1;
let y = ++x + x++ + x;
console.log(x, y); //3,7

console.log(10 > 5 && 20 < 30); //true

console.log(null || undefined || "Playwright"); //Playwright