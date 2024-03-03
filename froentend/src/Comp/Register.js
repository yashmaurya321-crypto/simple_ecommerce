import React,{useState} from 'react';
import './regis.css';
import image from './Mobile login-amico.png';
import validator from 'validator';
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
function Register() {
  const [name, setname] = useState('')
  const [address, setaddress] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const history = useNavigate();
  const handeRegister = async () => {
    try {
      if (password.length < 8) {
        throw new Error("Password should be at least 8 characters long");
      }
      if (!validator.isEmail(email)) {
        throw new Error("Email is not valid");
      }
  
      const response = await axios.post("http://localhost:5000/register", {
        name,
        email,
        address,
        password,
      });
      console.log(response.data);
      history('/');
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className="container">
      <div class="login wrap">
  <div class="h1">Register</div>
  <input placeholder="Username" id="username" name="username" type="text" value = {name} onChange={(e)=>setname(e.target.value)}/>
  <input placeholder="Address" id="address" name="Address" type="text" value = {address} onChange={(e)=>setaddress(e.target.value)}/>
  <input value = {email} onChange={(e)=>setemail(e.target.value)} pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$" placeholder="Email" id="email" name="email" type="email"/>
  <input placeholder="Password" id="password" name="password" type="password" value = {password} onChange={(e)=>setpassword(e.target.value)}/>
  <input value="Register" class="btn" type="submit" onClick={handeRegister}/>
  <p style ={{fontSize : 15}}>Already have account <a href='/login'>Click to login</a></p>
</div>
    </div>
  );
}

export default Register;
