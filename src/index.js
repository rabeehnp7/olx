import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {FirebaseApp} from './Firebase/Config';
import Context, { FirebaseContext } from './Store/FirebaseContext';
ReactDOM.render(
    <FirebaseContext.Provider value={{FirebaseApp}}>
        <Context>
        <App />
        </Context>
    </FirebaseContext.Provider>

   

, document.getElementById('root'));
