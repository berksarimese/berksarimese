import React from "react";
import Navbar from "./components/Navbar";
import './styles/App.css'
import Mainsection from "./components/Mainsection";



function App() {

  
    
  return (
    <div className="container-fluid p-0 m-0 bg-dark" style={{overflow:'hidden'}}>
      <Navbar />
      <Mainsection />
      
    </div>
  );
}

export default App;
