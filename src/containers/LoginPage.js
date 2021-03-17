import React from 'react';
import {Link} from 'react-router-dom';

export default function LoginPage() {
    return (
        <div className='pageMain'>
            <div className='pageChild'>
                <div className='pageMainOne'>
                    <h3>Login Form</h3>
                    <p>Login to access your Directory</p>
                    <p className='notFound' >User was not found.</p>
                    <p className='wrongUser' >Wrong e-mail or password.</p>
                </div>
                <div className='pageMainTwo'>
                    <input placeholder='email@example.com'/>
                    <input placeholder='password' />
                </div>
                <div className='pageMainThree'>
                    <span>
                        <Link to='/userpage'><button>Login</button></Link>
                    </span>
                    <p>Don't have an account? <Link to='/signup'>Sign Up</Link>.</p>
                </div>
            </div>
        </div>
    )
}
