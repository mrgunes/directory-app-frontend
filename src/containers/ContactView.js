import React from 'react';
import '../MediaQueries.css';
import {Link} from 'react-router-dom';

export default function ContactView() {
    return (
        <div className='userPageMain'>
            <div className='contactPageNav'>
                <span className='contactPageSpanOne'>
                    <h3 className='contactPageh3One'>Welcome Kaan Catik</h3>
                </span>
                <ul className='contactPageUl'>
                    <li className='contactPageLi'><a href='#'>Account</a></li>
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
                            <input placeholder='Name, Last Name' readOnly/>
                            <input placeholder='E-mail' readOnly/>
                            <input placeholder='Phone' readOnly/>
                            <textarea className='pageContactTextAreaOne' placeholder='Address' readOnly></textarea>
                            <input placeholder='Website' readOnly/>
                        </div>
                        <div className='pageMainContactAreaTwoDivTwo'>
                            <input placeholder='@Social' readOnly/>
                            <input placeholder='Company' readOnly/>
                            <input placeholder='Job' readOnly/>
                            <textarea className='pageContactTextAreaTwo' placeholder='Note' readOnly></textarea>
                        </div>
                    </div>
                    <div className='pageContactButton'>
                       <button>Update</button>
                        <Link to='/userpage'><button>Close</button></Link>
                        <Link to='/contactview' className='hiddenButton'><button >Save</button></Link>
                        <Link to='/contactview' className='hiddenButton'><button>Cancel</button></Link>
                    </div>
                    <h5>Delete this contact?</h5>
                </div>
            </div>
        </div>
    )
}
