import React from 'react';
import {Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Candy from "./Candy";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path = "/" element = { <VendingMachine />}/>
          <Route path = "/soda" element = {<Soda />}></Route>
          <Route path = "/chips" element = {<Chips />}></Route>
          <Route path = "/candy" element = {<Candy />}></Route>
        </Routes>
    </div>
  );
}

export default App;


{/* <div>
  <Navbar/>
    <Routes>
    <Route exact path="/" element={<VendingMachine />} />
  </Routes>
    <Routes>

    <Route exact path="/soda" element={<Soda />} />
  </Routes>
    <Routes>

    <Route exact path="/chips" element={<Chips />} />
  </Routes>
    <Routes>

    <Route exact path="/candy" element={<Candy />} />
  </Routes>
</div> */}