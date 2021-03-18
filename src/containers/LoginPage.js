import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

export default function LoginPage() {
    let history = useHistory();
    let [email, setEmail]=useState('');
    let [password, setPassword]=useState('');
    let [findUser, setFindUser]=useState('notFound');
    let [checkUser, setCheckUser]=useState('wrongUser')

    let handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    let handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    console.log(email, password);

    let onLogin=()=>{
        if (email!=='test@test.com'){
            if(checkUser==='wrongUserP'){
                setCheckUser('wrongUser')
                setFindUser('notFoundP')
            }
            setFindUser('notFoundP')
        } else if (email==='test@test.com' && password!=='12345'){
            if(findUser==='notFoundP'){
                setFindUser('notFound')
                setCheckUser('wrongUserP')
            }
            setCheckUser('wrongUserP')
        } else if (email==='test@test.com' && password==='12345')
            history.push('/userpage')   
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
                    <input placeholder='email@example.com' onChange={handleEmail}/>
                    <input placeholder='password' onChange={handlePassword}/>
                </div>
                <div className='pageMainThree'>
                    <button onClick={onLogin}>Login</button>
                    <p>Don't have an account? <Link to='/signup'>Sign Up</Link>.</p>
                </div>
            </div>
        </div>
    )
}
