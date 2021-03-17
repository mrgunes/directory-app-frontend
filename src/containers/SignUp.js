import React from 'react';
import '../SignUp.css'

export default function SignUp() {
    return (
        <div>
            <div className='pageMain'>
                <div className='pageChild'>
                    <div className='pageMainOne'>
                        <h3>Register Form</h3>
                        <p className='existUser' >This e-mail already registered.</p>
                    </div>
                    <div className='pageMainTwo'>
                        <input placeholder='name'/>
                        <input placeholder='last name' />
                    </div>
                    <div className='pageMainTwo'>
                        <input placeholder='email@example.com'/>
                        <input placeholder='password' />
                    </div>
                    <div className='pageMainThreeSignUp'>
                        <span className='button'>
                            <button>Submit</button>
                            <button>Cancel</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
