import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { authheader, getuser } from '../../service/ApiService';
import UserImg from '../Reply/UserImg';
import './profile.css';

export default function Profile() {

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [intro, setIntro] = React.useState('');

  function getuser() {
    authheader()
    axios.get('/user/getintro',)
      .then(response => {
        console.log(response)
        setUsername(response.data.username)
        setEmail(response.data.email)
        setIntro(response.data.intro)
      })
      .catch(error => {
        alert("ㄴㄴ")
        console.error(error);
      });
  }
  getuser()


  return (
    <>
      <div className='findIdDiv'>
        <h1 className='h1'>글랜챗</h1>
        <div className='profileDiv'>
          <div className='profileform'>
            <div className='box-profile'>
              {
                email != '' &&
                <UserImg email={email} />
              }
            </div>
            <div className='profiletext'>
            <h3>{username}</h3>
            <h5>{intro}</h5>
            </div>
          </div>
          <hr className='hr' />
        </div>
      </div>
    </>
  );
}