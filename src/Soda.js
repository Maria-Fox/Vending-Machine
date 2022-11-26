import React from "react";
import { Link } from "react-router-dom";

const Soda = () => {
  return(
    <div>
      <img src = {"https://images.unsplash.com/photo-1596803244618-8dbee441d70b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvZGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} />

      <Link to="/">Go Back</Link>

    </div>
  )
}

export default Soda;

