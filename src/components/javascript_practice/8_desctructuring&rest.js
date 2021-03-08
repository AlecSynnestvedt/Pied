const array = ['thing', 42, false, {key: 'value'}, [1, 2, 3, 4, undefined], NaN];

let stringVar = array[0];
let numVar = array[1];
let objVar = array[3];
let nanVar = array[array.length - 1];

console.log(stringVar, numVar, objVar, nanVar);

// Without destructing, you have to manually make a new variable and target a value from the array (which is usually done in separate lines).  For the amount of repetition involved with doing this, it would be nice to have a faster way to grab and assign values from the array.  Fortunately, destructuring simplifies this process greatly.  Let's examine how we can shorten this below (put this below the rest of your js in this file):

let [string, num, , obj, , nan] = array;
console.log(string, num, obj, nan);

// Same thing, way less code. neat!


let newArr = ['a', 1, undefined, ...array];
console.log(newArr);

// What's going on here?  You should see that newArr contains the values 'a', '1', and 'undefined', but it also contains all of the individual values of the 'array' array we defined in line 1.  That's cool.  We can break the array into its individual values within the definition of newArr.  We didn't have to loop through anything!

// Ok, let's break this file into 2 pieces. 

// Let's start by defining a new sample object we can play with:

const testObj = {
  testString: 'stringy thingy',
  testNum: 2,
  testBool: true,
  testObject: {key: 'waluigi'},
  testArray: [1, 2, 3, 4, undefined],
  testNaN: NaN
}

const objString = testObj.testString;
const objNum = testObj.testNum;
const objObj = testObj.testObject;
const objNan = testObj.testNaN;

console.log(objString, objNum, objObj, objNan);

// Notice, once again, that we have to use all these separate variable declarations for what is essentially the same action repeatedly: we're grabbing values and assigning them to variables.  Let's use destructuring to speed this process up!

let {testString, testNum, testObject, testNaN} = testObj;
console.log(testString, testNum, testObject, testNaN);
let newObj = {newString: 'more strings', anotherString: 'this is a string', ...testObj};
console.log(newObj);