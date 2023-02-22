/* ------------------------------ Access Object Values ------------------------------ */

/* -------------------- Access Object Values Using Dot Notation --------------------> !!!
*/

/* Initialize the student object */
const student = {
    name: 'fredie',
    age: 26,
  };
  
  /* Log the value of the age property to the console */
  console.log(student.age);



/* -------------------- Access Object Values Using Dot Notation --------------------> !!!
*/

/* Initialize the data object */
let data = {
    location: [
      {
        latitude: '34.5 , 37.8',
        longitude: '98.77 , 58.7',
        city: 'Hyderabad',
        country: 'India'
      }
    ]
  };
  
  /* Log the value of the city property to the console */
  console.log(data.location[0].city); 



  
/* -------------------- Access Object Values Using Dot Notation --------------------> !!!
*/

/* Initialize the user object */
const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  };
  
  /* Log the value of the email property to the console */
  console.log(user.email);
  
  /* Log the value of the address property to the console */
  console.log(user.address);
  
  /* Log the value of the city property to the console */
  console.log(user.address.city);
  
  /* Log the value of the lat property to the console */
  console.log(user.address.geo.lat);
  
  /* Log the value of the company name property to the console */
  console.log(user.company.name);