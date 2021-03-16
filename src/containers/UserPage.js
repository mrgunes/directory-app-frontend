import React from 'react';
import '../UserPage.css'

export default function UserPage() {
    return (
        <div className='userPageMain'>
            <div className='userPageNav'>
                <span className='userPageSpanOne'>
                    <h3 className='userPageh3One'>Welcome Kaan Catik</h3>
                </span>
                <ul className='userPageUl'>
                    <li className='userPageLi'><a href='#'>Account</a></li>
                    <li className='userPageLi'><a href='#'>Logout</a></li>
                </ul>
            </div>
        </div>
    )
}
