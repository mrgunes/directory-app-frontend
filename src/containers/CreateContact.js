import React, {useState,useContext} from 'react';
import '../MediaQueries.css';
import {Link, useHistory} from 'react-router-dom';
import {DirectoryContext} from '../context/DirectoryContext'
import axios from 'axios';

export default function CreateContact() {
    let {userId}=useContext(DirectoryContext);
    let history = useHistory();
    let [state, setState]=useState({
        nameLastName:'',
        email:'',
        phone:'',
        address:'',
        website:'',
        social:'',
        company:'',
        job:'',
        note:''
    });
    
    let handleChange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    let handleSubmit=()=>{
        let {nameLastName, email, phone, address, website, social, company, job, note}=state;
        axios.post(`http://localhost:8000/createcontact/${userId}`, {nameLastName, email, phone, address, website, social, company, job, note})
        .then((response)=>{
            let data=response.data;
            //console.log(data);
            history.push(`/userpage/${userId}`)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
        return (
        <div className='userPageMain'>
            <div className='contactPageNav'>
                <span className='contactPageSpanOne'>
                    <h3 className='contactPageh3One'>Welcome Kaan Catik</h3>
                </span>
                <ul className='contactPageUl'>
                    {/* <li className='contactPageLi'><a href='#'>Account</a></li> */}
                    <li className='contactPageLi'><Link to='/'>Logout</Link></li>
                </ul>
            </div>
            <div className='pageMainContactArea'>
                <div className='pageChild'>
                    <div className='pageMainOne'>
                        <h3>Contact Form</h3>
                    </div>
                    <div className='pageMainContactAreaTwo'>
                        <div className='pageMainContactAreaTwoDivOne'>
                            <input placeholder='Name, Last Name' name='nameLastName' onChange={handleChange}/>
                            <input placeholder='E-mail' name='email' onChange={handleChange}/>
                            <input placeholder='Phone' name='phone' onChange={handleChange}/>
                            <textarea className='pageContactTextAreaOne' placeholder='Address' name='address' onChange={handleChange}/>
                            <input placeholder='Website' name='website' onChange={handleChange}/>
                        </div>
                        <div className='pageMainContactAreaTwoDivTwo'>
                            <input placeholder='@Social' name='social' onChange={handleChange}/>
                            <input placeholder='Company' name='company' onChange={handleChange}/>
                            <input placeholder='Job' name='job' onChange={handleChange}/>
                            <textarea className='pageContactTextAreaTwo' placeholder='Note' name='note' onChange={handleChange}/>
                        </div>
                    </div>
                    <div className='pageContactButton'>
                        <button onClick={handleSubmit}>Save</button>
                        <Link to={`/userpage/${userId}`}><button>Cancel</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}