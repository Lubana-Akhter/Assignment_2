// solution#1
function calculateDifference(a, b) {
    return a - b;

}
let result = calculateDifference(20, 4);
console.log(result); //output:16

// solution#2
function isOdd(num) {
    return num % 2 !== 0;
}
let result1 = isOdd(10); //output false
let result2 = isOdd(5); //output true
console.log(result1);
console.log(result2);

// solution#3
const numbers = [2, 3, 1, -4, 5, 6, 7, 8];
function findMin(arr) {
    return Math.min(...arr);
}

let minNum = findMin(numbers);
console.log("smallest number is: " + minNum);

// solution#4
const number = [14, 2, 3, 4, 5, 6, 10];
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

const evenNumbers = filterEvenNumbers(number);
console.log(evenNumbers); //output:[ 14, 2, 4, 6, 10 ]

// solution#5
const num = [2, 3, 4, 5, 6, 10];
function sortArrayDescending(a, b) {
    return b - a;
}
let sortedNumbers = num.sort(sortArrayDescending);
console.log(sortedNumbers); //output:[ 10, 6, 5, 4, 3, 2 ]

// solution#6
function lowercaseFirstLetter(str) {
    if (str.length === 0) {
        return str;
    }
    return str[0].toLowerCase() + str.slice(1);
}
console.log(lowercaseFirstLetter("Hello")); //output: hello
console.log(lowercaseFirstLetter("JAVASCRIPT"));//output: jAVASCRIPT

// solution#7
function countVowels(str) {
    let vowelCounts = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCounts++;
        }
    }
    return vowelCounts;
}

console.log(countVowels("Hello JAVASCRIPT")); // output: 5

// solution#8
let numberOfArray = [10, 20, 30, 40, 50, 60, 70, 80];
function findAverage() {
    let sum = 0;
    for (let num of numberOfArray) {
        sum += num;
    }
    return sum / numberOfArray.length;
}
console.log(findAverage()); //output: 45