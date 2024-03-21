import React, { useContext } from "react";
import "../styles/App.css";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";



const Login = () => {
  const { setIsAuth } = useContext(AuthContext)

  const login = event => {
    event.preventDefault()
    setIsAuth(true);
    localStorage.setItem('auth','true')
  }
  return (
    <div>
      <h1 className="page__title">Login page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Your login" />
        <MyInput type="password" placeholder="Your password" />
        <MyButton>Enter</MyButton>
      </form>
    </div>  
  )
}

export default Login;