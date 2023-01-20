import { useState } from 'react';
import axios from 'axios';
import BoardForm from './BoardForm';
import { authheader } from '../../service/ApiService';
import SearchBoardList from './SearchBoardList';
import BoardList from './BoardList';
import Layout from '../Layout';
import '../board/boardCss/Board.css';


const Board = () => {

    authheader();

    const [searchItem, setSearchItem] = useState("");
    const [searchDataList, setSearchDataList] = useState([]);

    const handleChange = (e) => {
        setSearchItem(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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


    return (
    <div className="Board">

        <Layout>

    {/* 친구 추천 리스트 */}
        <div className='recommendFriends'>
            <h2>오늘의 친구를 만나보세요!</h2>
        </div>
        
    {/* 검색 기능 */}
        <div className='boardForm'>
            <BoardForm 
                value={searchItem}
                onChange={handleChange}
                onSearchBtnClick={handleSubmit} />
        </div>
    
    {/* 게시글 목록 */}
        <div>
            { searchDataList.length > 0 ? <SearchBoardList searchDataList={searchDataList} /> : <BoardList /> }
        </div>
        
        {/* 댓글 목록 */}
            {/* <div>
               <h2>댓글목록</h2> 
            </div> */}
        </Layout>
    </div>
    );
}


export default Board;

