import { useState } from "react";
import { authheader } from "../../service/ApiService";
import './boardCss/BoardForm.css';
import WriteModal from "./WriteModal";

const BoardForm = ({value, onChange, onSearchBtnClick}) => {
    authheader();

    const [modalOpen, setModalOpen] = useState(false);
    
    const isModal = () => {
        setModalOpen(!modalOpen);
    };

    
    return(
        <div className="BoardForm">
            <div className="inputBox">
                <input
                    type='text'
                    value={value}
                    onChange={onChange} />
            </div>
            <div className="searchBtn">
                <button
                    onClick={onSearchBtnClick}>검색</button>
            </div>
            <div className="writeBtn">
                <button
                    onClick={isModal}>글쓰기</button>
                <WriteModal open={modalOpen} close={isModal} header="hedaer" />
            </div>
        </div>
    )

}

export default BoardForm;