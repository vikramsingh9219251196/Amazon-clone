import React, { useState } from 'react'
import './Login.css'
import logo from '../Home/assets/logo1.webp'
import {Link,useNavigate} from 'react-router-dom'
import {auth} from '../firebase'
const Login = () => {
    
    const navigate = useNavigate();
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const Continue=((e)=>{
     e.preventDefault();
     auth.createUserWithEmailAndPassword(email,password)
     .then(auth=>{
        auth.navigate('/');
     })
     .catch((error)=>{
        alert(error.message);
     })
    })
    const register=((e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                navigate('/');
            }
        })
        .catch(error=>alert(error.message));
    })
    return (
        <div className='login'>
            <Link to="/">
                <img className="login_logo"
                    src={logo}
                    alt="logo"/>
            </Link>
            <div className='login_container'>
                <h2>Sign in</h2>
                <div className='login_details'>
                    <h4>Email or mobile phone number</h4>
                    <input type="email" placeholder='Your Email address'
                    value={email} 
                    onChange={e=>setEmail(e.target.value)}/>
                    <h4>Enter password</h4>
                    <input type="password" placeholder='Your Password'
                    value={password} onChange={e=>setPassword(e.target.value)}/>
                </div>

                <button onClick={Continue} type="submit"className='login_button'>
                    Continue
                </button>
                <div className='footer_content'>
                    <p style={{marginBottom:"20px"}}>
                        By continuing, you agree to Amazon's
                        <a href="#">Conditions of Use</a>
                        and 
                        <a href="">Privacy Notice</a>.
                    </p>
                    <a href='#'>Need help?</a>
                    <p style={{marginTop:"20px"}}>Buying for work?<br/>
                        Shop on Amazon Business</p>
                </div>
                
            </div>
            <div className='new' style={{marginTop:"20px"}}>New to Amazon?</div>
            <button onClick={register} className='create_button' style={{marginTop:"30px"}}>Create Your Amazon account</button>
        </div>
    )
}

export default Login
