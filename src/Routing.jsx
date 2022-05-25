import { BrowserRouter, Routes, Route } from "react-router-dom";
// import React from "react";
import Header from './Components/Header'
import Email from "./Components/Email/Email";
import User from "./Components/User/User";
function Routing() {
  return (
    <div>
      {/* <Email /> */}
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Email />} />

          <Route path="user" element={<User />} />
        </Routes>
      </BrowserRouter>
      {/* <User/> */}
    </div>
  );
}

// import ReactDOM from "react-dom/client";
// import your route components too

// function Routing() {
// <div>
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Email />}/>

//       <Route path="user" element={<User />}/>

//     </Routes>
//   </BrowserRouter>
//   </div>
// };

export default Routing;
