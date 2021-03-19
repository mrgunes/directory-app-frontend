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
    let [regEmail, setRegEmail]=useState('existUser')

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

    let handleSubmit=()=>{
        axios.post('http://localhost:8000/signup', {name, lastName, email, password})
        .then((response)=>{
        //console.log(response.data)
        let data=response.data;
        //console.log(data.name);
        if (data.name==='MongoError'){
            setRegEmail('existUserP')
        } else {
            history.push('/usercreated')
        }
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
                        <p className={regEmail} >This e-mail already registered.</p>
                    </div>
                    <div className='pageMainTwo'>
                        <input placeholder='name' name='name' onChange={handleName}/>
                        <input placeholder='last name' name='lastName' onChange={handleLastName}/>
                    </div>
                    <div className='pageMainTwo'>
                        <input placeholder='email@example.com' name='email' onChange={handleEmail}/>
                        <input placeholder='password' name='password' onChange={handlePassword}/>
                    </div>
                    <div className='pageMainThreeSignUp'>
                        <button className='button' onClick={handleSubmit}>Submit</button>
                        <Link to='/' className='button'><button>Cancel</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
