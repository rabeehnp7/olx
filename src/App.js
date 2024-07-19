import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Signup from './Pages/Signup';
import Login from './Pages/Login'
import Home from './Pages/Home';
import Create from './Pages/Create'
import { useContext,useEffect } from 'react';
import {AuthContext,FirebaseContext} from './Store/FirebaseContext';

function App() {
  const {setUser}=useContext(AuthContext)
  const {FirebaseApp}=useContext(FirebaseContext)
  useEffect(()=>{
    FirebaseApp.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })
  })
  return (
    <div>
      <Router>
        <Route exact path='/'>
        <Home />
        </Route>
        <Route exact path='/Signup'>
        <Signup />
        </Route>
        <Route exact path='/Login'>
        <Login />
        </Route>
        <Route exact path='/create'>
        <Create />
        </Route>
      </Router>
    </div>
  );
}

export default App;
