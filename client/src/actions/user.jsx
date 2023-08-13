import axios from 'axios'
import {setUser} from "../reducers/userReduser.js"

export const registration = async (login, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
            login,
            password
        })
        alert(response.data.message)
    } catch (e) {
        alert(e.response.data.message)
    }
}

export const login_in = (login, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/auth/login`, {
                login,
                password
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
            
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/auth/auth`,
            {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
            )
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
            
        } catch (e) {
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
    
}