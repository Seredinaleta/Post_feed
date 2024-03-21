import React from "react"
import { Link } from "react-router-dom";
import "../styles/App.css"

const Error = () => {
 return (
    <div className="App">
     <h1 className="page__title" >There is nothing here!</h1>
     <p>Error page</p>
      <p style={{marginTop:50}}>
        <Link to="/posts">Go to posts</Link>
      </p>
    </div>
  );
}

export default Error;