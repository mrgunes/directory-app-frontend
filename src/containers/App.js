import React, {useState} from 'react';
import '../App.css';
import LoginPage from './LoginPage'
import SignUp from './SignUp';
import UserCreated from './UserCreated';
import UserPage from  './UserPage';
import CreateContact from './CreateContact'
import ContactView from './ContactView'
import {Route, Switch} from 'react-router-dom';
import {DirectoryContext} from '../context/DirectoryContext';

function App() {
  let [userId, setUserId]=useState(['']);
  let [contact, setContact]=useState(['']);

  let setId=([user, name, lastname])=>{
    setUserId([{
      user:user,
      name:name,
      lastname:lastname,
    }])
  }

  let setCont=([cont])=>{
    setContact([{
      contact:cont
    }])
  }

//console.log(contact)
//console.log(userId)
  return (
    <DirectoryContext.Provider value={{userId, setId, contact, setCont}}>
    <div className="main">
      <Switch>
         <Route exact path="/" component={LoginPage} />
         <Route path="/signup" component={SignUp} />
         <Route path="/usercreated" component={UserCreated} />
         <Route path="/userpage" component={UserPage} />
         <Route path="/createcontact" component={CreateContact} />
         <Route path="/contactview" component={ContactView} />
       </Switch>
    </div>
    </DirectoryContext.Provider>
  );
}

export default App;
