import React from 'react';
import '../MediaQueries.css'

export default function ContactView() {
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
                        <span className='button'>
                            <button>Update</button>
                            <button>Close</button>
                            <button className='hiddenButton'>Save</button>
                            <button className='hiddenButton'>Cancel</button>
                            <h5><a href='#'>Delete this contact?</a></h5>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
