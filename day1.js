//DAY 1
/*
Javascript is a programming language.



1) using console.
Tempoarary Code. 
ctrl + l,k= clear

2) Variables
Variables is like containers which store data.
Is simply a storage location.



3) Data types in js

to check type - typeof
primitive data types
- Number
- boolean
- string
- undefined
- null
- bigint
- symbol


4) Numbers in js

postive, negative, floating

5) Operations in Js

a+b = a & b are operads

addition
substraction
multiplication
divide
Modulo = 2%1==0
Exponentiational operator (power)= 2**5

6) NAN in js
The Nan global property is a value representing NOt a number.
typeof Nan= Number

0/0


7) Opeators precedence (Priority)
 
Bodmas rule.
1. Brackets.
2. Power operator
3. Multiple , divide
4. Add , Substract

8) Assignment opeartor.

This operator assign value to variables.

9) Unary Opearors.

age+=1
age++

10) Identifier rules

All javascripts variables must be identified by unique name

not a no.

11) Boolean in js

Boolean represents a truth value/ yes/no, true or false

12) Typescript

Static type, Js is dynamic type
Designed by Microsoft

13) Strings
Strings are text, sequence of characters.
Written in single and double quotes.


14) String Index

String are said to be characters position
they are 0 based indexing
let name = "Tony"
tony[2]


15) NUll & Undefined
The variable that as not assign a value is undefined.
undefined = not assign any value to variable// mujhe nhi pata

Null= The Null value represent the intentional absence of any object value.

 */

// 1. console.log

console.log("Js works")    //output: Js works
console.log("Welcome to programming.") //output: Welcome to programming.


//2. Variables

let x = 123
console.log('x:', x)  //output: x: 123

let arr = [4, 8, 9, 7]
console.log('arr:', arr) //output: arr: [ 4, 8, 9, 7 ]

let string = "way to full stack."
console.log('string:', string)  //output: string: way to full stack.

let object = {name: "shiv", age: "22"}
console.log('object:', object)   //output: object: { name: 'shiv', age: '22' }
console.log('object:', object.name) //output: object: shiv


// 3. datatype check


let a = 123;
console.log("x:", typeof(a)); //output: x: number

let arr1 = [4, 8, 9, 7]
console.log('arr1:', typeof(arr1)) //output: object


let obj = {name: "shiv", age: "22"}
console.log('obj:', typeof(obj))   //output: object


//operators.

let e = 15
let b = 20
let c = e+b
console.log('c:', c) //c: 35


let g = 87
let h= 10
let i = g*h
console.log('i:', i)   //i: 870

let r = 80
let s = 5
let t = r/s
console.log('t:', t)   //t: 16

let f= 85
let k = 45
let j = f-k
console.log('j:', j)  //j: 40

//string

let tom = "john"
console.log('tom:', tom) //tom: john

let str = "david"
console.log('str:', str)  //str: david