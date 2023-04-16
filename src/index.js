import { StrictMode } from "react";
import ReactDOM from "react-dom/client"; // "react-dom"
import "./index.css";
import App from "./App";
//IMPORT BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";


//Wrap the App Component with the Router component to enable the router features
// ReactDOM.render(
  // <StrictMode>
  //   <Router>
  //     <App />
  //   </Router>
  // </StrictMode>,
//   document.getElementById("root")
// );
//Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. 
// This is the solution: import ReactDom from react-dom/client

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);



