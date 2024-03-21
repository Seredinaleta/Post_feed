import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";
import MyButton from "../button/MyButton";

const MyNav = ({ children }) => {
  const { isAuth, setIsAuth }= useContext(AuthContext);
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <div className="navbar">
      <MyButton onClick={logout}>Logout</MyButton>
         
        <div className="navbar__links">
          <Link to="/">Description</Link>
          <Link to="/posts">Functionality</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
  )
}

export default MyNav;