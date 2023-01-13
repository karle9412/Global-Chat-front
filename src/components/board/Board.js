import { useState } from 'react';
import Header from '../Header';
import axios from 'axios';
import BoardForm from './BoardForm';
import { authheader } from '../../service/ApiService';
import SearchBoardList from './SearchBoardList';
import BoardList from './BoardList';


const Board = () => {

    authheader();

    const [searchItem, setSearchItem] = useState("");
    const [searchDataList, setSearchDataList] = useState([]);


    const handleChange = (e) => {
        setSearchItem(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`/board/search/${searchItem}`)
        .then((res) => {
            setSearchDataList(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    };


    return (
    <div className='Board'>

        <div>
            <Header />
        </div>
        
    {/* 친구 추천 리스트 */}
        <div>
            <h2>오늘의 친구를 만나보세요!</h2>
        </div>
        
    {/* 검색 기능 */}
        <div>
            <BoardForm 
                value={searchItem}
                onChange={handleChange}
                onSearchBtnClick={handleSubmit} />
        </div>
    
    {/* 게시글 목록 */}
        <div>
            { searchDataList.length > 0 ? <SearchBoardList searchDataList={searchDataList} /> : <BoardList /> }
        </div>
        
       
    </div>
    );
}


export default Board;

