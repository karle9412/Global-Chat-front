import axios from "axios";
import { useState } from "react";
import "./boardCss/Modal.css";
import UpdateModal from "../board/UpdateModal";

const DetailBoardModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, boardContent, bno } = props;
  // const [bno, setBno] = useState(props.bno);
  const [isClicked, setIsClicked] = useState(false);


  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  // const handleUpdate = () => {
  //   axios
  //     .put(`/board/update/${bno}`)
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  // };


  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className="update" onClick={handleClick}>
              수정
            </button>
            {isClicked ? <UpdateModal open={isClicked} close={() => {setIsClicked(false)}} header="게시글 수정"
                                      boardContent={boardContent} bno={bno}/> : null}
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default DetailBoardModal;
