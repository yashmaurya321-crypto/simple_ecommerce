import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import validator from 'validator';
import { User_detail } from '../redux/action';
import { usersdata } from '../redux/reducer';
import { userdetail } from '../redux/action';
import './login.css';
import image from './Mobile login-amico.png';
function Login() {
  const [name, setname] = useState('');
  const [address, setaddress] = useState('');
  const [password, setpassword] = useState('');
  const [email, setemail] = useState('');
  const [respo, setrespon] = useState([]);
  const navigate = useNavigate(); // Use useHistory instead of useNavigate
 const dispach = useDispatch()
 
  const handeRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", { email, password });
      console.log(response.data);
       
     
      navigate(`/`); // Use history.push() instead of history()
      dispach(User_detail(response.data.user))
      
    } catch (error) {
      alert(error.message);
    }
   
  };

  return (
    <div className="container">
      <div className="login wrap">
        <div className="h1">Login</div>
        <input value={email} onChange={(e) => setemail(e.target.value)} pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" placeholder="Email" id="email" name="email" type="email" />
        <input placeholder="Password" id="password" name="password" type="password" value={password} onChange={(e) => setpassword(e.target.value)} />
        <input value="Login" className="btn" type="submit" onClick={handeRegister} />
        <p style={{ fontSize: 15 }}>Don't have an account? <a href='/register'>Click to Register</a></p>
      </div>
    </div>
  );
}

export default Login;
