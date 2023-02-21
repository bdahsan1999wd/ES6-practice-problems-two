/* -------------------- Practice Problem map(), filter(), find() -------------------- */

/* ----------------------------------- No:1  map() -----------------------------------> !!!

1. You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
Now convert this array into an even array (array with even
numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
method. Hints: add one to any odd number and it will become an even
number.
*/

/* ------------------------- using for loop ------------------------- */

const oddNumberArray2 = [1, 3, 5, 7, 9];

/* create an empty array to store the even numbers */
const evenArray2 = []; 

/* loop through each element of the oddArray */
for (let i = 0; i < oddNumberArray2.length; i++) {

/* add 1 to the current element and push it into the evenArray */
  evenArray2.push(oddNumberArray2[i] + 1);
}

/* print the new array of even numbers */
console.log('No:1 using for loop', evenArray2);



/* ------------------------- using array.map() ------------------------- */

const oddNumberArray1 = [1, 3, 5, 7, 9];

/* apply a function to each element of the array */
const evenNumberArray1 = oddNumberArray1.map(num => num + 1);

/* print the new array of even numbers */
console.log('No:1 using array.map()', evenNumberArray1);





/*----------------------------------- No:2  filter() -----------------------------------> !!!

2. You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
return/get all the elements which are divisible by 10.
Do this using for loop & array.filter() method.
*/

/* ------------------------- using for loop ------------------------- */

/* Define an array of numbers */
const arrayOfNumbers = [33, 50, 79, 78, 90, 101, 30];

/* Define an empty array to store the numbers that are divisible by 10 */
const divisibleByTen2 = [];

/* Loop through each element of the numbers array */
for (let i = 0; i < arrayOfNumbers.length; i++) {

    /* Check if the current element is divisible by 10 */
  if (arrayOfNumbers[i] % 10 === 0) {

    /* If the current element is divisible by 10, add it to the divisible array */
    divisibleByTen2.push(arrayOfNumbers[i]);
  }
}

/* Print the array containing only the numbers that are divisible by 10 */
console.log('No:2 using for loop', divisibleByTen2); 



/* ------------------------- using array.filter() ------------------------- */

/* define an array of numbers */
const numbersArray = [33, 50, 79, 78, 90, 101, 30];

/* create a new array with only the elements divisible by 10 */
const divisibleByTen1 = arrayOfNumbers.filter(number => number % 10 === 0);

/* print the new array */
console.log('No:2 using array.filter()', divisibleByTen1);





/*----------------------------------- No:3  find() -----------------------------------> !!!

3. Now do the same task of question 2. But do this using array.find()
method & for loop. Then compare the output of question 2 & question 3.
*/

/* ------------------------- using array.find() ------------------------- */

/* Define an array of numb */
const numb = [33, 50, 79, 78, 90, 101, 30];

/* Use the find method to find the first number in the array that is divisible by 10 */
const firstDivisible1 = numb.find(number => number % 10 === 0);

/* Log the result to the console */
console.log('No:3 using array.find()' ,firstDivisible1);



/* ------------------------- using for loop ------------------------- */

/* Define an array of numbers */
const numbers = [33, 50, 79, 78, 90, 101, 30];

/* Initialize a variable to hold the first element that is divisible by 10 */
let firstDivisible2;

/* Loop through each element in the array */
for (let i = 0; i < numbers.length; i++) {

  /* Check if the current element is divisible by 10 */
  if (numbers[i] % 10 === 0) {

    /* If it is, set the firstDivisible variable to the value of that element */
    firstDivisible2 = numbers[i];

    /* Exit the loop, since we only need to find the first element that is divisible by 10 */
    break;
  }
}

/* Log the value of the firstDivisible variable to the console */
console.log('No:3 using for loop', firstDivisible2);