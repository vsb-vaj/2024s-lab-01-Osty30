// 1 =================================
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// Your code:
export const arrayOfMultiples = (num, length) => {
    // ... write code ...
    let numbers = [];
    for (let i = 1; i <= length; i = i + 1) {
        numbers.push(num * i);
    }
    console.log(numbers);
};
arrayOfMultiples(7, 5);

// 2 =================================
// Change direction of array
// TIP: Check if there is function which can help you https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Example:
// changeDirection([0, 1, 2, 3]) ➞ [3, 2, 1, 0]
// changeDirection([]) ➞ []
// changeDirection([1, 2]) ➞ [2, 1]

// Your code:
export const changeDirection = (array) => {
// ... write code ...
    let numbers = [];
    for (let i = array.length - 1; i >= 0; i = i - 1) {
        numbers.push(array[i]);
    }
    console.log(numbers);
};
changeDirection([0, 1, 2, 3]);

// 3 =================================
// Create function that takes two arrays and return object with two keys - bigger array, sum all numbers
// Examples
// biggerArray([1,2,3,4,5], [50,50]) ➞ { array: [50,50], sum: 100 }
// biggerArray([1,2,3], [2,3,4]) ➞ { array: [2,3,4], sum: 9 }

// Your code:
export const biggerArray = (array1, array2) => {
// ... write code ...
    let sum1 = 0;
    let sum2 = 0;
    for (let i = 0; i < array1.length; i = i + 1) {
        sum1 = sum1 + array1[i];
    }
    for (let i = 0; i < array2.length; i = i + 1) {
        sum2 = sum2 + array2[i];
    }
    if (sum1 > sum2) {
        console.log({array: array1, sum: sum1});
    } else {
        console.log({array: array2, sum: sum2});
    }
};
biggerArray([1,2,3,4,5], [50,50]);