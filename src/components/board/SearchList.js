import axios from "axios";
import { authheader } from "../../service/ApiService";
import React, { useEffect, useState } from "react";
import DetailBoardModal from "./DetailBoardModal";
import "./boardCss/SearchList.css";
import Reply from "../Reply/Reply";
import { Button } from "@material-ui/core";
import {BsHeart} from "react-icons/bs";
import {BsHeartFill} from "react-icons/bs";
import {BsChatText} from "react-icons/bs";
import {BsThreeDots} from "react-icons/bs";
import { BoardDropDown } from "../board/DropDown";
import useDropDown from "../../hooks/useDropDown";

const SearchList = ({
  bno,
  createdDate,
  boardContent,
  boardCategory,
  boardHashTag,
  boardLike,
  boardWriter,
}) => {
  authheader();

  const [modalOpen, setModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [color, setColor] = useState("#586d9b");
  const [like, setLike] = useState(boardLike);
  const [isOpen, isRef, Handler] = useDropDown(false);
  
  const [replyVal, setReplyVal] = useState("");

  const handleComment = (e) => {
    setReplyVal(e.target.value);
  };

  const isModal = () => {
    setModalOpen(!modalOpen);
  };

  const saveComment = () => {
    axios
      .post(`/reply/register/${bno}`, {
        replyContent: replyVal,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const deleteBoard = () => {
    if(window.confirm("정말 삭제하시겠습니까?")) {
      axios
        .delete(`/board/delete/${bno}`)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
        alert("삭제되었습니다.");
        window.location.reload();
    } else {
      return;
    }
  };

  const increaseLike = () => {
    axios
      .post(`/board/like/increase/${bno}`)
      .then((res) => {
        setIsClicked(!isClicked);
        setColor("#de9b9b");
        setLike(like + 1);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const decreaseLike = () => {
    axios
      .post(`/board/like/decrease/${bno}`)
      .then((res) => {
        setIsClicked(!isClicked);
        setColor("#586d9b");
        setLike(like - 1);
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    axios
      .get(`/board/detail/${bno}`)
      .then((res) => {
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`/board/like/get/${bno}/`)
      .then((res) => {
        if(res.data.boardLike > 0){
          setIsClicked(true);
          setColor("#de9b9b");
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

 useEffect(() => {
  if(color === "#de9b9b" && isClicked === true){
    setColor("#de9b9b");
  }
 }, []);

  return (
    <div className="searchList">
      {/* 클릭시 자세히 보기 모달창 */}
      <DetailBoardModal open={modalOpen} close={isModal} header="상세보기" bno={bno} boardContent={boardContent}>
        {/* 모든 댓글 */}
        <div className="infoInModal">
          <div className="md-first-tab">
            <div className="md-username">{boardWriter}</div>
            <div className="md-date"> •{createdDate}</div>
            <div ref={isRef}>
              <BsThreeDots className="md-dotIcon" size={20} onClick={Handler} />
            </div>
            <ul>
            {isOpen && <BoardDropDown className="viewDropDown" deleteBoard={deleteBoard} bno={bno} />}
            </ul>
          </div>
          <div className="md-categoty">{boardCategory}</div>
          <div className="md-inContent">{boardContent}</div>
          <div className="md-hashtag">{boardHashTag}</div>
          <div className="md-like">
            {isClicked ? <BsHeartFill onClick={decreaseLike} style={{color: color}}/> : <BsHeartFill onClick={increaseLike} style={{color: color}}/>}
            {like}
          </div>
        </div>
        <hr />
        <Reply bno={bno} />
      </DetailBoardModal>

      {/* 게시판 기본 리스트 */}
      {/* 댓글 하나 */}
      <div className="boardInfo">
        <div className="first-tab">
          <div className="username">{boardWriter}</div>
          <div className="date"> •{createdDate}</div>
          <BsThreeDots className="dotIcon" size={20} onClick={Handler} ref={isRef}/>
          <ul>
            {isOpen && <BoardDropDown className="viewDropDown" deleteBoard={deleteBoard} bno={bno} />}
          </ul>
        </div>
        <div className="categoty">
          <Button>{boardCategory}</Button>
        </div>
        <div className="inContent" onClick={isModal}>{boardContent}</div>
        <div className="hashtag">{boardHashTag}</div>
        <div className="like">
          {isClicked ? <BsHeartFill onClick={decreaseLike} style={{color: color}} size={20}/> : <BsHeartFill onClick={increaseLike} style={{color: color}} size={20}/>}
          {like}
        </div>
      </div>
      <div className="replyInfo">
        <Reply bno={bno} />
      </div>
      <div className="replyBar">
        <input className="inputReply" type="text" placeholder="댓글 달기" value={replyVal} onChange={handleComment}/>
        {replyVal.length > 0 ? <label className="replyBtn" onClick={saveComment}>작성</label> : null}
      </div>
      <hr />
    </div>
        
  );
};

export default SearchList;
