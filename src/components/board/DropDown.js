import "../board/boardCss/DropDown.css";

export const BoardDropDown = ({deleteBoard, bno}) => {

    return (
        <div className="boardDropDown">
                <li onClick={deleteBoard}>삭제</li>
        </div>
    )

};



export const HeaderDropDown = () => {
    return (
        <div className="dropdown">
            <li>마이페이지</li>
            <li>설정</li>
            <li>로그아웃</li>
        </div>    
    )
};
