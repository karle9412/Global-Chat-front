import { Height } from "@material-ui/icons";
import React, { useState } from "react";
import usefetch from "../../hooks/usefetch";
import UserImg from "./UserImg";
import "./reply.css"
import TextTranslate from "./TextTranslate";

// 댓글은 보드넘버가 필요
export default function Reply({bno, check}) {

  const reply = usefetch(`http://localhost:8080/reply/request/${bno}`)

  return (
    <>
      {check === "1" &&
        reply.length !== 0 && reply.data.map((reply, idx) => (
          <div className="replyForm" key={idx}>
            <div className="box">
              <UserImg
                email={reply.email} />
            </div>
            <div>{reply.email}</div>
            <div>{reply.indate}</div>
            <div>{reply.replyContent}</div>
            {/* <TextTranslate text={reply.replyContent} /> */}
          </div>
))}
      {check === "2" &&
          reply.length !== 0 && reply.data.reverse().map((reply, idx) => (
            idx === 0 &&
            <div className="replyForm" key={idx}>
              <div className="box">
                <UserImg
                  email={reply.email} />
              </div>
              <div>{reply.email}</div>
              <div>{reply.indate}</div>
              <div>{reply.replyContent}</div>
              {/* <TextTranslate text={reply.replyContent} /> */}
            </div>
          ))
          }
      
    </>
  )


}