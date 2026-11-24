/*
Datatype Assignments
===============================

1. Identify the datatype
Create variables for the following values and identify their datatype:
- 25
- "JavaScript"
- true
- undefined
- null
- 123.45
- 12345678901234567890n
- Symbol("id")
Task: Print both the value and its datatype.

*/

// number value and datatype
console.log("******** Number Datatype *********");


let num = 25;
console.log(`Value assigned by "num" variable is:->`+num); //25
console.log(`DataType stored in "num" variable is:->`+typeof num); //number


// string value and datatype
console.log("******** String Datatype *********");


let lang1 ="JavaScript";
let lang2 ='Python Language';
let lang3 =`Data Structure`;

console.log(`Value of string is:` +lang1); //JavaScript
console.log(`Typeof of string is:` +typeof lang1) //string
console.log(`Value of lang1 is:` +lang2); //Python Language
console.log(`Typeof of lang2 is:` +typeof lang2) //string
console.log(`Value of string is:` +lang3); //Data Structure
console.log(`Typeof of lang3 is:` +typeof lang3) //string



// boolean value and datatype
console.log("******** Boolean Datatype *********");

let isLoggedIn=true;

console.log("Assigned value of isLoggedIn is:  "+isLoggedIn); // true
console.log("Datatype is: "+typeof isLoggedIn);//boolean

// undefined value and its datatype
console.log("******** undefined Datatype *********");

let employeeName;
console.log("Assigned value of employeeName is:  "+employeeName); // undefined
console.log("Datatype is: "+typeof employeeName);//undefined

// After define the value
employeeName="Santosh";
console.log("After re define, Assigned value of employeeName is:  "+employeeName); // string
console.log("Datatype is: "+typeof employeeName);//string


// Null value and its datatype
console.log("******** null Datatype *********");

let studName=null;
console.log("Assigned value of studName is:  "+studName); // null
console.log("Datatype is: "+typeof studName); //object

// Float value and its datatype
console.log("******** Float Datatype *********");

let salary=123.45;
console.log("Assigned value of salary is:  "+salary); // 123.45
console.log("Datatype is: "+typeof salary); //number


// bigint value and its datatype
console.log("******** Float Datatype *********");

let empId=12345678901234567890n;
console.log("Assigned value of empId is:  "+empId); // 12345678901234567890
console.log("Datatype is: "+typeof empId); //bigint



// symbol value and its datatype
console.log("******** symbol Datatype *********");

let id = Symbol("id");
console.log(id); //Symbol(id)
console.log(typeof id);//symbol


/*

2. Create Variables of Different Datatypes
Create one variable for each of the following datatypes:
- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol
- Object
Print all variables

*/

// 1. String
let studentName = "Santosh";
console.log("String:", studentName); //Santosh

// 2. Number
let employeeId = 101;
console.log("Employee Id:", employeeId); //101

// 3. Boolean
let isActive = true;
console.log("Boolean:", isActive); //true

// 4. Undefined
let department;
console.log("Undefined:", department);//undefined

// 5. Null
let manager = null;
console.log("Null:", manager); //null

// 6. BigInt
let transactionId = 12345678901234567890n;
console.log("BigInt:", transactionId); //12345678901234567890n

// 7. Symbol
let uniqueId = Symbol("employeeId");
console.log("Symbol:", uniqueId); //symbol

// 8. Object
let employee = {
    name: "Santosh",
    age: 35,
    role: "QA Engineer"
};
console.log("Object:", employee); //Object: { name: 'Santosh', age: 35, role: 'QA Engineer' }


/*
 3. Predict the Output
Without running the code, predict the output:
console.log(typeof 100); ->number
console.log(typeof "100");->string
console.log(typeof true);->boolean
console.log(typeof undefined);-->undefined
console.log(typeof null);-->object
console.log(typeof 100n);-->bigInt

Then execute the program and compare your answers.
*/
console.log(typeof 100); //number
console.log(typeof "100"); //string
console.log(typeof true); //true
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof 100n); //bigint


/*
4. Student Information
Create variables to store:
- Student name
- Student age
- Student percentage
- Whether the student has completed the course
- Student's grade
Use appropriate JavaScript datatypes.

*/


// Student name - String
let STName = "Santosh";

// Student age - Number
let studentAge = 21;

// Student percentage - Number
let studentPercentage = 85.5;

// Course completion - Boolean
let courseCompleted = true;

// Student grade - String
let studentGrade = "A";


/*
5.Create two variables:
let userName;
let userEmail = null;
Print both values and their datatypes.
Then answer:
1. What is the difference between undefined and null?
2. What does typeof userName return?
3. What does typeof userEmail return?
4. Why is typeof null considered unusual in JavaScript?

*/

let userName;
console.log("User Name:", userName);  //undefined
console.log("User Name Type:", typeof userName); //undefined

let userEmail = null;
console.log("User Email:", userEmail); //null
console.log("User Email Type:", typeof userEmail); //object

/*

Question 1: Difference between undefined and null
Correct concept

Answer:
- undefined means variable is declared without assigning a value.
- null means variable is assigned an empty value.

Question 2: typeof userName Needs correction

Answer: typeof returns primitive datatype.
        typeof retrun undefined

Question 3. What does typeof userEmail return?
--> typeof userEmail should return object

Question 4. Why is typeof null considered unusual in JavaScript?
--> it is designed defect when JavaScript was designed 
--> It is a historical bug from JavaScript's original implementation. 
    It was retained for backward compatibility because changing it could break existing applications.

*/



