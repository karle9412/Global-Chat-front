import React from 'react';
import usefetch from '../../hooks/usefetch';
import Header from '../Header/Header';
import './profile.css'
import UserImg from '../Reply/UserImg';

export default function Profile() {

    const profile = usefetch('/user/getintro')
    console.log(profile.length)

    return (
        <>
            <Header />
            <div className='profile-Div'>
                <h1 className='h1'>글랜챗</h1>
                <div className='profile-form'>
                    {profile.length !== 0 &&
                        <div className='profile-info'>
                            <div className='profile-box'>
                                <UserImg email={profile.data.email} />
                            </div>
                            <div className='profile-info-text'>
                                <h3 className='h3'>{profile.data.username}</h3>
                                <h4> {profile.data.intro}</h4>
                                <h5> 게시글, 친구, 친구요청</h5>
                            </div>
                        </div>
                    }
                    <hr></hr>
                </div>
            </div>
        </>
    );
}