import axios from "axios";
import { authheader } from "../../service/ApiService";
import React, { useEffect, useState } from "react";
import DetailBoardModal from "./DetailBoardModal";
import './boardCss/SearchList.css';
import Reply from "../Reply/Reply";


const SearchList = ({ bno, createDate,boardContent, boardCategory, boardHashTag,
                        boardLike, boardWriter }) => {

    authheader();

    const [modalOpen, setModalOpen] = useState(false);

    const isModal = () => {
        setModalOpen(!modalOpen);
    };

    useEffect(() => {
        axios.get(`/board/detail/${bno}`)
        .then((res) => {
            
        })
        .catch((error)=>{
            console.log(error)
        })
    }, []);
    
    return (
        <div className="searchList" onClick={isModal}>
            <DetailBoardModal open={modalOpen} close={isModal} header="Modal heading">
                {/* 모든 댓글 */}
            <div className="infoInModal">
                <div>
                    {boardWriter}
                </div>
                <div>{createDate}</div>
                <div>{boardCategory}</div>
                <div>{boardContent}</div>
                <div>{boardHashTag}</div>
                <div>{boardLike}</div>
            </div>
            </DetailBoardModal>
            
            {/* 댓글 하나 */}
            <div className="info">
                <div>
                    {boardWriter}
                </div>
                <div>{createDate}</div>
                <div>{boardCategory}</div>
                <div>{boardContent}</div>
                <div>{boardHashTag}</div>
                <div>{boardLike}</div>
                <Reply bno={bno} />

            </div>
        </div>
        
    )
}

export default SearchList;