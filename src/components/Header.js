import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { IoChatbubbles } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { BsFillBellFill } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import WriteModal from "./board/WriteModal";

export default function Header(props) {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);

  const isModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <header>
        <div className="tab1">
          <BsFillHouseDoorFill
            className="icon"
            size={40}
            onClick={() => {
              navigate("/board");
            }}
          />
        </div>

        <div className="tab2">{props.children}</div>

        <div className="tab3">
          <BsFillBellFill className="icon" size={35} />
          
          <BsPencilSquare
            className="icon"
            onClick={isModal}
            size={25}
          ></BsPencilSquare>

          <WriteModal open={modalOpen} close={isModal} header="hedaer" />
          
          <FaTelegramPlane
            className="icon"
            onClick={() => {
              navigate("/chatroom");
            }}
            size={40}
          />

          <IoChatbubbles className="icon" size={40} />

          <BsPeopleFill className="icon" size={40} />
    
          <BsPersonCircle
            className="icon"
            size={40}
            style={{ color: "#BDBDBD" }}
          />
        </div>
      </header>
    </>
  );
}
