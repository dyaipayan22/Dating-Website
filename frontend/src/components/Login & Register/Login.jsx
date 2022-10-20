import React, { useState } from "react";
import "../../styling/Login & Register/Login.css";
import usePasswordToggle from "../../hooks/usePasswordToggle";
import LockIcon from "@mui/icons-material/Lock";
import MailIcon from "@mui/icons-material/Mail";
import axios from 'axios'
import {useCookies} from 'react-cookie'
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [isSignUp, setIsSignUp] = useState(true)
  const [cookies,setCookie,removeCookie] = useCookies(['user'])
  const [error,setError] = useState(null)
  const navigate = useNavigate()
  const [user,setUser] = useState(
    {
      email:"",
      password:"",
      reEnterPass:""
    }) ;

  //start of handle submit  
  const handleSubmit = async (e) =>
  {
    e.preventDefault()
    setError(null)
    try {
          if(isSignUp && (user.password!==user.reEnterPass)){
            setError('passwords need to match')
            return
          }
          const email = user.email
          const password = user.password
          if(isSignUp===false)
          {
            const response = await axios.post('http://localhost:8000/login',{email, password})
            setCookie('email', response.data.email)
            setCookie('authToken', response.data.token)
            setCookie('userId', response.data.userId)
            if(response.status === 201)
            {
              navigate('/feed');
              console.log(response);
            } 

          }
          else{

          const response = await axios.post('http://localhost:8000/signup',{email, password})    
          setCookie('email', response.data.email)
          setCookie('authToken', response.data.token)
          setCookie('userId', response.data.userId)
          if(response.status === 201) navigate('/onboarding')
          console.log(response)
          }
        window.location.reload()

        }
        
        catch(err)
        { 
          
          if(err.response.status===409)
          {
             setIsSignUp(false)
             setError('Already a user try loggin in') 
          }

          else if (err.response.status===500)
          {
             setIsSignUp(false)
             console.log("WRONG PASS")
             setError('Wrong Password') 
          }

          else if(err.response.status===400)
          {
             setIsSignUp(true)
             setError('User Not Found please register') 
          }
        }
  };
  //end of handle submit


  const handleInput =  (e) =>
  {
    const {name, value} = e.target
    setUser({
      ...user,
      [name]:value
    })
      console.log(e.target.value)
  }


  const toggleRes = (e) => 
  {
    setIsSignUp(!isSignUp)
  }
  
  return (
    <div className="login">
      <div className="form-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>LOGIN</h2>
          <div className="input-group">
            <MailIcon className="field-icon" />
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              value={user.email}
              onChange={handleInput}
            />
            <span>Email ID</span>
          </div>
          
          <div className="input-group">
                    <LockIcon className="field-icon" />
                    <input
                      id="password"
                      name="password"
                      type={PasswordInputType}
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                    <div className="visibility-icon">{ToggleIcon}</div>
                    <span>Password</span>
                  </div>

          {isSignUp &&
                    <div className="input-group">
                    <LockIcon className="field-icon" />
                    <input
                      id="reEnterPass"
                      name="reEnterPass"
                      type={PasswordInputType}
                      autoComplete="off"
                      value={user.reEnterPass}
                      onChange={handleInput}
                    />
                    <div className="visibility-icon">{ToggleIcon}</div>
                    <span>Re Enter Password</span>
                  </div> }
          <p>{error}</p>      
          <button className="login-btn" type="submit">
            Submit
          </button>

          {!isSignUp && <div className="other-login-options">
            <button className="google-login">Google</button>
            <button className="facebook-login">Facebook</button>
          </div>}

          <button className="toggle" type="button" onClick={toggleRes}>{isSignUp?"Login":"Register"}</button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
