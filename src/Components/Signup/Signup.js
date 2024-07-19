import React, { useState,useContext} from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../Store/FirebaseContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function Signup() {
  const History=useHistory()
  const {FirebaseApp}=useContext(FirebaseContext)
  const [userName,SetUserName]=useState('')
  const[mail,setMail]=useState('')
  const[phone,SetPhone]=useState('')
  const[password,setPassword]=useState('')
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt=''></img>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            placeholder='Username'
            value={userName}
            onChange={(e)=>SetUserName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            placeholder='e-mail address'
            value={mail}
            onChange={(e)=>setMail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input type="tel" id="lname" name="phone"  minLength="9" required 
          value={phone}
          onChange={(e)=>SetPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button onClick={(e)=>{
            e.preventDefault()
            FirebaseApp.auth().createUserWithEmailAndPassword(mail, password)
            .then((userCredential) => {
              userCredential.user.updateProfile({displayName:userName}).then(()=>{
                FirebaseApp.firestore().collection("users").add({
                  name: userName,
                  phone:phone,
                  id:userCredential.user.uid
                }).then(()=>{
                  History.push("/login")
                })
              })
            })
          }}>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
