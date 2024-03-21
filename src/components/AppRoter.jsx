import React from "react";
import { useContext } from "react";
import { Route, Routes} from "react-router-dom";
import { AuthContext } from "../context";
// import Counter from "../components/counter";
// import ClassCounter from "../components/classCounter";
import Error from "../pages/Error";
import Login from "../pages/Login";
import {privateRoutes, publicRoutes} from "../router/routes"
import MyLoader from "./UI/loader/MyLoader";

const AppRouter = () => {
  const { isAuth,isLoading } = useContext
    (AuthContext)
  // console.log(`authorized - ${isAuth}`)
  if (isLoading) {
    return <MyLoader/>
  }
  
  return (
    isAuth === true ?
      <Routes>
        {privateRoutes.map(route => (
        <Route key={route.path} path={route.path} element={route.element}/>
        ))}
        <Route path="*" element={<Error />} />
      </Routes>
     :
    <Routes>
      {publicRoutes.map(route =>(
        <Route key={route.path} path={route.path} element={route.element}/>
      ))}
      <Route path="*" element={<Login />} />
      </Routes>
  )
}




export default AppRouter;