import React from "react";
import Soda from "./Soda"
import Chips from "./Chips";
import Candy from "./Candy";
import {Link} from "react-router-dom";


const VendingMachine = () => {
  return (
    <div>
      <h1>Vending Machine Options</h1>
      <ul>
        <li><Link to="/soda">Soda</Link></li>
        <li><Link to = "/chips">Potato Chips</Link></li>
        <li><Link to = "/candy">Candy</Link></li>
      </ul>
    </div>

  )
}

export default VendingMachine;