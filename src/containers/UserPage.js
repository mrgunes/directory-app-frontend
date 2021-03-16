import React from 'react';
import '../UserPage.css'

export default function UserPage() {
    return (
        <div className='userPageMain'>
            <navbar className='userPageNav'>
                <span className='userPageSpanOne'>
                    <h3 className='userPageh3One'>Welcome Kaan Catik</h3>
                </span>
                <span className='userPageSpanTwo'>
                    <h3 className='userPageh3Two'>Account</h3>
                    <h3 className='userPageh3Two'>Logout</h3>
                </span>
            </navbar>
        </div>
    )
}
