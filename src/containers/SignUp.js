import React from 'react'

export default function SignUp() {
    return (
        <div>
            <div className='pageMain'>
            <div className='pageChild'>
                <div className='pageMainOne'>
                    <h3>Create User Form</h3>
                </div>
                <div className='pageMainTwo'>
                    <input placeholder='name'/>
                    <input placeholder='last name' />
                </div>
                <div className='pageMainTwo'>
                    <input placeholder='email@example.com'/>
                    <input placeholder='password' />
                </div>
                <div className='pageMainThree'>
                    <span>
                        <button>Submit</button>
                    </span>
                </div>
            </div>
        </div>
        </div>
    )
}
