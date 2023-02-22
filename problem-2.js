/* ------------------------------ Practice Problem reduce() ------------------------------ */


/* ----------------------------- Problem No:1 using for loop ---------------------------> !!!
*/

/* Initialize the array */
const array = [1, 9, 17, 22];

/* Initialize a variable to store the sum */
let sums = 0;

/* Loop through the array */
for (let i = 0; i < array.length; i++) {

  /* Add the current element to the sum */
  sums += array[i];
}

/* Output the sum */
console.log(sums);


/* ----------------------------- Problem No:1 using reduce() ---------------------------> !!!
*/

/* Initialize the array */
const arr = [1, 9, 17, 22];

/* Use reduce to sum the array */
const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

/* Output the sum */
console.log(sums);




/* ---------------------------- Practice Problem reduce() ----------------------------> !!! 

const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22}
  ];

Challenging: Follow above array of objects. So, you have 3 objects as
array element. Can you find out the total sum from here?

20 + 15 + 22 = 57 . The output will be 57

What are you thinking? Yeah! Do it with for loop. I know you can do it.
But! Wait !! Wait !!! Do the same task using array.reduce() method.

*/

/* ----------------------------- Problem No:2 using for loop ---------------------------> !!!
*/

/* Define an array of objects called "people" */
const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
  ];
  
  /* Initialize a variable called "sumOfAges" with a value of 0 */
  let sumOfAges = 0;
  
  /* Use a for loop to iterate over the "people" array */
  for (let i = 0; i < people.length; i++) {
    /* Access the "age" property of the current object in the array and add it to the "sumOfAges" variable */
    sumOfAges += people[i].age;
  }
  
  /* Output the final value of the "sumOfAges" variable to the console */
  console.log(sumOfAges);
  

/* ----------------------------- Problem No:2 using reduce() ---------------------------> !!!
*/

/* Define an array of objects called "peopleArray" */
const peopleArray = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 }
  ];
  
  /* Use the "reduce()" method on the "peopleArray" array to calculate the sum of ages */
  const sumOfAge = peopleArray.reduce((accumulator, currentValue) => {
    
    /* The "accumulator" is the running total of the sum of ages so far */
    /* The "currentValue" is the current object in the array being processed */
    /* Access the "age" property of the "currentValue" object and add it to the "accumulator" value */

    return accumulator + currentValue.age;
  }, 0); /* Start with an initial value of 0 for the "accumulator" */
  
  /* Output the final value of the "sumOfAges" variable to the console */
  console.log(sumOfAges);