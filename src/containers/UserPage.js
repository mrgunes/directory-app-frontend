import React from 'react';
import '../MediaQueries.css'

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
            <div className='pageMainUser'>
                <div className='pageChild'>
                    <div className='pageMainOne'>
                        <h3>This is your directory page.</h3>
                        <p>You can create your contact list click to 'Create' button.</p>
                    </div>
                    <div className='pageMainThree'>
                        <span>
                            <button>Create</button>
                        </span>
                    </div>
                </div>
            </div>
            <div className='mainContact'>
                <div className='pageMainContact'>
                    <div className='pageChildContact'>
                        <div className='pageMainOneContact'>
                            <div className='phoneIcon'>
                                <i className="far fa-address-card fa-5x" ></i>
                            </div>
                            <div className='infoArea'>
                                <h4>Kaan Catik</h4>
                                <p>Web Developer</p>
                                <p>+1 (123)456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pageMainContact'>
                    <div className='pageChildContact'>
                        <div className='pageMainOneContact'>
                            <div className='phoneIcon'>
                                <i className="far fa-address-card fa-5x" ></i>
                            </div>
                            <div className='infoArea'>
                                <h4>Kaan Catik</h4>
                                <p>Web Developer</p>
                                <p>+1 (123)456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pageMainContact'>
                    <div className='pageChildContact'>
                        <div className='pageMainOneContact'>
                            <div className='phoneIcon'>
                                <i className="far fa-address-card fa-5x" ></i>
                            </div>
                            <div className='infoArea'>
                                <h4>Kaan Catik</h4>
                                <p>Web Developer</p>
                                <p>+1 (123)456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
