import React from "react";
import Login from "./components/login";
import MyNavbar from "./components/navbar";
// import RegForm2 from "./components/register";
// import Stories from "./components/stories";

function App() {
  return (
    <div>
      {/* <h1 className="d-flex justify-content-center p-2">Matrimony Site</h1> */}
      <MyNavbar />
      {/* <Stories /> */}
      <Login /> 
      {/* <RegForm2/> */}
    </div>
  );
}

export default App;
