import { Height } from "@material-ui/icons";
import React, { useState } from "react";
import usefetch from "../../hooks/usefetch";
import ReplyUserImg from "./ReplyUserImg";
import "./reply.css"

// 댓글은 보드넘버가 필요
export default function Reply(bno) {

  const reply = usefetch(`http://localhost:8080/reply/request/${bno.bno}`)

  //File id는 유저이메일에 들어있는 파일 기본값을 이용해서 들고 오기
  // const id = '4028b28e85a9efd20185a9f4dbaa0001'
  // const img = usefetch(`http://localhost:8080/userfile/upload/${id}`)


  return (
    <>
      {/* {img.length !== 0 && img.data.map((img) => (
        <img
          key={img.id}
          src={"resource/" + img.filename}
          style={{ width: '50%', height: '50%' }}
        />))
      } */}

      {reply.length !== 0 && reply.data.map((reply, idx) => (
        <div className="replyForm" key={idx}>
          <ReplyUserImg
            email={reply.email} />
          <div>{reply.email}</div>
          <div>{reply.indate}</div>
          <div>{reply.replyContent}</div>
        </div>
      ))
      }

    </>
  )


}