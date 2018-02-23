console.log(10 == 10); //true
console.log(10 == 100); //false

//Case sensitive
console.log("hello" == "hello"); //true
console.log("hello" == "Hello"); //false

console.log(null == undefined); //true
console.log(NaN == NaN); //false

console.log(10 == "10"); //true

console.log(null != null); //false
console.log(null != undefined); //false
console.log(10 != 100); //true
console.log(10 != "10"); //false
---------------------------------------------------
console.log(null === undefined); //false
console.log(10 === "10"); //false
console.log(10 !== "10"); //true
console.log(null !== undefined); //true
---------------------------------------------------
console(10 > 100); //false
console(10 > 1); //true
console("hello" > "hello"); //false
console("helloooo" > "hello"); //true
console(10 >= 10); //true
console(100 <= 100); //true