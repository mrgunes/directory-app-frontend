import React, {useState, useEffect,useContext} from 'react';
import '../MediaQueries.css';
import {DirectoryContext} from '../context/DirectoryContext';
import {Link} from 'react-router-dom';
import axios from 'axios'

export default function ContactView() {
    let {userId}=useContext(DirectoryContext);
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

    let [readOnly, setReadOnly]=useState('readOnly');
    let [hiddenFirst, setHiddenFirst]=useState('');
    let [hiddenSecond, setHiddenSecond]=useState('hiddenButton')

    let handleChange=(e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    let handleReadOnly=()=>{
        if(readOnly==='readOnly'){
            setReadOnly('');
            setHiddenFirst('hiddenButton')
        }else {
            setReadOnly('readOnly');
            setHiddenFirst('')
        }
    }

    let hiddenButton=()=>{
        if(hiddenSecond==='hiddenButton'){
            setHiddenSecond('')
        }else{
            setHiddenSecond('hiddenButton')
        }
    }
    let pathname = window.location.pathname.split('/');
    //console.log(pathname)

    //console.log(contact)
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/contactview/${pathname[3]}`)
        .then((response)=>{
            let data=response.data
            //console.log(data)
            setState({
                nameLastName:data.nameLastName,
                email:data.email,
                phone:data.phone,
                address:data.address,
                website:data.website,
                social:data.social,
                company:data.company,
                job:data.job,
                note:data.note,
            })
        })
    },[]);

    let handleUpdate=()=>{
        let {nameLastName, email, phone, address, website, social, company, job, note}=state;
        axios.put(`http://localhost:8000/contactview/${pathname[3]}`,{nameLastName, email, phone, address, website, social, company, job, note})
        .then(response => {
            let data=response.data
            //console.log(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }

    //console.log(state)

    return (
        <div className='userPageMain'>
            <div className='contactPageNav'>
                <span className='contactPageSpanOne'>
                    <h3 className='contactPageh3One'>{`Welcome ${userId[0].name} ${userId[0].lastname}`}</h3>
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
                            <input placeholder='Name, Last Name' name='nameLastName' value={state.nameLastName} onChange={handleChange} readOnly={readOnly}/>
                            <input placeholder='E-mail' name='email' value={state.email} onChange={handleChange} readOnly={readOnly}/>
                            <input placeholder='Phone' name='phone' value={state.phone} onChange={handleChange} readOnly={readOnly}/>
                            <textarea className='pageContactTextAreaOne' placeholder='Address' name='address' value={state.address}onChange={handleChange} readOnly={readOnly}></textarea>
                            <input placeholder='Website' name='website' value={state.website} onChange={handleChange} readOnly={readOnly}/>
                        </div>
                        <div className='pageMainContactAreaTwoDivTwo'>
                            <input placeholder='@Social' name='social' value={state.social} onChange={handleChange} readOnly={readOnly}/>
                            <input placeholder='Company' name='company' value={state.company} onChange={handleChange} readOnly={readOnly}/>
                            <input placeholder='Job' name='job' value={state.job} onChange={handleChange} readOnly={readOnly}/>
                            <textarea className='pageContactTextAreaTwo' placeholder='Note' name='note' value={state.note} onChange={handleChange} readOnly={readOnly}></textarea>
                        </div>
                    </div>
                    <div className='pageContactButton'>
                        <button className={hiddenFirst} onClick={()=>{handleReadOnly() ; hiddenButton()}}>Update</button>
                        <Link to={`/userpage/${userId[0].user}`} className={hiddenFirst}><button>Close</button></Link>
                        <Link to={`/contactview/${userId[0].user}/${pathname[3]}`} className={hiddenSecond}><button  onClick={()=>{handleReadOnly() ; hiddenButton() ; handleUpdate()}}>Save</button></Link>
                        <button className={hiddenSecond} onClick={()=>{handleReadOnly() ; hiddenButton()}}>Cancel</button>
                    </div>
                    <h5>Delete this contact?</h5>
                </div>
            </div>
        </div>
    )
}
