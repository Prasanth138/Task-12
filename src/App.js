import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home";



function App() {
 
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
