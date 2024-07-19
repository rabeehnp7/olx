import React from 'react';
import { useState,useContext } from 'react';
import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../Store/FirebaseContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function Login() {
  const History =useHistory()
  const{FirebaseApp}=useContext(FirebaseContext)
  const [mail,setMail]=useState('')
  const [password,setPassword]=useState('')
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={mail}
            type="email"
            id="fname"
            name="email"
            placeholder="John@gmail.com"
            onChange={(e)=>setMail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            placeholder="password"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
          />
          <br />
          <br />
          <button onClick={(e)=>{
            e.preventDefault()
            FirebaseApp.auth().signInWithEmailAndPassword(mail, password)
  .then((userCredential) => {
    var user = userCredential.user;
    History.push("/")
  })
  .catch((error) => {
    alert(error.code,error.message)
  });
          }}>Login</button>
        </form>
        <a onClick={()=>{
          History.push("/Signup")
        }}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
