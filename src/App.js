// import "./App.css";
// // This is the Main [CEO] file -->  PRIMARYstate LivesHere
// //---> Components are housed here
// //---> Hooks === useState, useEffect
// import HomePage from "./components/Homepage";
// import EmployeePage from "./components/EmployeePage";

// function App() {
//   const topics = ["Employee Directory", "Employee"]
//   // ------> Data that will be distributed through to the components below


// // 1.Make Employee Data
//     let allEmployees = [
//       {
//         name: "James King",
//         position: "President [CEO]",
//         image: ""
//       },
//       {
//         name: "Julie Taylor",
//         position: "VP of Marketing",
//         image: ""
//       },
//       {
//         name: "Eugene Lee",
//         position: "CFO",
//         image: ""
//       },
//       {
//         name: "John Williams",
//         position: "VP of Engineering",
//         image: ""
//       },
//       {
//         name: "Ray Moore",
//         position: "VP of Sales",
//         image: ""
//       },
//       {
//         name: "Paul Jones",
//         position: "QA Manager",
//         image: ""
//       }
//     ]
    
//   return (
//     // ----->What we wanna see displayed on screen
//     <div className="App">
//       <HomePage title={topics[0]}  workers={allEmployees} />
//       {/* --------passing state to other components {props:} */}
//       <EmployeePage title={topics[1]}  workers={allEmployees}/>
//       {/* ----------------------------------Components */}
//     </div>
//   );
// }

// export default App;







//BEGINING 
//at terminal do create file + npx create-react-app NAME
// code .
//everything that in header - DELETE
//APP.test.js ; logoreport ; setupTests- DELETE
// npm start
//delete import reportWebVitals from './reportWebVitals'; from index.js and // reportWebVitals();

import { useState } from 'react';

import { allEmployees } from './data/data'

import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';

import './App.css';

export default function App() {
  const [selectedEmployee, setSelectedEmployee] = useState(allEmployees[0]);

  return (
    <main className="App">
      <HomePage employees={allEmployees} setSelectedEmployee={setSelectedEmployee} />
      <EmployeePage selectedEmployee={selectedEmployee} />
    </main>
  );
}