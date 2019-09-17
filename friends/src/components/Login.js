import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Login = props => {

    const [credentials, setCredentials] = useState({ username: '', password: '' })

    // console.log(credentials)

    const handleChange = e => {
        // console.log(e)
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        // console.log(e, 'login clicked')
        // console.log(credentials)
        e.preventDefault();
        axiosWithAuth().post('/login', credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.payload)
                props.history.push('/friendslist')

            })
            .catch(err => {
                console.log(err, 'error')
            })
    }

    return (
        <div>
            <form onSubmit={login}> {/* onsubmit={login}*/}
                <label>username: </label>
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                /> <br></br>
                <label> password: </label>
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                /> <br></br>
                <button>Log in</button>
            </form>
        </div>
    )
}

export default Login;