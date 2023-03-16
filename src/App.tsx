import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegForm2 from "./Registration/RegForm2";
import Login from "./login";
function App() {
  return (
    <div>
      <h1 className="d-flex justify-content-center p-2">Matrimony Site</h1>
      <RegForm2/>
      {/* <Login /> */}
    </div>
  );
}

export default App;
