import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

  return (
    <>
      <div className="App">
       
      </div>
    </>
  );
}

export default App;




// function App() {
//   const [counter, counterSetter] = useState(0);
//   return (
//     <>
//       <div className="App">
//         <h1 className="counter">{counter}</h1>
//         <button
//           onClick={() => {
//             counterSetter((value) => value + 1);
//           }}
//           className="btn btn-primary increment"
//         >
//           Increase
//         </button>
//         <button
//           onClick={() => {
//             counterSetter((value) => value - 1);
//           }}
//           className="btn btn-secondary decrement"
//         >
//           Decrease
//         </button>
//       </div>
//     </>
//   );
// }