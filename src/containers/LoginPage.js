import React from 'react'

export default function LoginPage() {
    return (
        <div className='loginPageMain'>
             <div className='loginPageMainOne'>
                <h3>Login Form</h3>
                <p>Login to access your Directory</p>
             </div>
             <div className='loginPageMainTwo'>
                <input placeholder='email@example.com'/>
                <input placeholder='password' />
             </div>
            <div className='loginPageMainThree'>
                <button>Login</button>
                <p>Don't have an account. <a href='#'>Sign up</a>.</p>
            </div>
        </div>
    )
}
