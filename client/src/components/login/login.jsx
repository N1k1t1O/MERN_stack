import React, {useState} from 'react';
import '../registration/registration.css';
import Input from "../../utils/input/input.jsx";
import {useDispatch} from "react-redux";
import {login_in} from "../../actions/user.jsx";


const Login = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    
    return (
        <div className='registration'>
            <div className="registration__header">Авторизация</div>
            <Input value={login} setValue={setLogin} type="text" placeholder="Введите login..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <button className="registration__btn" onClick={()=>dispatch(login_in(login,password))}>Войти</button>
        </div>
    );
};

export default Login;