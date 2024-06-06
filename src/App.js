/*
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  React Week 13 - Intro to React, Webpack, Components, and JSX 
  FE Lab Week 13
*/

/* ----------------------------------------------------- */
// Key Term List:
// React
// Node Packet Manager (NPM)
// Webpack
// Component
// JSX
// JSX Documentation: https://reactjs.org/docs/introducing-jsx.html
// functional programming
// class based programming

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

// Feel free to copy/paste the instructions to different components for easier visibility.

/* ------------------ Part 1: Creating a Nav Bar Component --------------------- */
/**
 --* Step 1: Create a new file in our src folder called Nav.js
 --* Step 2: Create the base format for a class-based component.
 --*         Inside of the return(), return: <nav>Nav</nav>
 --* Step 3: In your App.js, import your <Nav> component inside of the div in return()
 --*         You should now see the text 'Nav' on your app.
 --*         Don't forget to 'npm start' in the console if you aren't on a live server yet.
 --* Step 4: In your Nav.js file, add an <ul>, and 3 <li> inside your <nav> element.
 --*         The text inside the 3 <li> should be: Home, Portfolio, and Contact
-- * Step 5: Style your Nav component using the app.css file.
 *         Give your <nav> element: 100vw
 *                                  (100 view width makes the width the size of their screen)
 *         Give your <ul> element: display: flex, flex-direction: row, justify-content: right
 *         The rest is up to you! Consider pseudo:selectors, such as hover/active/touch
 *
 *         Alternatively, refer to Week 9 and use bootstrap instead.
 *         Remember when we give elements classes in React, we use className=""
 * */

/* ------------------ Part 2: Creating a Welcome Section --------------------- */
/**
 *  Step 1: Copy/paste the code below above your function App() & below your imports
 *           let date = new Date()
 *
 *           let singleUser = {
 *             name: 'John',
 *             time: date.toDateString(),
 *           }
 *
 * Step 2: Below your <Nav/> component, create a <section> element to hold our Welcome section
 * Step 3: Create a <h1> element inside our <div> and welcome our singleUser.
 *         Use our singleUser object instead of typing out their name.
 *         Hint: Use {} inside of HTML to use JavaScript
 *
 *         Create a <p> tag, and inside of it explain todays date
 *         Make sure to refer to the object instead of hard-coding what today is.
 *
 * Step 4: Style our new welcome section using the app.css file. Make it your own!
 *         Suggested: Center it on the page
 *                    Increase the font size since it's considered 'call to action'
 *                    Consider capitalizing/line-spacing the <h1>, (text-transform/decoration)
 *                    Change the font color so it's legible over your background color
 *                    Change the margin-top so there's reasonable space from <nav>
 *
 */

/* -- ALL YOUR COMPONENT/STYLE IMPORTS HERE -- */
//import './App.css';
//import Nav from './Nav';
//import WelcomeSection from './WelcomeSection';


// function App() {
//   return <div className="App">
//    <Nav/>
//    <WelcomeSection/>      
//   </div>;
// }

//export default App









/* ------------------ Part 1: State/Constructor/Props --------------------- */
/**
 * REMINDER: Start your developer server by moving to your project in your terminal, then type 'npm start'
 *
 * Goal: Pass information using props from our App.js to a new component, Appointments.js.
 *
 * Step 1: Create a new component in your src folder called 'Appointments.js'
 *         Create the base format for a class based component in Appointments.js
 *
 * Step 2: Render your Appointments.js component in your App.js component.
 *
 * Step 3: Let's hold our information in our App.js, and pass that information
 *         as a prop to our <Appointments/> component.
 *
 *         Copy/paste the code below our imports in App.js:
 *                (If you hold the middle mouse button and drag,
 *                 it should highlight the text to copy/paste)
 *
 *                 let allCustomers = [
 *               {
 *                 firstName: 'Shawn',
 *                 lastName: 'Lennon',
 *                 appointmentTime: '1:00PM',
 *               },
 *               {
 *                 firstName: 'Jewel',
 *                 lastName: 'Ronnie',
 *                 appointmentTime: '2:00PM',
 *               },
 *               {
 *                 firstName: 'Martie',
 *                 lastName: 'Francis',
 *                 appointmentTime: '3:00PM',
 *               },
 *             ]
 *
 * Step 4: Create a property on the <Appointments/> component called 'customers',
 *         set it equal to our variable, allCustomers
 *
 *         Does this look familiar? <img src="someUrl.com"/> ... src is also a prop/property.
 *
 *         Hint: <Appointments customers={allCustomers} />
 *
 * Step 5: In class based components, we hold state inside of the constructor(){}.
 *         Because we want our Appointments.js to absorb information from App.js, we also need super()
 *         inside of the constructor.
 *         In Appointments.js, above your render(), create a constructor that will hold our state.
 *
 * Step 6: Pass the word: props  into your constructor argument, and your super argument.
 *         console.log(props) at the bottom of your constructor. What data type is it?
 *         It should be an object.
 *
 *         Inside the constructor in Appointments.js, set
 *         this.customersArray = props.customers
 *
 *         console.log(this.customersArray) inside the constructor.
 *         Now we can use this.customersArray in our Appointments.js!
 *
 * */

/* ------------------ Part 2: Creating our Table  --------------------- */

/** Note: Feel free to copy/paste this into your Appointments.js for easier visibility.
 *
 * Goal: Create a table that renders allCustomers
 *
 * Step 1: Create a table with a thead/tbody. The thead should have a row with
 *         3 th elements: First Name, Last Name, and Appointment Time.
 * Step 2: Inside of your tbody, create a <tr> element that will .map()
 *         over this.customersArray and return
 *         3 <td> elements, one for firstName, lastName, and appointmentTime.
 *
 *         Check the README for a .map() hint.
 * Step 3: Style it with css using the App.css file!
 *
 */

/* -- ALL YOUR COMPONENT/STYLE IMPORTS HERE -- */
import './App.css'
import Appointment from './Appointments'
import Nav from './Nav'

let allCustomers = [
  {
    firstName: 'Shawn',
    lastName: 'Lennon',
    appointmentTime: '1:00PM',
  },
  {
    firstName: 'Jewel',
    lastName: 'Ronnie',
    appointmentTime: '2:00PM',
  },
  {
    firstName: 'Martie',
    lastName: 'Francis',
    appointmentTime: '3:00PM',
  },
]
let date = new Date()

let singleUser = {
  name: 'Jane Smith',
  todaysDate: date.toDateString(),
}

function App() {
  return (
    <div className="App">
      <Nav />
      <section className="welcomeSection">
        <h1>Welcome, {singleUser.name}</h1>
        <p>Todays date is: {singleUser.todaysDate}</p>
      </section>
      <Appointment customers={allCustomers} />
     
    </div>
  )
}

export default App



