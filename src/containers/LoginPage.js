import React, {useState,useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {DirectoryContext} from '../context/DirectoryContext'
import axios from 'axios';

export default function LoginPage() {
    let {userId,setId}=useContext(DirectoryContext);
    let history = useHistory();
    let [email, setEmail]=useState('');
    let [password, setPassword]=useState('');
    let [findUser, setFindUser]=useState('notFound');
    let [checkUser, setCheckUser]=useState('wrongUser');

    let handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    let handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    // console.log(email, password);

    let onLogin=()=>{
        axios.post('http://localhost:8000/', {email, password})
        .then((response)=>{
            console.log(response.data);
            let data=response.data;
            
            if (data.email===false){
                if(checkUser==='wrongUserP'){
                    setCheckUser('wrongUser')
                    setFindUser('notFoundP')
                }
                setFindUser('notFoundP')
            } else if (data[1]===false){
                if(findUser==='notFoundP'){
                    setFindUser('notFound')
                    setCheckUser('wrongUserP')
                }
                setCheckUser('wrongUserP')
            } else if (data[1]===true)
                setId([data[0]._id])
                history.push(`/userpage/${userId.user}`)
        }) 
        
    }

    return (
        <div className='pageMain'>
            <div className='pageChild'>
                <div className='pageMainOne'>
                    <h3>Login Form</h3>
                    <p>Login to access your Directory</p>
                    <p className={findUser} >User was not found.</p>
                    <p className={checkUser} >Email or password doesn't match.</p>
                </div>
                <div className='pageMainTwo'>
                    <input placeholder='email@example.com' name='email' onChange={handleEmail}/>
                    <input placeholder='password' name='password' onChange={handlePassword}/>
                </div>
                <div className='pageMainThree'>
                    <button onClick={onLogin}>Login</button>
                    <p>Don't have an account? <Link to='/signup'>Sign Up</Link>.</p>
                </div>
            </div>
        </div>
    )
}
