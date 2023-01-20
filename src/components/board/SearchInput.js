import { useState, useRef } from "react";
import { authheader } from "../../service/ApiService";
import "./boardCss/SearchInput.css";
import WriteModal from "./WriteModal";
import { BsPencilSquare } from "react-icons/bs";
import {BsSearch} from "react-icons/bs";
import SearchBoardList from "./SearchBoardList";

const BoardForm = ({ value, onChange, activeEnter, handleClick }) => {
  authheader();

  const [modalOpen, setModalOpen] = useState(false);

  const isModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="BoardForm">
      <div className="inputBox">
        <input
          className="searchInput"
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={activeEnter}
        />
        {/* <button className="btnBox"> */}
          <BsSearch onClick={handleClick} className="btn" size={20} style={{color: '#aaa'}}/>
        {/* </button> */}
      </div>
      {/* <div className="searchBtn"> 
      </div> */}
      {/* <div className="writeBtn">
        <BsPencilSquare onClick={isModal} size={30}></BsPencilSquare>
        <WriteModal open={modalOpen} close={isModal} header="hedaer" />
      </div> */}
    </div>
  );
};

export default BoardForm;
