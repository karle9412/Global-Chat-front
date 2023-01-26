import React, { useState } from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import { authheader } from '../../service/ApiService';
import SearchBoardList from './SearchBoardList';
import BoardList from './BoardList';
import Header from '../Header';
import '../board/boardCss/Board.css';


const Board = () => {

    authheader();

    const [searchItem, setSearchItem] = useState("");
    const [searchDataList, setSearchDataList] = useState([]);


    const handleChange = (e) => {
        setSearchItem(e.target.value);
    };

    const handleClick = () => {
        if(searchItem !== '') {
            axios.get(`/board/search/${searchItem}`)
            .then((res) => {
                setSearchDataList(res.data)
            })
            .catch((error)=>{
                console.log(error)
            })
        } else {
            alert('검색어를 입력해주세요');
            
        }
    };

    const activeEnter = (e) => {
        if(e.key === 'Enter') {
            if(searchItem !== '') {
                handleClick();
            } else {
                alert('검색어를 입력해주세요.');
            }
        }
    };




    return (
    <div className="Board">

        <header>
            <Header>
                <SearchInput value={searchItem} onChange={handleChange} activeEnter={activeEnter}/>
            </Header>
        </header>

    {/* 친구 추천 리스트 */}
        {/* <div className='recommendFriends'>
            <h2>오늘의 친구를 만나보세요!</h2>
        </div> */}
    
    {/* 게시글 목록 */}
        <div className='showList'>
            { searchDataList.length > 0 ? <SearchBoardList searchDataList={searchDataList} setSearchDataList={setSearchDataList} searchItem={searchItem}/> : <BoardList /> }
        </div>
        
        
    </div>
    );
}


export default Board;
