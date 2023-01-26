import axios from "axios";
import { authheader } from "../../service/ApiService";
import React, { useEffect, useState } from "react";
import DetailBoardModal from "./DetailBoardModal";
import "./boardCss/SearchList.css";
import Reply from "../Reply/Reply";
import { Button } from "@material-ui/core";

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

  const isModal = () => {
    setModalOpen(!modalOpen);
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

  return (
    <div className="searchList">
      <DetailBoardModal open={modalOpen} close={isModal} header="Modal heading">
        {/* 모든 댓글 */}
        <div className="infoInModal">
          <div className="md-first-tab">
            <div className="md-username">{boardWriter}</div>
            <div className="md-date">{createdDate}</div>
          </div>
          <div className="md-categoty">{boardCategory}</div>
          <div className="md-inContent">{boardContent}</div>
          <div className="md-hashtag">{boardHashTag}</div>
          <div className="md-like">{boardLike}</div>
        </div>

        <Reply bno={bno} check={"1"} />
      </DetailBoardModal>

      {/* 댓글 하나 */}
      <div className="boardInfo">
        <div className="first-tab">
          <div className="username">{boardWriter}</div>
          <div className="date">{createdDate}</div>
        </div>
        <div className="categoty">
          <Button>{boardCategory}</Button>
        </div>
        <div className="inContent" onClick={isModal}>{boardContent}</div>
        <div className="hashtag">{boardHashTag}</div>
        <div className="like">{boardLike}</div>
      </div>
      <div className="replyInfo">
        <Reply bno={bno} check={"2"}/>
      </div>
      <hr />
    </div>
        
  );
};

export default SearchList;
