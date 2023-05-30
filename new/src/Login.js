import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css'
const Log = () => {
    const [input, setinput] = useState({email:'',password:'',})
    const [error, seterror] = useState('')
    
    const handleinput= (e) => {
        setinput({...input,[e.target.name]:e.target.value})
    }

    const navigate = useNavigate()

    const handleSubmitt = (e) => {
        e.preventDefault();
        const{email,password}=input

        if (email =="hello@gmail.com" && password ==123456789) {
            navigate('/Target/App')
        }
        else {
            seterror("invalid")
        }
    }

    return (
        <div className='box'> 
            <form onSubmit={handleSubmitt} >
                <h1>Login</h1>
            <input type="email" value={input.email} name='email' onChange={handleinput} required className='ip1'/><br/>
            <input type="Password" value={input.password} name='password' onChange={handleinput} required className='ip2' /><br/>
            <button type="submit" className='bt1'>Login</button>
            {error && <div style={{ color: "blue" }}>{error}</div>}
            </form>
        </div>
    )
}


export default Log