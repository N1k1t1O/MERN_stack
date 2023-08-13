import React, {useState} from 'react';
import './registration.css'
import Input from "../../utils/input/input.jsx";
import {registration} from "../../actions/user.jsx";

const Registration = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    
    return (
        <div className='registration'>
            <div className="registration__header">Регистрация</div>
            <Input value={login} setValue={setLogin} type="text" placeholder="Введите login..."/>
            <Input value={password} setValue={setPassword} type="password" placeholder="Введите пароль..."/>
            <button className="registration__btn" onClick={()=>registration(login, password)}>Зарегистрироваться</button>
        </div>
    );
};

export default Registration;