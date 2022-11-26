import React from "react";
import { Link } from "react-router-dom";

const Candy = () => {
  return (
    <div>
      <img src = {"https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FuZHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"} />

      <Link to="/">Go Back</Link>
    </div>
  )
}

export default Candy;