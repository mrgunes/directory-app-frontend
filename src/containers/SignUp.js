import React, {useState} from 'react';
import '../SignUp.css';
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
    let history = useHistory();
    let [name,setName]=useState('');
    let [lastName, setLastName]=useState('')
    let [email, setEmail]=useState('');
    let [password, setPassword]=useState('');

    let handleName=(e)=>{
        setName(e.target.value)
    }

    let handleLastName=(e)=>{
        setLastName(e.target.value)
    }

    let handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    let handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    let handleSubmit=(e)=>{
        axios.post('https://localhost:8000/signup', {name, lastName, email, password})
        .then((response)=>{
            console.log(response.data)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
    return (
        <div>
            <div className='pageMain'>
                <div className='pageChild'>
                    <div className='pageMainOne'>
                        <h3>Register Form</h3>
                        <p className='existUser' >This e-mail already registered.</p>
                    </div>
                    <div className='pageMainTwo'>
                        <input placeholder='name' name='name' onChange={handleName}/>
                        <input placeholder='last name' name='lastname' onChange={handleLastName}/>
                    </div>
                    <div className='pageMainTwo'>
                        <input placeholder='email@example.com' name='email' onChange={handleEmail}/>
                        <input placeholder='password' name='password' onChange={handlePassword}/>
                    </div>
                    <div className='pageMainThreeSignUp'>
                        <Link to='/usercreated' className='button'><button onClick={handleSubmit}>Submit</button></Link>
                        <Link to='/' className='button'><button>Cancel</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
