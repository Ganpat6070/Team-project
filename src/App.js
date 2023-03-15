import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Fullview from "./pages/Fullview";
    
import "./App.css";

function App() {


  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
        <Route path="/" element={<Homepage />} exact ></Route>
        <Route path="/coins/:id" element={<Fullview />} exact ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
