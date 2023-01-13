import { Height } from "@material-ui/icons";
import React, { useState } from "react";
import usefetch from "../../hooks/usefetch";

// 댓글은 유저이메일과 보드넘버가 필요
export default function Reply() {


  const bno = '1';
  const reply = usefetch(`http://localhost:8080/reply/request/${bno}`)
  if (reply.length != 0) {
    console.log(reply);
  }

  //File id는 유저이메일에 들어있는 파일 기본값을 이용해서 들고 오기
  const id = '4028b28e85a9efd20185a9f4dbaa0001'
  const img = usefetch(`http://localhost:8080/userfile/upload/${id}`)


  return (
    <>
      {img.length != 0 && img.data.map((img) => (
        <img
          key={img.id}
          src={"resource/" + img.filename}
          style={{ width: '50%', height: '50%' }}
        />))
      }

      {reply.length != 0 && reply.data.map((reply,idx) => (
        <div  key={idx}>
        <div>{reply.email}</div>
        <div>{reply.indate}</div>
        <div>{reply.replyContent}</div>
        </div>
        ))
      }
      
    </>
  )


}