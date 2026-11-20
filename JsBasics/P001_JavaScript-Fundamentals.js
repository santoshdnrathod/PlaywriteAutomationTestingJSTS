/*

1. What is JavaScript?
----------------------

Definition: 
-> JavaScript is a high-level Dynamic programming language used to make web pages interactive and to build applications.
-> Data type is not required while declaration.


2. Are Java and JavaScript the same?
------------------------------------

No. Java and JavaScript are two different programming languages. 
Java is statically typed and commonly runs on the JVM, 
whereas JavaScript is dynamically typed and commonly runs in browsers or Node.js.


3. How to execute JavaScript You can execute JavaScript in two simple ways.
---------------------------------------------------------------------------
Method 1: Browser Console
Method 2: Using Visual Studio Code and Node.js


Examples:

Method 1: Browser Console
Ex:
console.log("Hello JavaScript"); //Hello JavaScript


Method 2: Using Visual Studio Code and Node.js
> Install Visual Studio Code.
> Install Node.js.
> Create a file named first.js.
> Write the following code:
Ex:
console.log("Welcome to JavaScript Learning");

> Open the terminal and execute:
node first.js

Expected output:
Welcome to JavaScript Learning


4. Variables in JavaScript
--------------------------

Definition: A variable is a named container used to store data.

JavaScript provides three main ways to declare variables:
- var
- let
- const


5. Difference between var, let and const:
------------------------------------------

Feature	                                var	                let	                        const
________________________________________________________________________________________________________
1. Reassignment	                        Allowed	            Allowed	                    Not allowed
________________________________________________________________________________________________________
2. Redeclaration in same scope	        Allowed	            Not allowed	                Not allowed
________________________________________________________________________________________________________
3. Scope	                            Function	        Block	                    Block
_______________________________________________________________________________________________________
4. Must initialize immediately	        No	                No	                        Yes
________________________________________________________________________________________________________

Example:

let price = 100;
price = 200;

console.log(price); //200

BUT*

const productPrice = 100;
productPrice = 200;

***This produces a TypeError because a const variable cannot be reassigned.

***Interview tip: 
Prefer const by default. 
Use let when reassignment is required. 
Avoid var in modern JavaScript unless maintaining older code.

*/



