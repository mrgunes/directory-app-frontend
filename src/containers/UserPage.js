import React, {useContext,useEffect,useState} from 'react';
import '../MediaQueries.css';
import {DirectoryContext} from '../context/DirectoryContext'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function UserPage() {
    let {userId}=useContext(DirectoryContext);
    let [isLoading, setLoading] = useState(true);
    let [contact, setContact] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/userpage/${userId[0].user}`)
        .then((response) => {
          setContact(response.data);
          setLoading(false);
        });
      }, []);

      if (isLoading) {
        return <div>Loading...</div>
      }

    // useEffect(()=>{
    //     axios.get(`http://localhost:8000/userpage/${userId[0].user}`)
    //     .then((response)=>{
    //         let data=response.data
    //         //console.log(data)
    //         setCont(data)
    //     })
    // },[contact]);


//console.log(contact)


    return (
        <div className='userPageMain'>
            <div className='userPageNav'>
                <span className='userPageSpanOne'>
                    <h3 className='userPageh3One'>{`Welcome ${userId[0].name} ${userId[0].lastname}`}</h3>
                </span>
                <ul className='userPageUl'>
                    {/* <li className='userPageLi'><a href='#'>Account</a></li> */}
                    <li className='contactPageLi'><Link to='/'>Logout</Link></li>
                </ul>
            </div>
            <div className='pageMainUser'>
                <div className='pageChild'>
                    <div className='pageMainOne'>
                        <h3>This is your directory page.</h3>
                        <p>You can create your contact list click to 'Create' button.</p>
                    </div>
                    <div className='pageMainThree'>
                        <Link to={`/createcontact/${userId[0].user}`}><button>Create</button></Link>
                    </div>
                </div>
            </div>
            <div className='mainContact'>
                <div className='pageMainContact'>
                    <div className='pageChildContact'>
                        <div className='pageMainOneContact'>
                            <div className='phoneIcon'>
                                <i className="far fa-address-card fa-5x" ></i>
                            </div>
                            <div className='infoArea'>
                                 <h4><Link to='/contactview'>{contact[0].contacts[0].nameLastName}</Link></h4>
                                <p>{contact[0].contacts[0].job}</p>
                                <p>{contact[0].contacts[0].phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
