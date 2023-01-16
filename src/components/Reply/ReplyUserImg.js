import { useState,useEffect } from "react";
import usefetch from "../../hooks/usefetch";
import axios from "axios";
import "./reply.css"

const ReplyUserImg = (email) => {
  const [img, setImg] = useState([]);

  useEffect(()=> {
    axios.get(`http://localhost:8080/auth/getuserimg/${email.email}`)
  .then(result => {
    if(result != null){
      axios.get(`http://localhost:8080/userfile/upload/${result.data}`)
      .then(res => {
        if(res != null){
          setImg(res)
        }
      })
    }
  })
  }, [])

  return(
    <>
    <div className="box">
    {img.length !== 0 && (
        <img
        className="profile"
          src={"resource/" + img.data.filename}
        />)
      }
      </div>
      </>
  )

}

export default ReplyUserImg