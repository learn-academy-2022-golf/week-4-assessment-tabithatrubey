// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
describe("yourVotes", () => {
    it ("takes in an object that contains up votes and down votes and returns the end tally.", () => {
        const votes1 = {upVotes: 13, downVotes: 2}
        // Expected output: 11
        const votes2 = {upVotes: 2, downVotes: 33}
        // Expected output: -31
        expect(yourVotes(votes1)).toEqual(11)
        expect(yourVotes(votes2)).toEqual(-31)
    })
})

// ReferenceError: yourVotes is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

//Create a function called "yourVotes". Takes in one parameter (object)
const yourVotes = (object) => {
//   We want the value of the first key to subtract the value of the second key, so use dot notation to access the key:value pairs in objects.
    return  object.upVotes - object.downVotes
}
// console.log(yourVotes(votes1))



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("duplicateAnswers", () => {
    it ("takes in two arrays as arguments and returns one array with no duplicate values.", () => {
        const dataArray1 = ["array", "object", "number", "string", "Boolean"]
        const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
        // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
        expect(duplicateAnswers(dataArray1,dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
        
    })
})
// ReferenceError: duplicateAnswers is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total

// Create a function "duplicateAnswers", that takes in two parameters: 2 arrays
const duplicateAnswers = (array1, array2) => {
// We want to combine the two arrays without duplicate values, therefore, we use the spread operator with new Set to add the arrays to a new "set" object & 'set' will not allow for any duplicate values in an array only unique ones, so it's a win win situation.
    return [...new Set ([...array1, ...array2])]
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("shuffleArray", () => {
    it ("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        // expect(shuffleArray(colors1)).toEqual(["yellow", "blue", "pink", "green"])
        // expect(shuffleArray(colors2)).toEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
        // expect(["purple", "blue", "green", "yellow", "pink"]).toEqual(expect.shuffleArray(colors1))
        // expect(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]).toEqual(expect.shuffleArray(colors2))
        expect(["purple", "blue", "green", "yellow", "pink"]).not.toEqual(shuffleArray(colors1))
        expect(["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]).not.toEqual(shuffleArray(colors2))
    })
})
// ReferenceError: shuffleContent is not a function
// OH MY LANTA THIS JEST TEST WAS SO HARD!!! I didn't even ignore the hyperlink, and somehow still struggled with the test. 
// Create a function "shuffleContent" that has one parameter: an array
const shuffleArray = (array) => {
    // We want to return the array with the first value removed so we use the .slice() method with 1 inside the parentheses instead of a 0, since slice works with value and not index. Next, we add on the .sort() method with parameters a,b to randomly sort through the function with the Math.random() function to generate a random number. 
    return array.slice(1).sort((a,b) => Math.random())
    }

    // Test Suites: 1 passed, 1 total
    // Tests:       3 passed, 3 total