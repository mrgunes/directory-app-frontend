import React from 'react';
import '../MediaQueries.css'

export default function ContactPage() {
    return (
        <div className='userPageMain'>
            <div className='contactPageNav'>
                <span className='contactPageSpanOne'>
                    <h3 className='contactPageh3One'>Welcome Kaan Catik</h3>
                </span>
                <ul className='contactPageUl'>
                    <li className='contactPageLi'><a href='#'>Account</a></li>
                    <li className='contactPageLi'><a href='#'>Logout</a></li>
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
                        <span className='button'>
                            <button>Save</button>
                            <button>Cancel</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}