import React from 'react'
import {Link} from 'react-router-dom';

export default function UserCreated() {
    return (
        <div>
            <div className='pageMain'>
                <div className='pageChild'>
                    <div className='pageMainOne'>
                        <p>User was created. Please login.</p>
                    </div>
                    <div className='pageMainThree'>
                        <Link to='/'><button>Return Login</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
