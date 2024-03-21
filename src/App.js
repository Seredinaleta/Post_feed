import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import MyNav from "./components/UI/nav/MyNav";
import AppRouter from "./components/AppRoter";
import "./styles/App.css";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
    setIsLoading(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        setIsLoading,
      }}
    >
      <BrowserRouter>
        <MyNav />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
