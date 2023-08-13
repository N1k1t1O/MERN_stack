import React, { useEffect } from "react";
import MainPage from "./pages/mainPage/mainPage.jsx"
import RegistrationPage from "./pages/registrationPage/registrationPage.jsx"
import LoginPage from "./pages/loginPage/loginPage.jsx"
import UserPage from "./pages/userPage/userPage.jsx"
import "./App.css"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux"
import {auth} from "./actions/user.jsx";

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(auth())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<MainPage />} />
      </Routes>
      {isAuth &&
        <Routes>
          <Route path ="/login" element = {<UserPage />} />
        </Routes>
      }
      
      {!isAuth &&
        <Routes>
          <Route path ="/registration" element = {<RegistrationPage />} />
          <Route path ="/login" element = {<LoginPage />} />
      
        </Routes> 
      }
      
      
  
    </BrowserRouter>
    
  );
}

export default App;
