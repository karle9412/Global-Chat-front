import React, { useEffect, useState } from 'react';
import usefetch from '../../hooks/useAxios';
import Header from '../Header/Header';
import './profile.css'
import UserImg from '../Reply/UserImg';

export default function Profile() {
    const [tab, setTab] = useState('basic');
    useEffect(()=>{
        console.log(tab)
    }, [tab])

    const profile = usefetch('/user/getintro')
    console.log(profile)

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
                                <button onClick={() => setTab('board')}> 게시글 </button>
                                <button onClick={() => setTab('friend')}> 친구 </button>
                                <button onClick={() => setTab('recommend')}> 친구요청 </button>
                            </div>
                        </div>
                    }
                    <hr></hr>
                    {tab === 'basic' && <div> 게시글이 나와야 해요 </div>}
                    {tab === 'board' && <div> 게시글이 나와야 해요 </div>}
                    {tab === 'friend' && <div> 친구 목록이 나와야 해요</div>}
                    {tab === 'recommend' && <div> 친구요청이 나와야 해요 </div>}
                </div>
            </div>
        </>
    );
}