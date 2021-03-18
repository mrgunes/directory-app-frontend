import React from 'react';
import '../MediaQueries.css';
import {Link} from 'react-router-dom';

export default function ContactPage() {
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
                            <input placeholder='Name, Last Name'/>
                            <input placeholder='E-mail'/>
                            <input placeholder='Phone' />
                            <textarea className='pageContactTextAreaOne' placeholder='Address'></textarea>
                            <input placeholder='Website' />
                        </div>
                        <div className='pageMainContactAreaTwoDivTwo'>
                            <input placeholder='@Social' />
                            <input placeholder='Company' />
                            <input placeholder='Job' />
                            <textarea className='pageContactTextAreaTwo' placeholder='Note'></textarea>
                        </div>
                    </div>
                    <div className='pageContactButton'>
                        <Link to='/userpage'><button>Save</button></Link>
                        <Link to='/userpage'><button>Cancel</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}