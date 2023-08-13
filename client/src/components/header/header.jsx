import React from "react";
import "./header.css"
import Logo from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux"
import {logout} from "../../reducers/userReduser.js"
function Header (){
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    return (
        <div className = "header"> 
            <img src = {Logo} alt="err" className="navbar__logo"/>
            <div class = "menuBar">
                { !isAuth && <div className="navbarButton"><Link to ="/login">Sign in!</Link></div> }
                { !isAuth && <div className="navbarButton"><Link to ="/registration">Sign up!</Link></div> }
                { isAuth && <div className="navbarButton" onClick={()=>dispatch(logout())}>Выход</div> }
            </div>
        </div>
    );
}


export default Header;