import React from 'react';
import Header from '../Header';
import Reply from '../Reply/Reply';
import SearchBoard from './SearchBoard';

const Board = () => {
    return (
        <>
        {/* 친구 추천 리스트 */}
        <Header />
            <div>
                <h2>오늘의 친구를 만나보세요!</h2>
            </div>
        {/* 검색 기능 */}
            <div>
                <SearchBoard />
            </div>
            <div>
                <Reply />
            </div>
        </>
    );
}


export default Board;

