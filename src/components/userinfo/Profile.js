import { Button } from '@material-ui/core';
import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { authheader, getuser } from '../../service/ApiService';
import ReplyUserImg from '../Reply/ReplyUserImg';

export default function Profile() {

    const [username, setUsername] = React.useState('');
    const [email,setEmail] =  React.useState([]);
    const [input,setInput] =  React.useState('');
    // const ACCESS_TOKEN = "ACCESS_TOKEN";
    // const accessToken = localStorage.getItem("ACCESS_TOKEN");
    

    function getuser() {
      authheader()
      axios.get('/user/getintro',)
          .then(response => {
              setUsername(response.data.username)
              setEmail(response.data.email)
              console.log(response)
          })
          .catch(error => {
              alert("ㄴㄴ")
              console.error(error);
          });
  }
    
  
  
 
    // const inputRef = useRef(null);
  
    // const onUploadImage = useCallback((e) => {
    //   if (!e.target.files) {
    //     return;
    //   }
  
    //   const formData = new FormData();
    //   formData.append('image', e.target.files[0]);
      
    //   authheader()
    //   axios({
    //     url: '/file/upload',
    //     method: 'POST',
    //     data: formData,
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   })
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }, []);

    // const onUploadImageButtonClick = useCallback(() => {
    //   if (!inputRef.current) {
    //     return;
    //   }
    //   inputRef.current.click();
    // }, []);


    const [file, setFile] = useState(null);

    // const  Uploadfile = async (files) => {
    //   const formData = new FormData();
    //   formData.append('files', files);
    //   console.log(formData)
    //   const config = {
    //     headers: {
    //       'content-type': 'multipart/form-data',
    //     },
    //   };
    //   const response = await axios.post('/file/upload', formData, config);
    //   console.log(response.data)
    //   return response.data;
    // }
     
    
   
    
      
    getuser()
    
    
    return (
        <>
            <div className='findIdDiv'>
                <h1 className='h1'>글랜챗</h1>
                
                    <div className='findIdForm'>
                     <h3 className='h3'>{username}</h3>
                     <ReplyUserImg email={email} />
                     {/* <hr className='hr'/> */}

      

                    </div>

                    
            </div>

         


        </>
    );
    }